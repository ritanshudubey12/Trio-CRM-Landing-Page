// Fixed full-page WebGL world. The camera flies forward through it as the page scrolls:
// hero crystal -> lead orbit -> pipeline funnel -> dashboard panels -> portal (final CTA).
import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const TRAVEL = 96;          // how far the camera flies in total
const pointer = { x: 0, y: 0 };
const scroll = { target: 0, p: 0 };

function useScrollProgress() {
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      scroll.target = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
    };
    const move = (e) => { pointer.x = (e.clientX / window.innerWidth) * 2 - 1; pointer.y = (e.clientY / window.innerHeight) * 2 - 1; };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    window.addEventListener('pointermove', move, { passive: true });
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); window.removeEventListener('pointermove', move); };
  }, []);
}

function Rig({ mobile }) {
  useFrame(({ camera }, dt) => {
    scroll.p = THREE.MathUtils.damp(scroll.p, scroll.target, 4, dt);
    const p = scroll.p;
    const z = 12 - p * TRAVEL;
    camera.position.set(
      Math.sin(p * Math.PI * 5) * 2.2 + pointer.x * 0.6,
      Math.cos(p * Math.PI * 3) * 0.9 - pointer.y * 0.4,
      z,
    );
    camera.lookAt(Math.sin(p * Math.PI * 5 + 0.6) * 1.2, 0, z - 14);
    camera.rotation.z += Math.sin(p * Math.PI * 8) * 0.05;
    camera.fov = 55 + Math.sin(p * Math.PI) * 6; // gentle speed feel
    camera.updateProjectionMatrix();
    void mobile;
  });
  return null;
}

function Stars({ count }) {
  const geo = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 70;
      a[i * 3 + 1] = (Math.random() - 0.5) * 40;
      a[i * 3 + 2] = 20 - Math.random() * (TRAVEL + 50);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(a, 3));
    return g;
  }, [count]);
  return (
    <points geometry={geo}>
      <pointsMaterial size={0.09} color="#cfc4ff" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  );
}

// Stage 0 — hero: the brand logo inside a wireframe shell with two rings (same look as before)
function Crystal({ mobile }) {
  const g = useRef(), shell = useRef(), r1 = useRef(), r2 = useRef(), logo = useRef();
  const tex = useLoader(THREE.TextureLoader, '/logo.png');
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    g.current.position.y = Math.sin(t * 0.8) * 0.25;
    shell.current.rotation.y = t * 0.25 + scroll.p * 6;
    shell.current.rotation.x = Math.sin(t * 0.3) * 0.2 + scroll.p * 2;
    r1.current.rotation.x = t * 0.5;
    r2.current.rotation.y = -t * 0.4;
    // logo keeps facing the viewer, swaying gently and following the pointer
    logo.current.rotation.y = Math.sin(t * 0.6) * 0.35 + pointer.x * 0.4;
    logo.current.rotation.x = Math.sin(t * 0.5) * 0.1 - pointer.y * 0.25;
    logo.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.03);
  });
  return (
    <group ref={g} position={[mobile ? 0 : 3.6, mobile ? 1.8 : 0.2, 0]} scale={mobile ? 0.7 : 1}>
      <mesh position={[0, 0, -0.4]}>
        <circleGeometry args={[1.9, 48]} />
        <meshBasicMaterial color="#3b1d8f" transparent opacity={0.45} />
      </mesh>
      <mesh ref={logo}>
        <planeGeometry args={[2.6 * (48 / 55) * 1.15, 2.6 * 1.15]} />
        <meshBasicMaterial map={tex} transparent alphaTest={0.02} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <group ref={shell}>
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#FF4D8D" wireframe transparent opacity={0.35} />
        </mesh>
      </group>
      <mesh ref={r1}><torusGeometry args={[2.6, 0.025, 12, 120]} /><meshBasicMaterial color="#C6F432" /></mesh>
      <mesh ref={r2} rotation={[1.2, 0, 0]}><torusGeometry args={[3.1, 0.02, 12, 120]} /><meshBasicMaterial color="#8B5CF6" /></mesh>
    </group>
  );
}

// Stage 1 — "leads" orbiting in
function LeadOrbit({ count }) {
  const refs = useRef([]);
  const data = useMemo(() => Array.from({ length: count }, (_, i) => ({
    a: (i / count) * Math.PI * 2, r: 4 + Math.random() * 5, y: (Math.random() - 0.5) * 6, s: 0.15 + Math.random() * 0.25, sp: 0.1 + Math.random() * 0.3,
    c: ['#8B5CF6', '#FF4D8D', '#C6F432'][i % 3],
  })), [count]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    data.forEach((d, i) => {
      const m = refs.current[i]; if (!m) return;
      const a = d.a + t * d.sp;
      m.position.set(Math.cos(a) * d.r, d.y + Math.sin(t + i) * 0.3, -14 + Math.sin(a) * d.r * 0.8);
      m.rotation.set(t * d.sp * 2, t * d.sp * 3, 0);
    });
  });
  return data.map((d, i) => (
    <mesh key={i} ref={(el) => (refs.current[i] = el)} scale={d.s}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={d.c} emissive={d.c} emissiveIntensity={0.5} metalness={0.3} roughness={0.35} />
    </mesh>
  ));
}

// Stage 2 — pipeline funnel: four lanes, shrinking stage by stage
function Funnel() {
  const lanes = [
    { x: -6, n: 9, c: '#8B5CF6' }, { x: -2, n: 6, c: '#6EA8FF' }, { x: 2, n: 4, c: '#FFB86B' }, { x: 6, n: 2, c: '#C6F432' },
  ];
  const refs = useRef([]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    refs.current.forEach((m, i) => { if (m) m.position.y = m.userData.y + Math.sin(t * 1.2 + i) * 0.15; });
  });
  let k = 0;
  return (
    <group position={[0, 0, -38]}>
      {lanes.map((l, li) => (
        <group key={li} position={[l.x, 0, 0]}>
          {Array.from({ length: l.n }).map((_, j) => {
            const idx = k++;
            const y = -3.2 + j * 0.78;
            const size = 1.5 - li * 0.18;
            return (
              <mesh key={j} ref={(el) => { if (el) { el.userData.y = y; refs.current[idx] = el; } }} position={[0, y, (j % 2) * 0.4]} rotation={[0, 0.5, 0]}>
                <boxGeometry args={[size, 0.6, size * 0.7]} />
                <meshStandardMaterial color={l.c} emissive={l.c} emissiveIntensity={0.35} metalness={0.4} roughness={0.3} transparent opacity={0.92} />
              </mesh>
            );
          })}
        </group>
      ))}
    </group>
  );
}

// Stage 3 — floating dashboard panels
function Panels() {
  const refs = useRef([]);
  const items = useMemo(() => Array.from({ length: 7 }, (_, i) => ({
    x: (i % 2 ? 1 : -1) * (3.5 + (i % 3)), y: ((i * 37) % 5) - 2, z: -56 - i * 3.2, w: 4 + (i % 3), h: 2.6 + (i % 2),
  })), []);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    refs.current.forEach((m, i) => { if (!m) return; m.rotation.y = Math.sin(t * 0.4 + i) * 0.25 + (items[i].x > 0 ? -0.5 : 0.5); m.position.y = items[i].y + Math.sin(t * 0.7 + i) * 0.3; });
  });
  return items.map((p, i) => (
    <group key={i} ref={(el) => (refs.current[i] = el)} position={[p.x, p.y, p.z]}>
      <mesh>
        <planeGeometry args={[p.w, p.h]} />
        <meshBasicMaterial color="#1b1640" transparent opacity={0.75} side={THREE.DoubleSide} />
      </mesh>
      {[0.35, 0, -0.35].map((o, j) => (
        <mesh key={j} position={[-p.w * 0.12, o * p.h * 0.8, 0.01]}>
          <planeGeometry args={[p.w * 0.6 * (1 - j * 0.22), 0.14]} />
          <meshBasicMaterial color={['#8B5CF6', '#FF4D8D', '#C6F432'][(i + j) % 3]} />
        </mesh>
      ))}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(p.w, p.h)]} />
        <lineBasicMaterial color="#8B5CF6" />
      </lineSegments>
    </group>
  ));
}

// Stage 4 — portal behind the final CTA
function Portal() {
  const refs = useRef([]);
  useFrame(({ clock }) => { refs.current.forEach((m, i) => m && (m.rotation.z = clock.elapsedTime * (0.2 + i * 0.12) * (i % 2 ? -1 : 1))); });
  return (
    <group position={[0, 0, -92]}>
      {[3.2, 4.6, 6, 7.6].map((r, i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <torusGeometry args={[r, 0.06, 12, 140]} />
          <meshBasicMaterial color={['#C6F432', '#FF4D8D', '#8B5CF6', '#6EA8FF'][i]} />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene3D() {
  useScrollProgress();
  const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 scene-fallback">
      <Canvas dpr={[1, mobile ? 1.5 : 2]} camera={{ fov: 55, near: 0.1, far: 140, position: [0, 0, 12] }} gl={{ antialias: !mobile, powerPreference: 'high-performance' }}>
        <fog attach="fog" args={['#07060F', 14, 60]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[6, 6, 6]} intensity={80} color="#8B5CF6" />
        <pointLight position={[-6, -4, -10]} intensity={60} color="#FF4D8D" />
        <Rig mobile={mobile} />
        <Stars count={mobile ? 500 : 1400} />
        <Crystal mobile={mobile} />
        <LeadOrbit count={mobile ? 18 : 36} />
        <Funnel />
        <Panels />
        <Portal />
      </Canvas>
    </div>
  );
}

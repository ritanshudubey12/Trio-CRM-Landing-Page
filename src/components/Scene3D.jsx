// Fixed full-page WebGL world. The camera flies forward through it as the page scrolls:
// hero crystal -> lead orbit -> pipeline funnel -> dashboard panels -> portal (final CTA).
import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette, Noise, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { SHOT_LIST } from '../data/shots';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import * as THREE from 'three';

const CA_OFFSET = new THREE.Vector2(0.0007, 0.0007);
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
      <pointsMaterial size={0.09} color="#bcd7ff" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  );
}

const hot = (hex, k = 2.4) => new THREE.Color(hex).multiplyScalar(k); // >1 => blooms

// Image-based lighting so the glossy materials get real reflections (studio look).
function Env() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pm = new THREE.PMREMGenerator(gl);
    const env = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.7;
    return () => { scene.environment = null; env.dispose(); pm.dispose(); };
  }, [gl, scene]);
  return null;
}

function useGlow() {
  return useMemo(() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(0.2, 'rgba(90,150,255,.5)');
    g.addColorStop(0.55, 'rgba(255,90,95,.16)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }, []);
}

// The brand mark rebuilt as real 3D geometry: glossy red person + five blue "lead" pins.
const PIN_ANGLES = [180, 135, 90, 45, 0];
function Logo3D() {
  const blue = { color: '#1e7dff', roughness: 0.12, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05, emissive: '#0a3cff', emissiveIntensity: 0.4, envMapIntensity: 1.5 };
  const red = { color: '#ff1a1a', roughness: 0.14, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05, emissive: '#b00000', emissiveIntensity: 0.45, envMapIntensity: 1.5 };
  const pins = useRef([]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    pins.current.forEach((p, i) => p && p.scale.setScalar(1 + Math.sin(t * 2 + i * 1.3) * 0.05));
  });
  return (
    <group position={[0, -0.1, 0]}>
      <mesh position={[0, 0.05, 0]}><sphereGeometry args={[0.52, 48, 48]} /><meshPhysicalMaterial {...red} /></mesh>
      <mesh position={[0, -1.2, 0]} scale={[1.1, 0.78, 0.5]}>
        <sphereGeometry args={[1, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial {...red} side={THREE.DoubleSide} />
      </mesh>
      {PIN_ANGLES.map((a, i) => (
        <group key={a} rotation={[0, 0, (a * Math.PI) / 180]} position={[0, 0.05, 0]}>
          <mesh position={[1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}><capsuleGeometry args={[0.12, 0.62, 10, 20]} /><meshPhysicalMaterial {...blue} /></mesh>
          <mesh ref={(el) => (pins.current[i] = el)} position={[1.62, 0, 0]}><sphereGeometry args={[0.36, 48, 48]} /><meshPhysicalMaterial {...blue} /></mesh>
        </group>
      ))}
    </group>
  );
}

// Stage 0 — hero: cinematic logo piece (glossy 3D mark + energy shell + orbiting comets + glow)
function Crystal({ mobile }) {
  const g = useRef(), spin = useRef(), shell = useRef(), shell2 = useRef(), r1 = useRef(), r2 = useRef(), r3 = useRef();
  const comets = useRef([]);
  const glow = useGlow();
  const born = useRef(null);
  useFrame(({ clock }, dt) => {
    const t = clock.elapsedTime;
    if (born.current === null) born.current = t;
    // cinematic entrance: scale up with overshoot while spinning in
    const k = Math.min(1, (t - born.current) / 1.8);
    const ease = 1 + 2.70158 * Math.pow(k - 1, 3) + 1.70158 * Math.pow(k - 1, 2);
    // as you scroll, the hero piece drifts aside and shrinks so the camera flies past it (never through it)
    const away = THREE.MathUtils.smoothstep(scroll.p, 0, 0.09);
    g.current.scale.setScalar((mobile ? 0.7 : 1) * Math.max(0.001, ease) * (1 - away * 0.45));
    g.current.position.set((mobile ? 0 : 3.6) + away * (mobile ? 9 : 11), (mobile ? 1.8 : 0.2) + Math.sin(t * 0.8) * 0.22 + away * 3, -away * 4);
    spin.current.rotation.y = THREE.MathUtils.damp(spin.current.rotation.y, Math.sin(t * 0.5) * 0.5 + pointer.x * 0.55 + (1 - k) * 6, 3, dt);
    spin.current.rotation.x = THREE.MathUtils.damp(spin.current.rotation.x, Math.sin(t * 0.4) * 0.1 - pointer.y * 0.3, 3, dt);
    shell.current.rotation.set(t * 0.12 + scroll.p * 3, t * 0.2 + scroll.p * 5, 0);
    shell2.current.rotation.set(-t * 0.1, -t * 0.16, 0);
    r1.current.rotation.x = t * 0.5; r2.current.rotation.y = -t * 0.4; r3.current.rotation.z = t * 0.25;
    comets.current.forEach((c, i) => {
      if (!c) return;
      const a = t * (0.7 + i * 0.25) + i * 2.1, R = 3.0 + i * 0.5;
      c.position.set(Math.cos(a) * R, Math.sin(a * (i % 2 ? 1 : -1)) * R * 0.55, Math.sin(a) * R * 0.6);
    });
  });
  return (
    <group ref={g} >
      <sprite scale={[11, 11, 1]} position={[0, 0, -1.5]}><spriteMaterial map={glow} transparent depthWrite={false} blending={THREE.AdditiveBlending} fog={false} opacity={0.85} /></sprite>
      <group ref={spin} scale={1.45}><Logo3D /></group>
      <mesh ref={shell} scale={1.7}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color={hot('#FF5A5F', 1.6)} wireframe transparent opacity={0.4} toneMapped={false} />
      </mesh>
      <mesh ref={shell2} scale={2.2}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial color="#3B82FF" wireframe transparent opacity={0.1} />
      </mesh>
      <mesh ref={r1}><torusGeometry args={[3.4, 0.03, 12, 160]} /><meshBasicMaterial color={hot('#4CC9FF')} toneMapped={false} /></mesh>
      <mesh ref={r2} rotation={[1.2, 0, 0]}><torusGeometry args={[3.9, 0.025, 12, 160]} /><meshBasicMaterial color={hot('#3B82FF', 2)} toneMapped={false} /></mesh>
      <mesh ref={r3} rotation={[0.4, 0.9, 0]}><torusGeometry args={[4.5, 0.015, 12, 160]} /><meshBasicMaterial color={hot('#7AA7FF', 1.8)} toneMapped={false} /></mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} ref={(el) => (comets.current[i] = el)}>
          <sphereGeometry args={[0.07 + i * 0.01, 16, 16]} />
          <meshBasicMaterial color={hot(['#ffffff', '#4CC9FF', '#FF5A5F', '#7AA7FF'][i], 3)} toneMapped={false} />
        </mesh>
      ))}
      <pointLight position={[0, 0, 3]} intensity={30} color="#9fd0ff" />
      <pointLight position={[-3, 2, 2]} intensity={25} color="#ff8a8a" />
    </group>
  );
}

// Stage 1 — "leads" orbiting in
function LeadOrbit({ count }) {
  const refs = useRef([]);
  const data = useMemo(() => Array.from({ length: count }, (_, i) => ({
    a: (i / count) * Math.PI * 2, r: 4 + Math.random() * 5, y: (Math.random() - 0.5) * 6, s: 0.15 + Math.random() * 0.25, sp: 0.1 + Math.random() * 0.3,
    c: ['#3B82FF', '#FF5A5F', '#4CC9FF'][i % 3],
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
    { x: -6, n: 9, c: '#3B82FF' }, { x: -2, n: 6, c: '#7AA7FF' }, { x: 2, n: 4, c: '#FFB547' }, { x: 6, n: 2, c: '#4CC9FF' },
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
const PANEL_IMAGES = SHOT_LIST.map((s) => s.src); // all 16 product screens

function Panels({ mobile }) {
  const refs = useRef([]);
  const textures = useLoader(THREE.TextureLoader, mobile ? PANEL_IMAGES.slice(0, 8) : PANEL_IMAGES);
  textures.forEach((t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 16; });
  const items = useMemo(() => Array.from({ length: textures.length }, (_, i) => {
    const w = 5.4 + (i % 3) * 0.8;
    return { x: (i % 2 ? 1 : -1) * (4.2 + (i % 3) * 0.8), y: ((i * 37) % 5) - 2, z: -50 - Math.floor(i / 2) * 4.2, w, h: (w * 9) / 16 };
  }), [textures.length]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    refs.current.forEach((m, i) => { if (!m) return; m.rotation.y = Math.sin(t * 0.4 + i) * 0.2 + (items[i].x > 0 ? -0.45 : 0.45); m.position.y = items[i].y + Math.sin(t * 0.7 + i) * 0.3; });
  });
  return items.map((p, i) => (
    <group key={i} ref={(el) => (refs.current[i] = el)} position={[p.x, p.y, p.z]}>
      <mesh>
        <planeGeometry args={[p.w, p.h]} />
        <meshBasicMaterial map={textures[i]} color="#c4c4c4" side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(p.w, p.h)]} />
        <lineBasicMaterial color="#3B82FF" />
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
          <meshBasicMaterial color={hot(['#4CC9FF', '#FF5A5F', '#3B82FF', '#7AA7FF'][i], 2.2)} toneMapped={false} />
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
      <Canvas dpr={[1, mobile ? 1.5 : 2]} camera={{ fov: 55, near: 0.1, far: 140, position: [0, 0, 12] }} gl={{ antialias: false, powerPreference: 'high-performance' }}>
        <fog attach="fog" args={['#040915', 14, 60]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[6, 6, 6]} intensity={80} color="#3B82FF" />
        <pointLight position={[-6, -4, -10]} intensity={60} color="#FF5A5F" />
        <Env />
        <Rig mobile={mobile} />
        <Stars count={mobile ? 500 : 1400} />
        <Crystal mobile={mobile} />
        <LeadOrbit count={mobile ? 18 : 36} />
        <Funnel />
        <Panels mobile={mobile} />
        <Portal />
        <EffectComposer multisampling={0}>
          <Bloom intensity={mobile ? 0.8 : 1.15} luminanceThreshold={0.85} luminanceSmoothing={0.25} mipmapBlur />
          {!mobile && <ChromaticAberration offset={CA_OFFSET} radialModulation modulationOffset={0.4} />}
          <Vignette offset={0.25} darkness={0.75} />
          {!mobile && <Noise opacity={0.05} blendFunction={BlendFunction.SOFT_LIGHT} />}
        </EffectComposer>
      </Canvas>
    </div>
  );
}

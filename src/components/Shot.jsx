import { SHOT_LIST } from '../data/shots';
const BY_ID = Object.fromEntries(SHOT_LIST.map((s) => [s.id, s]));

export const Shot = ({ id, eager = false, className = '' }) => {
  const s = BY_ID[id];
  return (
    <img src={s.src} alt={s.alt} width="1920" height="1080" decoding="async"
      loading={eager ? 'eager' : 'lazy'} draggable="false" className={`block w-full h-auto ${className}`} />
  );
};

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STRENGTH = 0.16;

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    requestAnimationFrame(() => {
      setPosition({ x: middleX * STRENGTH, y: middleY * STRENGTH });
    });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: 'spring',
        stiffness: reduceMotion ? 400 : 90,
        damping: reduceMotion ? 40 : 20,
        mass: 0.12,
      }}
    >
      {children}
    </motion.div>
  );
}

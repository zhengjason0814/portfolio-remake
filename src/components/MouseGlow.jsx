import { useEffect, useRef } from 'react';
import styles from './MouseGlow.module.css';

export default function MouseGlow() {
  const glowRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const glowX = useRef(0);
  const glowY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      glowX.current += (mouseX.current - glowX.current) * 0.1;
      glowY.current += (mouseY.current - glowY.current) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX.current - 500}px, ${glowY.current - 500}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={glowRef} className={styles.glow} />;
}

import { useEffect, useRef } from 'react';

export default function MouseGlowCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = document.getElementById('mouse-glow-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Increased radius for a larger glow effect
      const radius = 300;
      // Increased blur to keep the larger glow soft
      const blur = 120;

      const gradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        radius
      );

      // Reduced opacity for a subtler tint
      gradient.addColorStop(0, 'rgba(255, 221, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 221, 0, 0)');


      ctx.fillStyle = gradient;
      ctx.filter = `blur(${blur}px)`;

      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, radius, 0, 2 * Math.PI);
      ctx.fill();

      ctx.filter = 'none';

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="mouse-glow-canvas"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
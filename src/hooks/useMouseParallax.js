import { useEffect } from 'react';

const useMouseParallax = (
  elements,
  {
    speed = 0.05,
    mobile = false,
  } = {}
) => {
  useEffect(() => {
    if (!mobile && window.innerWidth <= 768) return;

    let mouseX = 0;
    let mouseY = 0;
    
    const positions = elements.map(() => ({ x: 0, y: 0 }));

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      elements.forEach(({ ref, multiplierX = 1, multiplierY = 1 }, index) => {
        if (!ref.current) return;

        const targetX = mouseX * multiplierX;
        const targetY = mouseY * multiplierY;

        const distX = targetX - positions[index].x;
        const distY = targetY - positions[index].y;

        positions[index].x += distX * speed;
        positions[index].y += distY * speed;

        ref.current.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [elements, speed, mobile]);
};

export default useMouseParallax;
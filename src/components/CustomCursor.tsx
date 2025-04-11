import React, { useEffect, useRef, useMemo } from 'react';

interface CursorTrail {
  x: number;
  y: number;
  opacity: number;
}

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const cursorPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const trails = useRef<CursorTrail[]>(Array(5).fill({ x: 0, y: 0, opacity: 0 }));

  const TRAIL_COUNT = 4;
  const CURSOR_SPEED = 0.2;
  const VELOCITY_DAMPENING = 0.85;

  const trailElements = useMemo(
    () =>
      Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => el && (trailRefs.current[i] = el)}
          className="cursor-trail"
        />
      )),
    []
  );

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId: number;

    const updateCursor = () => {
      const dx = targetPos.current.x - cursorPos.current.x;
      const dy = targetPos.current.y - cursorPos.current.y;

      velocity.current.x = velocity.current.x * VELOCITY_DAMPENING + dx * CURSOR_SPEED;
      velocity.current.y = velocity.current.y * VELOCITY_DAMPENING + dy * CURSOR_SPEED;

      cursorPos.current.x += velocity.current.x;
      cursorPos.current.y += velocity.current.y;

      cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
    };

    const updateTrails = () => {
      trails.current.unshift({ x: cursorPos.current.x, y: cursorPos.current.y, opacity: 0.8 });
      trails.current.length = TRAIL_COUNT;

      trailRefs.current.forEach((trail, i) => {
        if (!trail || !trails.current[i]) return;
        trail.style.transform = `translate3d(${trails.current[i].x}px, ${trails.current[i].y}px, 0)`;
        trail.style.opacity = `${trails.current[i].opacity}`;
      });
    };

    const animate = () => {
      updateCursor();
      updateTrails();
      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      {trailElements}
    </>
  );
};

export default CustomCursor;
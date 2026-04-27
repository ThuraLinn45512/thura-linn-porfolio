'use client';

import { useEffect } from 'react';

const stars = Array.from({ length: 90 }, (_, index) => ({
  id: index,
  left: (index * 37) % 101,
  top: (index * 61) % 101,
  size: index % 9 === 0 ? 3 : index % 4 === 0 ? 2 : 1,
  delay: (index % 12) * 0.35,
  duration: 3 + (index % 7) * 0.45,
}));

const constellations = [
  '8,24 16,28 22,18 31,23 38,14',
  '66,18 73,12 78,24 86,20 94,27',
  '5,64 12,70 20,66 28,75',
  '48,58 55,52 61,63 70,57 76,68',
  '76,84 84,78 92,82 98,73',
  '34,38 42,34 48,43 55,39',
];

export function SpaceBackground() {
  useEffect(() => {
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="space-background" aria-hidden="true">
      <div className="space-gradient" />
      <div className="cursor-aurora" />
      <div className="star-layer">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
      <svg className="constellation-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
        {constellations.map((points, index) => (
          <polyline key={index} points={points} />
        ))}
      </svg>
      <div className="cosmic-object planet planet-one">
        <span className="planet-ring" />
      </div>
      <div className="cosmic-object planet planet-two" />
      <div className="cosmic-object satellite">
        <span className="satellite-body" />
        <span className="satellite-panel panel-left" />
        <span className="satellite-panel panel-right" />
        <span className="satellite-dish" />
      </div>
      <span className="cosmic-object comet comet-one" />
      <span className="cosmic-object comet comet-two" />
      <span className="cosmic-object asteroid asteroid-one" />
      <span className="cosmic-object asteroid asteroid-two" />
      <span className="cosmic-object asteroid asteroid-three" />
      <div className="space-vignette" />
    </div>
  );
}

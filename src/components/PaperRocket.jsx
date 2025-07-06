import React, { useEffect, useRef, useState } from 'react';

const ROCKET_SIZE = 24;

// Simple paper rocket SVG with neon effects
const RocketSVG = ({ className = "" }) => (
  <svg
    width={ROCKET_SIZE}
    height={ROCKET_SIZE}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <filter id="neon-glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#neon-glow)">
      <polygon points="32,4 60,60 32,48 4,60" fill="#00ffff" stroke="#00ffff" strokeWidth="1" />
      <polygon points="32,4 32,48 60,60" fill="#ffffff" stroke="#00ffff" strokeWidth="1" />
      <polygon points="32,4 32,48 4,60" fill="#ff00ff" stroke="#00ffff" strokeWidth="1" />
      <rect x="28" y="48" width="8" height="10" rx="2" fill="#ffff00" stroke="#00ffff" strokeWidth="1" />
    </g>
  </svg>
);

// Generate a random path for the rocket to fly
function getRandomPath() {
  // Start from a random edge
  const edges = ['left', 'right', 'top', 'bottom'];
  const startEdge = edges[Math.floor(Math.random() * edges.length)];
  let startX, startY, endX, endY;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const margin = 50;

  switch (startEdge) {
    case 'left':
      startX = -margin;
      startY = Math.random() * vh;
      endX = vw + margin;
      endY = Math.random() * vh;
      break;
    case 'right':
      startX = vw + margin;
      startY = Math.random() * vh;
      endX = -margin;
      endY = Math.random() * vh;
      break;
    case 'top':
      startX = Math.random() * vw;
      startY = -margin;
      endX = Math.random() * vw;
      endY = vh + margin;
      break;
    case 'bottom':
      startX = Math.random() * vw;
      startY = vh + margin;
      endX = Math.random() * vw;
      endY = -margin;
      break;
    default:
      startX = -margin;
      startY = Math.random() * vh;
      endX = vw + margin;
      endY = Math.random() * vh;
  }
  // Add some random curve control points for a bezier path
  const cp1X = startX + (endX - startX) * 0.3 + (Math.random() - 0.5) * 300;
  const cp1Y = startY + (endY - startY) * 0.3 + (Math.random() - 0.5) * 300;
  const cp2X = startX + (endX - startX) * 0.7 + (Math.random() - 0.5) * 300;
  const cp2Y = startY + (endY - startY) * 0.7 + (Math.random() - 0.5) * 300;
  return { startX, startY, endX, endY, cp1X, cp1Y, cp2X, cp2Y };
}

const PaperRocket = () => {
  const rocketRef = useRef(null);
  const [path, setPath] = useState(getRandomPath());
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    let running = true;
    const duration = 2000 + Math.random() * 1000; // 2-3s (much faster)
    const start = performance.now();
    const { startX, startY, endX, endY, cp1X, cp1Y, cp2X, cp2Y } = path;

    function animateRocket(now) {
      if (!running) return;
      const t = Math.min((now - start) / duration, 1);
      // Cubic Bezier interpolation
      const x =
        Math.pow(1 - t, 3) * startX +
        3 * Math.pow(1 - t, 2) * t * cp1X +
        3 * (1 - t) * Math.pow(t, 2) * cp2X +
        Math.pow(t, 3) * endX;
      const y =
        Math.pow(1 - t, 3) * startY +
        3 * Math.pow(1 - t, 2) * t * cp1Y +
        3 * (1 - t) * Math.pow(t, 2) * cp2Y +
        Math.pow(t, 3) * endY;
      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      
      if (t < 1) {
        requestAnimationFrame(animateRocket);
      } else {
        // When finished, start a new random path
        setPath(getRandomPath());
        setAnimKey(k => k + 1); // force re-run
      }
    }
    requestAnimationFrame(animateRocket);
    return () => {
      running = false;
    };
    // eslint-disable-next-line
  }, [animKey]);

  return (
    <>
      <div
        className="paper-rocket-anim pointer-events-none"
        ref={rocketRef}
        style={{
          position: 'fixed',
          zIndex: 10,
          top: 0,
          left: 0,
          width: ROCKET_SIZE,
          height: ROCKET_SIZE,
        }}
      >
        <RocketSVG className="drop-shadow-2xl" />
      </div>
      <style>{`
        .paper-rocket-anim {
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .paper-rocket-anim { display: none; }
        }
      `}</style>
    </>
  );
};

export default PaperRocket; 
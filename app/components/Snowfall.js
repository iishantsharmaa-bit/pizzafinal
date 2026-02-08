'use client';

import { useEffect, useState } from 'react';

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState([]);

  
  useEffect(() => {
    // Generate snowflakes
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 20,
      animationDelay: Math.random() * 10,
      fontSize: 10 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            fontSize: `${flake.fontSize}px`,
            opacity: flake.opacity,
          }}
        >
          ❄
        </div>
      ))}

      <style jsx>{`
        .snowfall-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .snowflake {
          position: absolute;
          top: -50px;
          color: #fff;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          animation: fall linear infinite;
          user-select: none;
        }

        @keyframes fall {
          0% {
            transform: translateY(-50px) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(25vh) translateX(10px) rotate(90deg);
          }
          50% {
            transform: translateY(50vh) translateX(-10px) rotate(180deg);
          }
          75% {
            transform: translateY(75vh) translateX(5px) rotate(270deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
          }
        }

        /* Reduce snow on mobile for performance */
        @media (max-width: 768px) {
          .snowflake:nth-child(n+26) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

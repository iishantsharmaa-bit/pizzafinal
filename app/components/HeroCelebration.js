'use client';

import { useEffect, useState } from 'react';

// Vises fram til jubileumstilbudet er over (19. nov 23:59 norsk tid)
const END = new Date('2026-11-19T23:59:59+01:00').getTime();

// Deterministisk "tilfeldighet" – samme verdier på server og klient
function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const COLORS = ['#facc15', '#f472b6', '#ef4444', '#22c55e', '#ffffff', '#60a5fa', '#fb923c'];
const FLAG_COLORS = ['#16a34a', '#ffffff', '#dc2626', '#facc15', '#f472b6'];

const rnd = seeded(7);

const CONFETTI = Array.from({ length: 34 }, () => ({
  left: rnd() * 100,
  delay: rnd() * 10,
  dur: 7 + rnd() * 7,
  color: COLORS[Math.floor(rnd() * COLORS.length)],
  w: 5 + rnd() * 5,
  h: 8 + rnd() * 8,
  shape: rnd() > 0.7 ? 'round' : rnd() > 0.5 ? 'ribbon' : 'rect',
  sway: rnd() > 0.5 ? 'party-fall-a' : 'party-fall-b',
}));

// Ballonger – holdt mot sidene så de ikke dekker tekst/knapper.
// phase = hvor langt i flyturen ballongen er når siden åpnes (0–1),
// så ballongene er spredt over hele siden med en gang.
const BALLOON_COLORS = ['#ef4444', '#facc15', '#f472b6', '#22c55e', '#60a5fa', '#fb923c', '#a78bfa'];
// Venstre og høyre sone fylles jevnt; de innerste vises bare på større skjermer
const BALLOON_SPOTS = [
  // [left %, phase, varighet s, størrelse, kun desktop]
  [2, 0.18, 17, 1, false],
  [7, 0.52, 19, 0.85, false],
  [12, 0.33, 16, 0.95, false],
  [17, 0.66, 20, 0.8, true],
  [21, 0.12, 18, 1, true],
  [26, 0.45, 21, 0.85, true],
  [4, 0.7, 22, 0.75, false],
  [74, 0.4, 18, 0.9, true],
  [79, 0.15, 20, 1, true],
  [83, 0.6, 17, 0.85, true],
  [88, 0.28, 19, 1, false],
  [93, 0.5, 16, 0.85, false],
  [98, 0.2, 21, 0.95, false],
  [96, 0.68, 18, 0.8, false],
  [23, 0.85, 19, 0.9, true],
  [77, 0.82, 20, 0.9, true],
];
const BALLOONS = BALLOON_SPOTS.map(([left, phase, dur, size, desktopOnly], i) => ({
  left,
  phase,
  dur,
  size,
  hideMobile: desktopOnly,
  color: BALLOON_COLORS[i % BALLOON_COLORS.length],
}));

const SPARKLES = [
  { left: 8, top: 22, delay: 0, size: 14 },
  { left: 92, top: 30, delay: 1.2, size: 18 },
  { left: 16, top: 62, delay: 2.1, size: 12 },
  { left: 85, top: 70, delay: 0.6, size: 14 },
  { left: 28, top: 14, delay: 1.7, size: 10 },
  { left: 72, top: 18, delay: 2.6, size: 12 },
  { left: 5, top: 85, delay: 3.1, size: 12 },
  { left: 96, top: 52, delay: 1.4, size: 10 },
];

// Vimpelrekke: to buer over toppen. Punkter på kvadratisk kurve (x i %, y i px)
const SAG = 34;
function garlandPoints(count) {
  const pts = [];
  for (const [x0, x1] of [[0, 50], [50, 100]]) {
    for (let i = 1; i < count; i++) {
      const t = i / count;
      const x = x0 + (x1 - x0) * t;
      const y = 2 * (1 - t) * t * SAG * 2; // topp av kurven = SAG
      const angle = (1 - 2 * t) * -18; // vipp vimpelen langs snora
      pts.push({ x, y, angle });
    }
  }
  return pts;
}
const FLAGS = garlandPoints(9);

export default function HeroCelebration() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const check = () => setVisible(Date.now() <= END);
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]" aria-hidden="true">
      {/* Myk festlig glød */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl party-glow" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-yellow-400/20 blur-3xl party-glow [animation-delay:2s]" />

      {/* Vimpelrekke */}
      <div className="absolute top-0 inset-x-0 h-20 party-garland">
        <svg className="absolute inset-0 w-full h-[40px]" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path
            d={`M0,0 Q25,${SAG * 2} 50,0 Q75,${SAG * 2} 100,0`}
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {FLAGS.map((f, i) => (
          <span
            key={i}
            className="absolute block w-4 h-5 sm:w-5 sm:h-6 party-flag shadow-sm"
            style={{
              left: `${f.x}%`,
              top: `${f.y}px`,
              backgroundColor: FLAG_COLORS[i % FLAG_COLORS.length],
              '--a': `${f.angle}deg`,
              animationDelay: `${(i % 5) * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Ballonger */}
      {BALLOONS.map((b, i) => (
        <div
          key={i}
          className={`absolute top-full -ml-6 party-balloon ${b.hideMobile ? 'hidden md:block' : ''}`}
          style={{ left: `${b.left}%`, animationDelay: `-${(b.phase * b.dur).toFixed(2)}s`, animationDuration: `${b.dur}s` }}
        >
          <div className="party-balloon-sway" style={{ transform: `scale(${b.size})` }}>
            <div
              className="relative w-10 h-12 sm:w-12 sm:h-14 lg:w-16 lg:h-[76px] rounded-[50%] opacity-90"
              style={{
                background: `radial-gradient(circle at 30% 28%, rgba(255,255,255,0.75) 0 8%, ${b.color} 30%, ${b.color} 60%, rgba(0,0,0,0.25) 100%)`,
                boxShadow: 'inset -4px -6px 10px rgba(0,0,0,0.2)',
              }}
            >
              <span
                className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2"
                style={{ backgroundColor: b.color, clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
              />
            </div>
            <svg className="mx-auto" width="12" height="46" viewBox="0 0 12 46">
              <path d="M6 0 C 0 10, 12 20, 6 30 S 2 42, 6 46" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
      ))}

      {/* Konfetti */}
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className={`absolute -top-6 ${c.sway}`}
          style={{
            left: `${c.left}%`,
            width: c.shape === 'ribbon' ? 3 : c.w,
            height: c.shape === 'ribbon' ? c.h * 1.8 : c.shape === 'round' ? c.w : c.h,
            backgroundColor: c.color,
            borderRadius: c.shape === 'round' ? '9999px' : '2px',
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.dur}s`,
          }}
        />
      ))}

      {/* Gnister */}
      {SPARKLES.map((s, i) => (
        <svg
          key={i}
          className="absolute party-twinkle text-yellow-200"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
        </svg>
      ))}
    </div>
  );
}

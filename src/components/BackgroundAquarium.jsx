import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function BackgroundAquarium() {
  const containerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const fishGroupRef = useRef([]);

  // Generate continuous bubbles
  useEffect(() => {
    const bubbleCount = 28;
    const initialBubbles = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 22 + 8,
      duration: Math.random() * 10 + 9,
      delay: Math.random() * 8,
      wobble: (Math.random() - 0.5) * 80
    }));
    setBubbles(initialBubbles);
  }, []);

  // Continuous swimming fish animation with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup fish agents swimming continuously across screen
      const fishElements = document.querySelectorAll('.ambient-swimming-fish');
      fishElements.forEach((fish, idx) => {
        const speed = 20 + idx * 8; // varying speeds
        const isLeftToRight = idx % 2 === 0;
        const startX = isLeftToRight ? -250 : window.innerWidth + 250;
        const targetX = isLeftToRight ? window.innerWidth + 250 : -250;
        const initialY = 15 + ((idx * 22) % 75); // distribute vertically

        gsap.set(fish, {
          x: startX,
          yPercent: initialY,
          scaleX: isLeftToRight ? 1 : -1,
          opacity: 0.35 + (idx % 3) * 0.15
        });

        // Loop swimming trajectory with natural wave motion
        const swimTimeline = gsap.timeline({ repeat: -1, delay: idx * 3.5 });
        
        swimTimeline
          .to(fish, {
            x: targetX,
            duration: speed,
            ease: 'none',
            modifiers: {
              y: (y) => {
                // Sine wave vertical undulation
                const elapsed = Date.now() / 1000;
                return `${Math.sin(elapsed * 1.5 + idx) * 35}px`;
              }
            }
          })
          .set(fish, {
            scaleX: isLeftToRight ? -1 : 1, // Turn around
            yPercent: (initialY + 20) % 80
          })
          .to(fish, {
            x: startX,
            duration: speed * 1.1,
            ease: 'none',
            modifiers: {
              y: (y) => {
                const elapsed = Date.now() / 1000;
                return `${Math.sin(elapsed * 1.8 + idx) * 30}px`;
              }
            }
          })
          .set(fish, {
            scaleX: isLeftToRight ? 1 : -1 // Flip back
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Ocean Ambient Light Caustics */}
      <div className="ocean-caustics" />

      {/* Floating Bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              '--wobble': `${b.wobble}px`
            }}
          />
        ))}
      </div>

      {/* Continuously Swimming Fish (Layered across depths) */}
      <div className="absolute inset-0">
        {/* Fish 1: Super Red Arowana Silhouette (Foreground mid-layer) */}
        <div className="ambient-swimming-fish absolute top-[18%] left-0 w-44 md:w-56 filter drop-shadow-[0_4px_16px_rgba(255,100,50,0.35)]">
          <img
            src="/assets/swimming-fish-2.svg"
            alt="Swimming Arowana"
            className="w-full h-auto tail-animated"
          />
        </div>

        {/* Fish 2: Electric Blue Discus (Midground) */}
        <div className="ambient-swimming-fish absolute top-[45%] left-0 w-32 md:w-40 filter drop-shadow-[0_4px_16px_rgba(0,242,254,0.35)]">
          <img
            src="/assets/swimming-fish-1.svg"
            alt="Swimming Discus"
            className="w-full h-auto tail-animated"
          />
        </div>

        {/* Fish 3: Altum Angelfish (Deep background slow swimmer) */}
        <div className="ambient-swimming-fish absolute top-[68%] left-0 w-28 md:w-36 filter drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
          <img
            src="/assets/swimming-fish-3.svg"
            alt="Swimming Angel Fish"
            className="w-full h-auto"
          />
        </div>

        {/* Fish 4: Golden Koi (High depth swimmer) */}
        <div className="ambient-swimming-fish absolute top-[82%] left-0 w-36 md:w-48 filter drop-shadow-[0_4px_14px_rgba(245,158,11,0.3)]">
          <img
            src="/assets/swimming-fish-2.svg"
            alt="Swimming Golden Koi"
            className="w-full h-auto tail-animated"
          />
        </div>
      </div>

      {/* Gentle Underwater Light Rays / God Rays from Top */}
      <div 
        className="absolute top-0 inset-x-0 h-96 opacity-25"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0, 242, 254, 0.4), transparent 70%)'
        }}
      />
    </div>
  );
}

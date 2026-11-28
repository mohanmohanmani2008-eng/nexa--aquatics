import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Sparkles, Volume2, VolumeX, Play } from 'lucide-react';

export default function JumpingFishFeature() {
  const containerRef = useRef(null);
  const fishRef = useRef(null);
  const splashLeftRef = useRef(null);
  const splashRightRef = useRef(null);
  const waterSurfaceRef = useRef(null);
  const rippleRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [jumpCount, setJumpCount] = useState(0);

  // Web Audio API procedural sound synthesizer for realistic water splash
  const playSplashSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // White noise buffer for water droplet & plunge impact
      const bufferSize = ctx.sampleRate * 0.4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // Bandpass filter to simulate water frequency resonance
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.35);
      filter.Q.setValueAtTime(3.5, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.38);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // Audio autoplay policy fallback
    }
  };

  const triggerJump = () => {
    if (isJumping) return;
    setIsJumping(true);

    const fish = fishRef.current;
    const ripple = rippleRef.current;
    const splashL = splashLeftRef.current;
    const splashR = splashRightRef.current;

    // Timeline for realistic physics jump
    const tl = gsap.timeline({
      onComplete: () => {
        setIsJumping(false);
        setJumpCount((prev) => prev + 1);
      }
    });

    // Reset initial fish position below waterline
    gsap.set(fish, {
      x: -160,
      y: 110,
      rotation: -35,
      scale: 0.8,
      opacity: 0
    });

    // 1. Fish surges from underwater towards surface
    tl.to(fish, {
      opacity: 1,
      duration: 0.25,
      ease: 'power2.out'
    })
    // 2. Breaks through water surface -> Splash 1
    .call(() => {
      playSplashSound();
      if (ripple) {
        gsap.fromTo(ripple, 
          { scale: 0.2, opacity: 1 },
          { scale: 2.4, opacity: 0, duration: 1.2, ease: 'power2.out' }
        );
      }
      if (splashL && splashR) {
        gsap.fromTo([splashL, splashR],
          { scale: 0, opacity: 1, y: 0 },
          { 
            scale: 1.4, 
            opacity: 0, 
            y: -40, 
            duration: 0.7, 
            stagger: 0.05, 
            ease: 'power2.out' 
          }
        );
      }
    }, null, 0.2)
    // 3. Arcs high above water surface (parabolic flight path)
    .to(fish, {
      x: 0,
      y: -140, // Peak height in air
      rotation: 5,
      scale: 1.15,
      duration: 0.75,
      ease: 'power1.out'
    }, 0.25)
    // 4. Apex turnaround & head-first dive downward
    .to(fish, {
      x: 170,
      y: 110, // plunges back under water
      rotation: 65,
      scale: 0.9,
      duration: 0.65,
      ease: 'power2.in'
    }, '+=0.02')
    // 5. Plunge impact into water -> Splash 2
    .call(() => {
      playSplashSound();
      if (ripple) {
        gsap.fromTo(ripple,
          { scale: 0.3, opacity: 0.9 },
          { scale: 2.8, opacity: 0, duration: 1.3, ease: 'power2.out' }
        );
      }
      if (splashL && splashR) {
        gsap.fromTo([splashL, splashR],
          { scale: 0, opacity: 1, y: 0 },
          { 
            scale: 1.8, 
            opacity: 0, 
            y: -55, 
            duration: 0.8, 
            ease: 'power2.out' 
          }
        );
      }
    })
    // 6. Submerges and fades back into deep water
    .to(fish, {
      opacity: 0,
      y: 170,
      duration: 0.35,
      ease: 'power1.in'
    }, '-=0.2');
  };

  // Automatically trigger a jump every 12 seconds for ambient cinematic life
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerJump();
    }, 2200);

    const interval = setInterval(() => {
      triggerJump();
    }, 14000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto h-[380px] md:h-[420px] rounded-3xl overflow-hidden glass-panel border border-cyan-500/20 shadow-2xl flex flex-col justify-between p-6 bg-gradient-to-b from-ocean-950/40 via-ocean-900/80 to-ocean-850"
    >
      {/* Header bar within tank frame */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-300">
            Interactive Jump Simulator • Golden Arowana
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full bg-ocean-800/80 hover:bg-ocean-700 text-slate-300 hover:text-cyan-400 transition-all border border-cyan-500/20"
            title={soundEnabled ? 'Mute splash sound' : 'Enable splash sound'}
            aria-label="Toggle sound"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>
      </div>

      {/* Main Jumping Arena */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Sky / Air Zone (Upper half) */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-transparent to-cyan-500/5 pointer-events-none" />

        {/* Ambient Mist & Sparkles in Air */}
        <div className="absolute top-10 flex gap-12 text-cyan-400/30">
          <Sparkles size={20} className="animate-pulse" />
          <Sparkles size={16} className="animate-pulse delay-700" />
          <Sparkles size={18} className="animate-pulse delay-300" />
        </div>

        {/* The Jumping Fish (GSAP Animated) */}
        <div
          ref={fishRef}
          className="absolute z-20 pointer-events-none opacity-0 will-change-transform"
        >
          <img
            src="/assets/jumping-fish.svg"
            alt="Jumping Arowana"
            className="w-48 md:w-64 h-auto filter drop-shadow-[0_12px_30px_rgba(255,140,0,0.6)]"
          />
        </div>

        {/* Water Surface Line */}
        <div
          ref={waterSurfaceRef}
          className="absolute top-[68%] inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f2fe] water-surface-line"
        >
          {/* Splash Droplets Left */}
          <div
            ref={splashLeftRef}
            className="absolute left-1/3 -top-6 w-8 h-8 rounded-full border-2 border-cyan-300/80 opacity-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,242,254,0.6) 0%, transparent 70%)'
            }}
          />

          {/* Splash Droplets Right */}
          <div
            ref={splashRightRef}
            className="absolute right-1/3 -top-6 w-9 h-9 rounded-full border-2 border-cyan-200/90 opacity-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(79,172,254,0.7) 0%, transparent 70%)'
            }}
          />

          {/* Expanding Water Ripple */}
          <div
            ref={rippleRef}
            className="absolute left-1/2 -translate-x-1/2 -top-4 w-28 h-8 rounded-[100%] border-2 border-cyan-400/70 opacity-0 pointer-events-none"
          />
        </div>

        {/* Deep Water Underwater Zone (Lower part) */}
        <div className="absolute top-[68%] inset-x-0 bottom-0 bg-gradient-to-b from-ocean-800/60 via-ocean-900/90 to-ocean-950 pointer-events-none border-t border-cyan-500/30">
          {/* Underwater Caustics */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent" />
          {/* Little Rising Bubbles */}
          <div className="absolute bottom-2 left-1/4 w-2.5 h-2.5 rounded-full bg-cyan-300/60 animate-bounce" />
          <div className="absolute bottom-4 right-1/3 w-3 h-3 rounded-full bg-cyan-400/50 animate-pulse" />
        </div>
      </div>

      {/* Footer Controls & Call To Action */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
        <div className="text-xs text-slate-400">
          <span className="text-cyan-400 font-semibold">{jumpCount}</span> successful jumps recorded
        </div>

        <button
          onClick={triggerJump}
          disabled={isJumping}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm tracking-wide transition-all shadow-lg ${
            isJumping
              ? 'bg-cyan-950/60 text-cyan-400/50 cursor-not-allowed border border-cyan-800/40'
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transform hover:-translate-y-0.5 active:translate-y-0'
          }`}
        >
          <Play size={15} fill="currentColor" />
          {isJumping ? 'Spectacular Jump in Progress...' : 'Make Fish Jump Out of Water!'}
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND_INFO, TOTAL_FRAMES, getFrameUrl } from '../data/websiteData';
import { MessageCircle, Compass, ChevronDown, Sparkles, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textStage1Ref = useRef(null);
  const textStage2Ref = useRef(null);
  const textStage3Ref = useRef(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Store preloaded HTMLImageElements in memory
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);

  // Preload all 50 frames
  useEffect(() => {
    let isCancelled = false;
    const loadedImages = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        if (isCancelled) return;
        loadedImages[i] = img;
        loadedCount++;
        const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        setLoadProgress(pct);

        // Once first frame is ready, draw immediately
        if (i === 0 && canvasRef.current) {
          renderFrame(0, loadedImages);
        }

        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          setImagesLoaded(true);
        }
      };

      img.onerror = () => {
        if (isCancelled) return;
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          setImagesLoaded(true);
        }
      };
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  // Helper function to render a specific frame onto the canvas using "cover" aspect ratio
  const renderFrame = (index, imagesArray = imagesRef.current) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesArray[index] || imagesArray[0];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate "cover" scale and centering
    const hRatio = width / img.width;
    const vRatio = height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const centerShiftX = (width - img.width * ratio) / 2;
    const centerShiftY = (height - img.height * ratio) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
  };

  // Canvas resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const frameObj = { frame: 0 };

    const ctx = gsap.context(() => {
      // Main frame scroll trigger
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.floor(self.progress * (TOTAL_FRAMES - 1)))
          );
          if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            renderFrame(frameIndex);
          }
        },
      });

      // Text animation timeline synced with scroll
      // Stage 1: 0% to 25% (fades out as user scrolls)
      gsap.fromTo(
        textStage1Ref.current,
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 0,
          y: -40,
          scale: 0.95,
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '22% top',
            scrub: true,
          },
        }
      );

      // Stage 2: 30% to 60%
      gsap.fromTo(
        textStage2Ref.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: container,
            start: '25% top',
            end: '42% top',
            scrub: true,
          },
        }
      );
      gsap.to(textStage2Ref.current, {
        opacity: 0,
        y: -40,
        scale: 0.95,
        scrollTrigger: {
          trigger: container,
          start: '48% top',
          end: '62% top',
          scrub: true,
        },
      });

      // Stage 3: 65% to 95%
      gsap.fromTo(
        textStage3Ref.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: container,
            start: '65% top',
            end: '80% top',
            scrub: true,
          },
        }
      );
      gsap.to(textStage3Ref.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: container,
          start: '88% top',
          end: '98% top',
          scrub: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [imagesLoaded]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-[360vh] bg-[#020712]"
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* HTML Canvas displaying the 50 sequence frames */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Ambient Underwater Lighting & Caustics Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#020712] via-transparent to-[#020712]/80" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,#020712_95%)]" />
        <div className="underwater-rays" />

        {/* Preloader overlay while frames cache */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-40 bg-[#020712] flex flex-col items-center justify-center gap-4 transition-opacity duration-700">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-ping" />
              <div className="w-16 h-16 rounded-full border-3 border-transparent border-t-cyan-400 border-r-teal-300 animate-spin" />
              <Sparkles className="w-6 h-6 text-cyan-300 animate-pulse" />
            </div>
            <div className="text-center space-y-1">
              <p className="font-display tracking-widest text-sm text-cyan-200 uppercase">
                Submerging Into Nexa Aquatics
              </p>
              <p className="text-xs text-cyan-400/70 font-mono">
                Caching High-Resolution Frames: {loadProgress}%
              </p>
            </div>
          </div>
        )}

        {/* ---------------- STAGE 1: HERO OVERLAY (Initial View) ---------------- */}
        <div
          ref={textStage1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pointer-events-auto z-20 max-w-5xl mx-auto"
        >
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.25)] mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Premium Ornamental Aquatics • Wholesale & Retail</span>
          </div>

          {/* Main Brand Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            NEXA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-400 text-cyan-glow">AQUATICS</span>
          </h1>

          {/* User Requested Headline */}
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-cyan-100 max-w-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            {BRAND_INFO.tagline}
          </h2>

          {/* User Requested Description */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {BRAND_INFO.description}
          </p>

          {/* CTAs: Explore Gallery + WhatsApp Button */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#gallery"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              <span>Explore Gallery</span>
            </a>

            <a
              href={BRAND_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#041226]/80 hover:bg-[#081e3d] border border-emerald-400/40 text-emerald-300 hover:text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20 group-hover:fill-emerald-400" />
              <span>WhatsApp Contact</span>
            </a>
          </div>

          {/* Scroll Down Prompt */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-300/80 pointer-events-none animate-bounce">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-cyan-300/70">
              Scroll to Animate
            </span>
            <ChevronDown className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        {/* ---------------- STAGE 2: MID-SCROLL OVERLAY (Frames 20-35) ---------------- */}
        <div
          ref={textStage2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center pointer-events-none z-20 max-w-4xl mx-auto opacity-0"
        >
          <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow max-w-2xl border border-cyan-400/30">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-300">
              Living Aquatic Art
            </span>
            <h3 className="mt-2 text-2xl sm:text-4xl font-display font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Mesmerizing Grace & Vibrancy
            </h3>
            <p className="mt-3 text-sm sm:text-base text-cyan-100/90 leading-relaxed">
              Every curve, fin stroke, and shimmer captures nature's aquatic serenity. 
              Our specimens are hand-curated and bred under optimal biological conditions.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-cyan-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" /> Vetted Genetics
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-cyan-400" /> Health Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* ---------------- STAGE 3: TRANSITION OVERLAY (Frames 36-50) ---------------- */}
        <div
          ref={textStage3Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center pointer-events-none z-20 max-w-4xl mx-auto opacity-0"
        >
          <div className="p-8 sm:p-10 rounded-3xl glass-panel max-w-3xl border border-cyan-400/40">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 text-cyan-300 text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-cyan-300" />
              <span>Certified Stock & Safe Transit</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Bred for Perfection. Delivered with Care.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              From our specialty facility in Thandarai, Tamil Nadu to your home or shop. Discover our hand-picked ornamental collection below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

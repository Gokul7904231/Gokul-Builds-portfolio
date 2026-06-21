import React, { useEffect, useRef, useState } from 'react';
import { PROFILE_IMAGE_URL } from '../../constants';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ox: number; // Original target X coordinate
  oy: number; // Original target Y coordinate
  r: number;
  g: number;
  b: number;
  a: number;
  size: number;
  stiffness: number;
  damping: number;
}

export const ParticleImage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  
  // Track mouse coordinates in a ref for lag-free 60fps canvas updates
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    radius: 95,
    active: false,
  });

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = PROFILE_IMAGE_URL;

    img.onload = () => {
      if (!active) return;

      try {
        const offscreenCanvas = document.createElement('canvas');
        const sampleSize = 135; // Increased resolution of particle image
        offscreenCanvas.width = sampleSize;
        offscreenCanvas.height = sampleSize;
        
        const offscreenCtx = offscreenCanvas.getContext('2d');
        if (!offscreenCtx) {
          throw new Error('Could not get offscreen canvas context');
        }

        // Draw image onto offscreen canvas
        offscreenCtx.drawImage(img, 0, 0, sampleSize, sampleSize);
        const imgData = offscreenCtx.getImageData(0, 0, sampleSize, sampleSize);
        const pixels = imgData.data;

        const tempParticles: Particle[] = [];
        const step = 1; // Sample every single pixel for ultra-high density and clarity
        
        const simSize = 400;
        const targetImgSize = 390; // Size of image on canvas to fill container
        const offset = (simSize - targetImgSize) / 2;

        const centerX = sampleSize / 2;
        const centerY = sampleSize / 2;
        const radius = sampleSize / 2;

        // Visual enhancement variables
        const brightness = 1.08;
        const contrast = 1.12;

        for (let y = 0; y < sampleSize; y += step) {
          for (let x = 0; x < sampleSize; x += step) {
            // Apply perfect circular crop at the particle level
            const dx = x - centerX;
            const dy = y - centerY;
            if (dx * dx + dy * dy > radius * radius) {
              continue;
            }

            const index = (y * sampleSize + x) * 4;
            const rawR = pixels[index];
            const rawG = pixels[index + 1];
            const rawB = pixels[index + 2];
            const a = pixels[index + 3];

            if (a > 50) {
              const ox = (x / sampleSize) * targetImgSize + offset;
              const oy = (y / sampleSize) * targetImgSize + offset;

              // Boost brightness & contrast for extreme clarity on dark background
              let r = rawR * brightness;
              let g = rawG * brightness;
              let b = rawB * brightness;

              r = ((r / 255 - 0.5) * contrast + 0.5) * 255;
              g = ((g / 255 - 0.5) * contrast + 0.5) * 255;
              b = ((b / 255 - 0.5) * contrast + 0.5) * 255;

              r = Math.min(255, Math.max(0, Math.floor(r)));
              g = Math.min(255, Math.max(0, Math.floor(g)));
              b = Math.min(255, Math.max(0, Math.floor(b)));

              // Scatter particles initial state: Swirling outer spiral
              const angle = Math.random() * Math.PI * 2;
              const distance = simSize / 2 + Math.random() * 250;
              
              const px = simSize / 2 + Math.cos(angle) * distance;
              const py = simSize / 2 + Math.sin(angle) * distance;
              
              // Give initial vortex/orbital velocity for a swirling entry
              const speed = 1.2 + Math.random() * 2.2;
              const vx = Math.sin(angle) * speed;
              const vy = -Math.cos(angle) * speed;

              // Grid spacing calculation to size particles perfectly for zero-gap assembly
              const gridSpace = targetImgSize / sampleSize;

              tempParticles.push({
                x: px,
                y: py,
                vx,
                vy,
                ox,
                oy,
                r,
                g,
                b,
                a: a / 255,
                // Make size slightly larger than grid spacing to eliminate gaps and form a solid photo
                size: gridSpace * 1.15,
                stiffness: 0.012 + Math.random() * 0.022, 
                damping: 0.86 + Math.random() * 0.04,
              });
            }
          }
        }

        particlesRef.current = tempParticles;
        setIsLoading(false);
      } catch (err) {
        console.error('Error initializing particle image:', err);
        setHasError(true);
      }
    };

    img.onerror = () => {
      console.error('Failed to load profile image for particle effect');
      if (active) {
        setHasError(true);
      }
    };

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (isLoading || hasError) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const simSize = 400;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = simSize * dpr;
      canvas.height = simSize * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, simSize, simSize);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const len = particles.length;

      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // 1. Mouse repulsion and swirling interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const radius = mouse.radius;

        if (distSq < radius * radius && distSq > 0.1) {
          const dist = Math.sqrt(distSq);
          const force = (radius - dist) / radius; // 0 to 1
          const angle = Math.atan2(dy, dx);

          // Push particles outwards
          const pushX = Math.cos(angle) * force * 5.5;
          const pushY = Math.sin(angle) * force * 5.5;

          // Add a circular vortex force
          const swirlX = -Math.sin(angle) * force * 4;
          const swirlY = Math.cos(angle) * force * 4;

          p.vx += pushX + swirlX + (Math.random() - 0.5) * 1.5;
          p.vy += pushY + swirlY + (Math.random() - 0.5) * 1.5;
        }

        // 2. Spring force pulling back to original coordinates
        const ax = (p.ox - p.x) * p.stiffness;
        const ay = (p.oy - p.y) * p.stiffness;

        p.vx += ax;
        p.vy += ay;
        
        // Apply friction
        p.vx *= p.damping;
        p.vy *= p.damping;

        // Subtle shimmer
        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy += (Math.random() - 0.5) * 0.05;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // 3. Draw particle (fastest draw method)
        ctx.fillStyle = `rgb(${p.r}, ${p.g}, ${p.b})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLoading, hasError]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = 400 / rect.width;
    const scaleY = 400 / rect.height;

    mouseRef.current.x = (e.clientX - rect.left) * scaleX;
    mouseRef.current.y = (e.clientY - rect.top) * scaleY;
    mouseRef.current.active = true;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
    mouseRef.current.active = false;
  };

  if (hasError) {
    return (
      <img
        src={PROFILE_IMAGE_URL}
        alt="Gokul A"
        className="w-full h-full object-cover object-[center_15%]"
        style={{ filter: 'contrast(1.1) brightness(0.9) saturate(1.1)' }}
      />
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-transparent">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface/30">
          <div className="w-8 h-8 border-2 border-gold/40 border-t-gold rounded-full animate-spin"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full bg-transparent cursor-pointer block select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '100%',
          height: '100%',
          touchAction: 'none',
        }}
      />
    </div>
  );
};

export default ParticleImage;

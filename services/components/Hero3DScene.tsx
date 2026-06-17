/// <reference types="@react-three/fiber" />
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AntigravityParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  const { positions, colors, basePositions, particleCount } = useMemo(() => {
    const posArr: number[] = [];
    const colArr: number[] = [];
    const basePos: number[] = [];

    const RING_COUNT = 22;
    const RING_RADIUS_STEP = 0.45;

    const goldColor = new THREE.Color('#D4AF37').multiplyScalar(2.2);
    const whiteColor = new THREE.Color('#FFFFFF').multiplyScalar(1.6);
    const dimGold = new THREE.Color('#B8960C').multiplyScalar(1.8);

    for (let ringIndex = 1; ringIndex <= RING_COUNT; ringIndex++) {
      const radius = ringIndex * RING_RADIUS_STEP;
      const particlesInRing = Math.floor((2 * Math.PI * radius) / 0.22);

      for (let p = 0; p < particlesInRing; p++) {
        const angle = (p / particlesInRing) * Math.PI * 2;

        const baseX = Math.cos(angle) * radius;
        const baseY = 0;
        const baseZ = Math.sin(angle) * radius;

        const scatterX = (Math.random() - 0.5) * 0.12;
        const scatterY = (Math.random() - 0.5) * 0.06;
        const scatterZ = (Math.random() - 0.5) * 0.12;

        basePos.push(baseX, baseY, baseZ);
        posArr.push(baseX + scatterX, baseY + scatterY, baseZ + scatterZ);

        let color: THREE.Color;
        if (radius < 2.5) {
          color = goldColor;
        } else if (radius < 5.5) {
          color = Math.random() > 0.4 ? goldColor : whiteColor;
        } else {
          const r = Math.random();
          if (r < 0.5) color = whiteColor;
          else if (r < 0.8) color = goldColor;
          else color = dimGold;
        }

        colArr.push(color.r, color.g, color.b);
      }
    }

    return {
      positions: new Float32Array(posArr),
      colors: new Float32Array(colArr),
      basePositions: new Float32Array(basePos),
      particleCount: posArr.length / 3,
    };
  }, []);

  const velocitiesRef = useRef<Float32Array>(new Float32Array(particleCount * 3));
  const smoothMouseRef = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!pointsRef.current || !geometryRef.current) return;

    const time = state.clock.getElapsedTime();
    const positionAttr = geometryRef.current.attributes.position;
    if (!positionAttr) return;

    const posArray = positionAttr.array as Float32Array;
    const velocities = velocitiesRef.current;

    const targetMouseX = state.pointer.x * 8;
    const targetMouseZ = -state.pointer.y * 8;
    smoothMouseRef.current.x = THREE.MathUtils.lerp(smoothMouseRef.current.x, targetMouseX, 0.07);
    smoothMouseRef.current.y = THREE.MathUtils.lerp(smoothMouseRef.current.y, targetMouseZ, 0.07);

    const mouseX = smoothMouseRef.current.x;
    const mouseZ = smoothMouseRef.current.y;

    const SPRING_STIFFNESS = 0.04;
    const SPRING_DAMPING = 0.80;
    const REPULSE_RADIUS = 2.8;
    const REPULSE_STRENGTH = 2.2;
    const VERTICAL_LIFT = 0.8;
    const VELOCITY_SCALE = 0.22;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;

      const currentX = posArray[idx];
      const currentY = posArray[idx + 1];
      const currentZ = posArray[idx + 2];

      const baseX = basePositions[idx];
      const baseZ = basePositions[idx + 2];
      const baseYWithBreath =
        basePositions[idx + 1] + Math.sin(time * 0.55 + i * 0.09) * 0.05;

      const dx = currentX - mouseX;
      const dz = currentZ - mouseZ;
      const mouseDist = Math.sqrt(dx * dx + dz * dz);

      let pushX = 0;
      let pushY = 0;
      let pushZ = 0;

      if (mouseDist < REPULSE_RADIUS && mouseDist > 0.001) {
        let force = (REPULSE_RADIUS - mouseDist) / REPULSE_RADIUS;
        force = force * force;
        pushX = (dx / mouseDist) * force * REPULSE_STRENGTH;
        pushZ = (dz / mouseDist) * force * REPULSE_STRENGTH;
        pushY = force * VERTICAL_LIFT;
      }

      const springX = (baseX - currentX) * SPRING_STIFFNESS;
      const springY = (baseYWithBreath - currentY) * SPRING_STIFFNESS;
      const springZ = (baseZ - currentZ) * SPRING_STIFFNESS;

      let vx = velocities[idx];
      let vy = velocities[idx + 1];
      let vz = velocities[idx + 2];

      vx = vx * SPRING_DAMPING + springX + pushX * VELOCITY_SCALE;
      vy = vy * SPRING_DAMPING + springY + pushY * VELOCITY_SCALE;
      vz = vz * SPRING_DAMPING + springZ + pushZ * VELOCITY_SCALE;

      velocities[idx] = vx;
      velocities[idx + 1] = vy;
      velocities[idx + 2] = vz;

      posArray[idx] = currentX + vx;
      posArray[idx + 1] = currentY + vy;
      posArray[idx + 2] = currentZ + vz;
    }

    positionAttr.needsUpdate = true;
    pointsRef.current.rotation.y += 0.0006;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.88}
        depthWrite={false}
        vertexColors
      />
    </points>
  );
};

export const Hero3DScene: React.FC = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
      }}
    >
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 6, 7], fov: 58, near: 0.1, far: 100 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <AntigravityParticles />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Hero3DScene;

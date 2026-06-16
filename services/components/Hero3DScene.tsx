import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const WaveParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const cols = 50;
  const rows = 50;
  const count = cols * rows;
  const spacing = 0.28;

  // Generate initial flat grid positions
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const i = c * rows + r;
        // X coordinate (horizontal spacing)
        pos[i * 3] = (c - (cols - 1) / 2) * spacing;
        // Y coordinate (height - starts at 0)
        pos[i * 3 + 1] = 0;
        // Z coordinate (depth spacing)
        pos[i * 3 + 2] = (r - (rows - 1) / 2) * spacing;
      }
    }
    return pos;
  }, [cols, rows, count, spacing]);

  // Keep track of smoothed mouse coordinates to prevent sudden jumps
  const prevMouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const positionAttr = pointsRef.current.geometry.attributes.position;
    if (!positionAttr) return;

    const array = positionAttr.array as Float32Array;

    // Map screen mouse [-1, 1] to world space coordinates
    const targetMouseX = state.pointer.x * 6.0;
    const targetMouseZ = -state.pointer.y * 6.0;

    // Smooth LERP movement for the mouse disturbance
    prevMouse.current.x = THREE.MathUtils.lerp(prevMouse.current.x, targetMouseX, 0.08);
    prevMouse.current.y = THREE.MathUtils.lerp(prevMouse.current.y, targetMouseZ, 0.08);

    const mouseX = prevMouse.current.x;
    const mouseZ = prevMouse.current.y;

    // Recalculate Y position of every point for wave ripple + cursor disturbance
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const i = c * rows + r;
        const idx = i * 3;
        const x = array[idx];
        const z = array[idx + 2];

        // 1. Sine wave ripple math
        const wave = Math.sin(x * 0.45 + time * 1.8) * Math.cos(z * 0.45 + time * 1.8) * 0.35;

        // 2. Cursor disturbance calculation
        const dx = x - mouseX;
        const dz = z - mouseZ;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const mouseWarp = Math.sin(dist - time * 3.0) * Math.exp(-dist * 0.4) * 0.4;

        array[idx + 1] = wave + mouseWarp;
      }
    }

    positionAttr.needsUpdate = true;

    // 3. Tilting the entire particle field based on cursor direction
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      -Math.PI / 3.2 + state.pointer.y * 0.12,
      0.05
    );
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      state.pointer.x * 0.12,
      0.05
    );
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
};

export const Hero3DScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 60 }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#D4AF37" />
          
          <WaveParticleField />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Hero3DScene;

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GoldTorusKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous smooth rotation
    targetRotationX.current += 0.003;
    targetRotationY.current += 0.005;

    // Latent interactive response based on mouse position
    // state.pointer ranges from -1 to 1 representing normalized screen coords
    const mouseInfluenceX = state.pointer.x * 0.8;
    const mouseInfluenceY = state.pointer.y * 0.8;

    // Smooth LERP interpolation for rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotationX.current + mouseInfluenceY,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotationY.current + mouseInfluenceX,
      0.05
    );

    // Elegant vertical floating motion
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Modest segments ensures ultra-smooth performance on any device */}
      <torusKnotGeometry args={[1.5, 0.45, 96, 12]} />
      <meshStandardMaterial
        color="#D4AF37"
        wireframe
        roughness={0.1}
        metalness={0.9}
        emissive="#1a1403"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
  });

  const count = 120;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#D4AF37"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

export const Hero3DScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 60 }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#D4AF37" />
          
          <GoldTorusKnot />
          <Particles />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Hero3DScene;

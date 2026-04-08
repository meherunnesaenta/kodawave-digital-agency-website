import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

// Animated 3D Sphere Component
const AnimatedSphere = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Get theme colors from CSS variables
  const getThemeColors = () => {
    const root = document.documentElement;
    const primary = getComputedStyle(root).getPropertyValue('--color-secondary').trim();
    const secondary = getComputedStyle(root).getPropertyValue('--color-primary').trim();
    return { primary, secondary };
  };

  const colors = getThemeColors();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      if (hovered) {
        meshRef.current.scale.lerp({ x: 1.1, y: 1.1, z: 1.1 }, 0.1);
      } else {
        meshRef.current.scale.lerp({ x: 1, y: 1, z: 1 }, 0.1);
      }
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1.5, 128, 128]}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={colors.primary }
        emissive={colors.secondary }
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
        distort={0.4}
        speed={2}
      />
    </Sphere>
  );
};

// Main HeroSphere Component
const HeroSphere = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <spotLight position={[0, 5, 5]} intensity={0.8} />
        
        <AnimatedSphere />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableRotate={false}
        />
      </Canvas>
    </motion.div>
  );
};

export default HeroSphere;
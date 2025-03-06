import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { BG_COLORS } from '@/constants/styles';
import * as THREE from 'three';

// Add this interface before the ShootingStars component
interface Star {
  id: number;
  startPosition: THREE.Vector3;
  velocity: THREE.Vector3;
}

interface ShootingStarProps {
  startPosition: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  color: string;
  onRemove: () => void;
}

const ShootingStar = ({
  startPosition,
  velocity,
  size,
  color,
  onRemove,
}: ShootingStarProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.add(velocity);
      if (
        meshRef.current.position.y < -50 ||
        meshRef.current.position.x < -100
      ) {
        onRemove();
      }
    }
  });

  return (
    <mesh ref={meshRef} position={startPosition}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

// Component that spawns shooting stars
const ShootingStars = ({ isDarkTheme }: { isDarkTheme: boolean }) => {
  const [stars, setStars] = useState<Star[]>([]);
  const color = isDarkTheme ? '#FFFFFF' : '#000000'; // White for dark, black for light

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * 200 - 100;
      const y = 50;
      const z = -20;
      const startPosition = new THREE.Vector3(x, y, z);
      const velocity = new THREE.Vector3(
        -0.5 - Math.random() * 0.5, // Randomize speed
        -0.3 - Math.random() * 0.3,
        0
      );
      const id = Math.random();
      setStars((prev) => [...prev, { id, startPosition, velocity }]);
    }, 800); // Slightly faster spawning

    return () => clearInterval(interval);
  }, []);

  const removeStar = (id: number) => {
    setStars((prev) => prev.filter((star) => star.id !== id));
  };

  return (
    <>
      {stars.map((star) => (
        <ShootingStar
          key={star.id}
          startPosition={star.startPosition.clone()}
          velocity={star.velocity.clone()}
          size={0.3 + Math.random() * 0.5} // Vary sizes
          color={color}
          onRemove={() => removeStar(star.id)}
        />
      ))}
    </>
  );
};

interface SceneProps {
  isDarkTheme: boolean;
}
// Main scene component that includes the background stars and shooting stars
const Scene = ({ isDarkTheme }: SceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 75 }}
      className={`${
        isDarkTheme ? BG_COLORS.dark : BG_COLORS.light
      } w-full h-full -z-10`}
    >
      <ShootingStars isDarkTheme={isDarkTheme} />
    </Canvas>
  );
};

export default Scene;

import { Theme } from '@/types/types';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ShootingStar = ({ startPosition, velocity, onRemove }) => {
  const meshRef = useRef();

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
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

// Component that spawns shooting stars
const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  // Spawn a new shooting star every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Define a random starting position along the top (adjust as desired)
      const x = Math.random() * 200 - 100;
      const y = 50;
      const z = -20;
      const startPosition = new THREE.Vector3(x, y, z);
      // Define a diagonal velocity vector (tweak for speed and direction)
      const velocity = new THREE.Vector3(-0.3, -0.3, 0);
      // Use a unique id for each star
      const id = Math.random();
      setStars((prev) => [...prev, { id, startPosition, velocity }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handler to remove a star when it moves off-screen
  const removeStar = (id) => {
    setStars((prev) => prev.filter((star) => star.id !== id));
  };

  return (
    <>
      {stars.map((star) => (
        <ShootingStar
          key={star.id}
          startPosition={star.startPosition}
          velocity={star.velocity}
          onRemove={() => removeStar(star.id)}
        />
      ))}
    </>
  );
};

interface SceneProps {
  theme: Theme;
}
// Main scene component that includes the background stars and shooting stars
const Scene = ({ theme }: SceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 75 }}
      className={`${theme.background_base} w-full h-full -z-10`}
    >
      <ShootingStars />
    </Canvas>
  );
};

export default Scene;

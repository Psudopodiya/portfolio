import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { UnrealBloomPass } from "three-stdlib";

extend({ UnrealBloomPass });

function ParticleField({ isDarkTheme }: { isDarkTheme: boolean }) {
  const points = useRef<THREE.Points>(null!);
  const particleCount = 4000;

  const particlePoints = useMemo(() => {
    const points = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < points.length; i += 3) {
      const radius = Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      points[i] = radius * Math.sin(phi) * Math.cos(theta);
      points[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i + 2] = radius * Math.cos(phi);

      // Generate color based on theme
      const hue = isDarkTheme ? 0.55 : 0.2; // Adjusted H for lighter/darker colors
      const saturation = isDarkTheme ? 0.7 : 0.2;
      const lightness = isDarkTheme ? 0.7 : 0.2; // Brighter for dark theme, dimmer for light theme

      color.setHSL(hue, saturation, lightness);

      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    return { positions: points, colors };
  }, [isDarkTheme]);

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.x =
      Math.sin(state.clock.getElapsedTime() * 0.3) * 0.02;
  });

  return (
    <Points
      ref={points}
      positions={particlePoints.positions}
      colors={particlePoints.colors}
    >
      <PointMaterial
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background3d({
  isDarkTheme,
}: {
  isDarkTheme: boolean;
}) {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 5, 12], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <color
          attach="background"
          args={[isDarkTheme ? "#000000" : "#1a1a1a"]}
        />
        <fog attach="fog" args={[isDarkTheme ? "#000000" : "#1a1a1a", 0, 30]} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[-10, 10, -10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />

        <ParticleField isDarkTheme={isDarkTheme} />

        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

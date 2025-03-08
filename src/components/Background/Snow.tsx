import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

const SNOWFLAKE_COUNT = 1000;

interface SnowProps {
  isDarkMode: boolean;
}
const Snow = ({ isDarkMode }: SnowProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const snowflakeTexture = useLoader(
    THREE.TextureLoader,
    `${isDarkMode ? '/sprites/snowflake-light.svg' : '/sprites/snowflake-dark.svg'}`
  );

  // Generate snowflake texture on mount
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;

    const context = canvas.getContext('2d')!;
    const gradient = context.createRadialGradient(15, 15, 2, 15, 15, 15);

    if (isDarkMode) {
      gradient.addColorStop(0, 'white');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
    } else {
      gradient.addColorStop(0, 'black');
      gradient.addColorStop(1, 'rgba(51,51,51,0)');
    }

    context.fillStyle = gradient;
    context.fillRect(0, 0, 32, 32);

    // setSnowflakeTexture(new THREE.CanvasTexture(canvas));
  }, [isDarkMode]);

  // Create snowflake positions
  const snowflakePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      positions.push(
        new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(450),
          THREE.MathUtils.randFloatSpread(250),
          THREE.MathUtils.randFloatSpread(250)
        )
      );
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (pointsRef.current) {
      const positions = (pointsRef.current.geometry as THREE.BufferGeometry)
        .attributes.position as THREE.BufferAttribute;

      for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
        const ix = i * 3;
        // Existing movement logic
        positions.array[ix] += 0.1 * Math.sin(i / 30 + time / 40);
        positions.array[ix + 2] += 0.1 * Math.cos(i / 50 + time / 20);
        positions.array[ix + 1] -= 0.1 * Math.cos(i / 150 + time / 70) + 0.1;

        // Reset snowflake when it goes out of bounds
        if (positions.array[ix + 1] < -100) {
          positions.array[ix] = THREE.MathUtils.randFloatSpread(450);
          positions.array[ix + 1] = THREE.MathUtils.randFloatSpread(250);
          positions.array[ix + 2] = THREE.MathUtils.randFloatSpread(250);
        }
      }
      positions.needsUpdate = true;
    }
  });

  // Adjust size based on viewport width
  const snowflakeSize = viewport.width < 10 ? 0.2 : 1;

  return (
    <>
      {snowflakeTexture && (
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={SNOWFLAKE_COUNT}
              array={
                new Float32Array(
                  snowflakePositions.flatMap((v) => [v.x, v.y, v.z])
                )
              }
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            color="white"
            size={snowflakeSize}
            map={snowflakeTexture}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      )}
    </>
  );
};

export default Snow;

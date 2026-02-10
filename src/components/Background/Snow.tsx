import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  MathUtils,
  Points,
  TextureLoader,
  Vector3,
} from 'three';

const SNOWFLAKE_COUNT = 1000;
const SNOW_DRIFT_SPEED = 0.05;
const SNOW_FALL_BASE_SPEED = 0.05;
const SNOW_FALL_VARIATION = 0.05;

interface SnowProps {
  isDarkMode: boolean;
}

const Snow = ({ isDarkMode }: SnowProps) => {
  const pointsRef = useRef<Points>(null);
  const { viewport } = useThree();

  const snowflakeTexture = useLoader(
    TextureLoader,
    `${isDarkMode ? '/sprites/snowflake-light.svg' : '/sprites/snowflake-dark.svg'}`
  );

  // Create snowflake positions
  const snowflakePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      positions.push(
        new Vector3(
          MathUtils.randFloatSpread(450),
          MathUtils.randFloatSpread(250),
          MathUtils.randFloatSpread(250)
        )
      );
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (pointsRef.current) {
      const positions = (pointsRef.current.geometry as BufferGeometry)
        .attributes.position as BufferAttribute;

      for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
        const ix = i * 3;
        (positions.array as Float32Array)[ix] +=
          SNOW_DRIFT_SPEED * Math.sin(i / 30 + time / 40);
        (positions.array as Float32Array)[ix + 2] +=
          SNOW_DRIFT_SPEED * Math.cos(i / 50 + time / 20);
        (positions.array as Float32Array)[ix + 1] -=
          SNOW_FALL_VARIATION * Math.cos(i / 150 + time / 70) + SNOW_FALL_BASE_SPEED;

        // Reset snowflake when it goes out of bounds
        if ((positions.array as Float32Array)[ix + 1] < -100) {
          (positions.array as Float32Array)[ix] = MathUtils.randFloatSpread(450);
          (positions.array as Float32Array)[ix + 1] = MathUtils.randFloatSpread(250);
          (positions.array as Float32Array)[ix + 2] = MathUtils.randFloatSpread(250);
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
            blending={AdditiveBlending}
          />
        </points>
      )}
    </>
  );
};

export default Snow;

import Snow from './Snow';
import { Theme } from '@/types/types';
import { Canvas } from '@react-three/fiber';

interface SceneProps {
  theme: Theme;
}
function Scene({ theme }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 20, 200], fov: 60 }}
      className={`${theme.background_base} w-full h-full -z-10`}
    >
      <Snow />
      {/* <ShootingStars isDarkTheme={isDarkTheme} /> */}
    </Canvas>
  );
}

export { Scene };

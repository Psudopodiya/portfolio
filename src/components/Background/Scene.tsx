import { Theme } from '@/types/types';
import { Canvas } from '@react-three/fiber';
import Snow from './Snow';

interface SceneProps {
  theme: Theme;
}
function Scene({ theme }: SceneProps) {
  const isDarkMode = theme.background_base.includes('black');
  return (
    <Canvas
      camera={{ position: [0, 20, 200], fov: 60 }}
      className={`${theme.background_base} w-full h-full -z-10`}
    >
      <Snow isDarkMode={isDarkMode} />
    </Canvas>
  );
}

export { Scene };

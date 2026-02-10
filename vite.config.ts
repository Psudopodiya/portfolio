import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '::',
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (id.includes('@react-three/fiber')) return 'vendor-r3f';
          if (id.includes('three/examples')) return 'vendor-three-examples';
          if (id.includes('node_modules/three')) return 'vendor-three-core';

          if (id.includes('@radix-ui') || id.includes('framer-motion')) {
            return 'vendor-ui';
          }

          if (id.includes('@tanstack/react-query')) {
            return 'vendor-query';
          }

          return 'vendor';
        },
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import path from 'node:path';

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/pages',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
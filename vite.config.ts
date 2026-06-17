import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // 1. Explicitly enforce absolute root pathing for production assets
    base: '/',

    build: {
      sourcemap: true,
    },


    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    css: {
      devSourcemap: true,
    },

    resolve: {
      alias: {
        // 2. Fix the alias to point to your frontend source folder 'src'
        '@': path.resolve(__dirname, './src'),
      }
    }
  };
});
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envPrefix: 'CLIENT_', // Never set this as an empty string: https://vitejs.dev/config/index.html#envprefix
  server: {
    port: 8082,
  },
});

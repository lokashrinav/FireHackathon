import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FireHackathon/', // Replace <REPOSITORY_NAME> with your GitHub repository name
  plugins: [react()],
});

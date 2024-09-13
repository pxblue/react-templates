import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { config } from 'dotenv';

config();

export default defineConfig({
    base: '/',
    plugins: [react(), viteTsconfigPaths()],
    define: {
        'process.env': process.env
      },
    server: {
        open: true,
    },
});

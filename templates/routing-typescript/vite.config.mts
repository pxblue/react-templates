/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig({
    base: '/',
    plugins: [
        react(),
        viteTsconfigPaths(),
        dts({
            entryRoot: 'src',
            tsconfigPath: path.join(__dirname, 'tsconfig.json'),
        }),
    ],
    server: {
        port: 4200,
        host: 'localhost',
        open: true,
    },
    preview: {
        port: 4300,
        host: 'localhost',
        open: true,
    },
    test: {
        name: 'App',
        watch: false,
        globals: true,
        environment: 'jsdom',
        reporters: ['default'],
        coverage: {
            reportsDirectory: 'coverage',
            provider: 'v8',
        },
        setupFiles: './src/setupTests.ts',
    },
    root: __dirname,
    build: {
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});

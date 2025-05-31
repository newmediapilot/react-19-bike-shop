import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

// https://vite.dev/config/
export default defineConfig({
    base: './',
    server: {
        open: 'http://localhost:5173/',
    },
    plugins: [
        react(),
    ],
    define: {
        __APP_VERSION__: JSON.stringify(packageJson.version),
    },
});
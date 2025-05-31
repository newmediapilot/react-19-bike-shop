import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
    ],
    define: {
        BUILD_TIMESTAMP: execSync('git rev-parse --short HEAD').toString().trim(),
    },
})

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import {readFileSync} from 'fs'
import path from 'path'

const packageVersion = JSON.parse(readFileSync('./package.json', 'utf-8'));
const {version: __APP_VERSION__} = JSON.stringify(packageVersion);

// https://vite.dev/config/
export default defineConfig({
    base: '/react-19-bike-shop/',
    server: {
        port: 1234,
    },
    plugins: [
        tsconfigPaths(), // [auto] resolve.alias
        react(),
    ],
    define: {__APP_VERSION__}
});

console.log('vite.cofig.js ::', path.resolve(__dirname, "./src"));
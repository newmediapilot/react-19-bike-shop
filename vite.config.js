import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import {readFileSync} from 'fs'
import path from 'path'
import {VitePWA} from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

const packageJSON = JSON.parse(readFileSync('./package.json', 'utf-8'));
const packageVersion = packageJSON.version;
const packageName = packageJSON.name;
const {version: __APP_VERSION__} = JSON.stringify(packageVersion.version || 'localhost');

// https://vite.dev/config/
export default defineConfig({
    base: '/react-19-bike-shop/',
    server: {
        port: 1234,
    },
    plugins: [
        tsconfigPaths(), // [auto] resolve.alias
        tailwindcss(),
        react(),
        VitePWA({
            injectRegister: 'inline',
            registerType: 'autoUpdate',
            workbox: {
                globDirectory: 'dist/',
                globPatterns: ['**/*.{png,css,js,json,html,webmanifest,txt}'],
                swDest: 'dist/sw.js',
            },
            runtimeCaching: [
                {
                    handler: 'NetworkFirst',
                    urlPattern: ({url: {href}}) => {
                        return (href === "http://localhost:3000/list");
                    },
                    method: "GET",
                    options: {
                        backgroundSync: {
                            name: `${packageName}`,
                            options: {
                                maxRetentionTime: 24 * 60
                            }
                        }
                    }
                }
            ]
        }),
    ],
    define: {__APP_VERSION__},
});

console.log('vite.cofig.js ::', path.resolve(__dirname, "./src"));
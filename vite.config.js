import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'src'),
      },
   },
   server: {
      port: 5173,
      allowedHosts: ['.ngrok-free.app'],
   },
   build: {
      rollupOptions: {
         output: {
            manualChunks: {
               vendor: ['react', 'react-dom', 'react-router-dom'],
               animations: ['framer-motion', 'react-intersection-observer'],
               ui: ['styled-components', 'react-icons'],
            },
         },
      },
      chunkSizeWarningLimit: 1000,
   },
})

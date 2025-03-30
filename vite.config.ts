import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base:'./2025v7',  // 👈 Ensures correct file paths
=======
  base: '/index.htm',  // 👈 Ensures correct file paths
>>>>>>> b12fa7775dd262bb83846c39a192831e821f11f3
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})

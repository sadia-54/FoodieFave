import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
  optimizeDeps: {
    exclude: ['chunk-4jv6ik6a'],  // Exclude the problematic dependency
  },
})

import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Custom
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '@app': path.resolve(__dirname, './src/app'),
    },
  },
})

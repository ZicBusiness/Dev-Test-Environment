import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react( ),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/DEV-TEST-ENVIRONMENT/', // O nome do seu repositório
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

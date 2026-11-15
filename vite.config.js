import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative assets keep this working on GitHub Pages project repositories.
  base: './',
})

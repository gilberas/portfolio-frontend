import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Tell Vite NOT to intercept requests to /cv/
    fs: {
      allow: ['.'],
    },
  },
  // Ensure static assets in public/ are served correctly
  publicDir: 'public',
})

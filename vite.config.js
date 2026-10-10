import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const page = (p) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Cada página é um HTML próprio: / (geral), /moda/ (lojas) e /privacidade/
      input: {
        main: page('./index.html'),
        moda: page('./moda/index.html'),
        privacidade: page('./privacidade/index.html'),
      },
    },
  },
})

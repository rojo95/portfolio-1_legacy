import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/portfolio/', //configuracion para dar ruta base en caso de git page /<repositorio>/
  build: { // configuracion para ejecutar en git pages
    outDir: 'docs'
  },
})

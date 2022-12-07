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
  // configuración de ruta base del proyecto
  base: './', //configuracion para dar ruta base en caso de git page /<repositorio>/
  // base: '/portfolio/', //configuracion para dar ruta base en caso de git page /<repositorio>/
  build: { 
    // definición de la carpeta de compilado
    // configuracion para ejecutar en git pages
    outDir: 'docs'
  },
})

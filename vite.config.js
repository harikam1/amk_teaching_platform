// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/AMKspecialeducation/',
//   build: {
//     outDir: 'AMKspecialeducation', 
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AMKspecialeducation/',
  build: {
    outDir: 'AMKspecialeducation', 
  },
  server: {
    proxy: {
      '/AMKspecialeducation/api': {
        target: 'https://amkspecialeducation.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/AMKspecialeducation/, ''),
      },
    },
  },
})
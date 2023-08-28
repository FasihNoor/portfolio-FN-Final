import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
      rollupOptions: {
        external: ['/src/assets/images/netflix.jpg'], 
        external: ['/src/assets/images/todolist.png'], 
        external: ['/src/assets/images/natours.png'], 
      },
  },
})



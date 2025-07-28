import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React-js/',  
  plugins: [react()],
})
})

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: '/widdle',
    plugins: [react()]
  }

  if (command !== 'serve') {
    config.base = '/widdle/'
  }

  return config
})
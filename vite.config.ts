import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '1ed970a3-48bb-4a0c-aee8-981587683582-00-c90r89ozytd3.kirk.replit.dev'
    ]
  }
})

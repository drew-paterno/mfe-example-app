import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './MFE1': resolve(__dirname, 'src/main.tsx')
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-redux"
      ],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false
  },
  preview: {
    port: 3006,
    strictPort: true
  },
  server: {
    port: 3006,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:3006'
  }
})

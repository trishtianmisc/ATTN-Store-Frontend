import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'  // ✅ this import is required


// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [    
    tailwindcss(),
    react()
  ],

 build: {
  outDir: 'dist',        // This puts the files inside ATTN_React/dist
  emptyOutDir: true,    // This cleans the folder before every new build
},

  server: {
    port: 5173,
    open: true,
    host: "0.0.0.0",
  },
})

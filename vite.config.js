import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //Add css module for avoiding override (In normal two css file having same style with same name, it leads to override)

  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});

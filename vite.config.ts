import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from "@vitejs/plugin-react-refresh"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      "utils": path.resolve(__dirname, "src/utils"),
      "features": path.resolve(__dirname, "src/features"),
      "providers": path.resolve(__dirname, "src/providers"),
    }
  }
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"), // your React app folder
  build: {
    outDir: path.resolve(__dirname, "build"), // static deploy folder for Vercel/Netlify
    emptyOutDir: true, // clear previous builds
  },
  server: {
    fs: {
      strict: true, // allow only project files
    },
  },
});

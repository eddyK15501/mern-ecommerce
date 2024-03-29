import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
  server: {
    port: "3001",
    open: true,
    proxy: {
      "/api": "http://localhost:5001",
      '/uploads': 'http://localhost:5001',
    },
  },
});

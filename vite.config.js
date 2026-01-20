import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ensures relative paths for assets in production
  server: {
    port: 5173, // local dev port
    open: true, // optional: open browser automatically
  },
  preview: {
    port: 4173, // preview port
  },
});

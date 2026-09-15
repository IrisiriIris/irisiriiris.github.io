import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  root: resolve(__dirname),
  publicDir: resolve(__dirname, "public"),
  plugins: [react()],
  base: "/",
  build: {
    outDir: resolve(__dirname, "dist-github"),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "github-src/index.html"),
    },
  },
});

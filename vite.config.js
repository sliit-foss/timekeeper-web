import { defineConfig } from "vite";
import { default as react } from "@vitejs/plugin-react";
import { default as path } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`
    }
  }
});

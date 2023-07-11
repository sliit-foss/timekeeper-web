import { default as react } from "@vitejs/plugin-react";
import { default as path } from "path";
import { defineConfig } from "vite";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    plugins: [
      mdx.default({
        remarkPlugins: []
      }),
      react()
    ],
    base: "./",
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`
      }
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis"
        }
      }
    }
  };
});

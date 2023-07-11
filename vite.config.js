import { default as react } from "@vitejs/plugin-react";
import { default as path } from "path";
import { defineConfig } from "vite";
import { default as topLevelAwait } from "vite-plugin-top-level-await";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    plugins: [
      topLevelAwait({
        promiseExportName: "__tla",
        promiseImportName: (i) => `__tla_${i}`
      }),
      react(),
      mdx.default()
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

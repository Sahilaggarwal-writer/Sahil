import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/Sahil/",
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
    spa: {
      enabled: true,
    },
  },
});

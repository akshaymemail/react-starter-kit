import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { global: "window" },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@db": path.resolve(__dirname, "src/db"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@navigation": path.resolve(__dirname, "src/navigation"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@services": path.resolve(__dirname, "src/services"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
});

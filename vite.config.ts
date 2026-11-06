import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // If building on GitHub Actions, use the repository subfolder. Otherwise, use root.
  base: process.env.GITHUB_ACTIONS ? "/portfolio/" : "/",
});

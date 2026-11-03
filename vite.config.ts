import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" działa zarówno lokalnie, jak i na GitHub Pages (pod podścieżką repozytorium).
export default defineConfig({
  plugins: [react()],
  base: "./",
});

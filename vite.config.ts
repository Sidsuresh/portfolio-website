import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace with your repo name if deploying to GitHub Pages
const repoName = "https://sidsuresh.github.io/portfolio-website/";

export default defineConfig({
  base: repoName,
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite config tuned for Tailwind v4 (no tailwind.config.js needed).
export default defineConfig({
  plugins: [tailwindcss(), react()],
});

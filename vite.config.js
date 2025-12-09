import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: import.meta.env.VITE_BASE_PATH || "/quiz/",
});

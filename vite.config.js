/* global process */

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const basePath = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  plugins: [tailwindcss()],
  base: basePath,
});

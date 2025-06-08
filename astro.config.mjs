// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; // Import the Astro Tailwind integration

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind() // Add Tailwind as an Astro integration
  ],
  // You can remove the vite.plugins configuration for tailwindcss
  // if it was solely for Tailwind.
  // vite: {
  //   plugins: [], // Original plugins if any, besides tailwindcss
  // },
});
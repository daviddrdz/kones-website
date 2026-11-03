// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(), // <-- Falta esta línea para registrar la integración
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
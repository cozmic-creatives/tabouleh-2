import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable tree shaking for production builds
    target: 'esnext',
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'react-vendor', test: /node_modules[\\/](react-dom|react)[\\/]/, priority: 20 },
            { name: 'router', test: /node_modules[\\/]react-router-dom/, priority: 15 },
            { name: 'ui-vendor', test: /node_modules[\\/]@radix-ui/, priority: 15 },
            { name: 'icons', test: /node_modules[\\/]lucide-react/, priority: 10 },
            { name: 'query', test: /node_modules[\\/]@tanstack[\\/]react-query/, priority: 10 },
          ],
        },
      },
    },
    minify: 'oxc',
    cssMinify: true,
    // Remove unused code
    reportCompressedSize: true,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react',
    ],
  },
}));

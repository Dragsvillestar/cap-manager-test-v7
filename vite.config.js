import { defineConfig } from 'vite';

export default defineConfig({
    root: './',  // Set the root directory (usually the project root)
    build: {
        outDir: 'www',  // Set the output directory to 'www' (for Capacitor)
        emptyOutDir: true,  // Optional: clears the 'www' folder before building
    },
});

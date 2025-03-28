import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

import { defineConfig } from 'vitest/config';

export default defineConfig({
    clearScreen: false,

    optimizeDeps: {
        include: ['sass']
    },

    plugins: [enhancedImages(), sveltekit()],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },

    build: {
        minify: true,
        sourcemap: false,
        cssMinify: true
    },

    server: {
        open: true,
        hmr: false
    },

    css: {
        modules: {
            localsConvention: 'dashesOnly'
        },
        devSourcemap: false
    }
});

import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { enhancedImages } from '@sveltejs/enhanced-img';

import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [
        visualizer({
            emitFile: true,
            filename: 'stats.html'
        }),
        enhancedImages(),
        sveltekit()
    ],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },
    build: {
        minify: 'terser'
    }
});

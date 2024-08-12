import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        sveltePreprocess({
            replace: [[/process\.env\.NODE_ENV/g, JSON.stringify(process.env.NODE_ENV)]],
        }),
        mdsvex({
            layout: {
                page: 'src/lib/mdsvex/page.svelte',
                news: 'src/lib/mdsvex/news.svelte',
                testimonial: 'src/lib/mdsvex/testimonial.svelte',
                _: 'src/lib/mdsvex/fallback.svelte'
            },
            extensions: ['.svelte.md', '.md', '.svx']
        })
    ],

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'public',
            assets: 'public',
            fallback: undefined,
            precompress: true,
            strict: true
        }),
        paths: {
            assets: '',
            base: '',
            relative: false
        }
    },

    extensions: ['.svelte', '.svelte.md', '.md', '.svx']
};

export default config;

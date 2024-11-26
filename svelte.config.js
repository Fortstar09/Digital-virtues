import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import preview, { textFormatter } from 'remark-preview';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        sveltePreprocess({
            replace: [[/process\.env\.NODE_ENV/g, JSON.stringify(process.env.NODE_ENV)]],
            postcss: {
                plugins: [autoprefixer]
            }
        }),
        mdsvex({
            layout: {
                page: 'src/lib/mdsvex/page.svelte',
                news: 'src/lib/mdsvex/news.svelte',
                testimonial: 'src/lib/mdsvex/testimonial.svelte',
                _: 'src/lib/mdsvex/fallback.svelte'
            },
            extensions: ['.svelte.md', '.md', '.svx'],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
            remarkPlugins: [
                preview(textFormatter({ length: 250, maxBlocks: 2 })),
                preview(textFormatter({}), {
                    attribute: 'textContent'
                })
            ]
        })
    ],

    kit: {
        adapter: adapter({
            pages: 'public',
            assets: 'public',
            fallback: undefined,
            precompress: true,
            strict: true,
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

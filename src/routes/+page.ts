import { loadContent } from '$lib/loadContent';

export async function load() {
    const testimonials = await loadContent(
        import.meta.glob(`/src/content/testimonials/*.{md,svx,svelte.md}`) as Record<
            string,
            App.MdsvexResolver
        >
    );
    const news = await loadContent(
        import.meta.glob(`/src/content/news/*.{md,svx,svelte.md}`) as Record<
            string,
            App.MdsvexResolver
        >
    );

    return {
        testimonials,
        news
    };
}

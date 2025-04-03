<script lang="ts">
    import JsonLd from '$lib/components/JSON-LD.svelte';

    let { date, tags, id, textContent, children } = $props();
</script>

<div class="timeline-item" {id}>
    <JsonLd
        type="Article"
        data={{
            datePublished: new Date(date).toISOString(),
            articleBody: textContent,
            keywords: tags
                ?.split(',')
                .map((e: string) => e.trim())
                .filter((e: string) => !!e),
            author: {
                '@type': 'Organization',
                name: 'Digital Virtues GmbH',
                url: 'https://digitalvirtues.com'
            }
        }}
    />

    <h4>{new Date(date).toISOString().slice(0, 10)}</h4>
    {@render children?.()}
    <!-- Tags: {tags
        ?.split(',')
        .map((e: string) => e.trim())
        .filter((e: string) => !!e)
        .join(', ')} -->
</div>

<style lang="scss">
    .timeline-item {
        margin-bottom: 2rem;
        text-wrap: pretty;

        &:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
    }
</style>

<script lang="ts">
    import JsonLd from '$lib/components/JSON-LD.svelte';

    export let date;
    export let tags;
    export let id;
    export let textContent;
</script>

<JsonLd
    type="Article"
    data={{
        datePublished: new Date(date).toISOString(),
        articleBody: textContent,
        keywords: tags
            ?.split(',')
            .map((e) => e.trim())
            .filter((e) => !!e),
        author: {
            '@type': 'Organization',
            name: 'Digital Virtues GmbH',
            url: 'https://digitalvirtues.com'
        }
    }}
/>

<div class="timeline-item" {id}>
    {new Date(date).toISOString().slice(0, 10)}
    <slot />
    Tags: {tags
        ?.split(',')
        .map((e) => e.trim())
        .filter((e) => !!e)
        .join(', ')}
</div>

<script lang="ts">
    export let type = 'Person';
    export let data = {};

    const jsonLd = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': type,
        ...data
    });
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags, @typescript-eslint/no-unused-expressions -->
{@html '<script type="application/ld+json">' + jsonLd + '</script>'}

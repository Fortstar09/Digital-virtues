<script lang="ts">
    interface Props {
        type?: string;
        data?: any;
    }

    let { type = 'Person', data = {} }: Props = $props();

    const jsonLd = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': type,
        ...data
    });
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags, @typescript-eslint/no-unused-expressions -->
{@html '<script type="application/ld+json">' + jsonLd + '</script>'}

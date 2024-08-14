<script lang="ts">
    export let type = 'Person'
    export let data = {}

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type,
        ...data
    }
</script>

{@html '<script type="application/ld+json">'+ JSON.stringify(jsonLd) + '</script>'}

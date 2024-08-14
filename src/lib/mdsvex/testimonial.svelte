<script lang="ts">

    import { loadImageModule } from "$lib/loadImageModule";
    import JsonLd from '$lib/components/JSON-LD.svelte';

    export let date
    export let author
    export let role
    export let company
    export let url
    export let img
    export let id
    export let textContent

    const loadedImage = loadImageModule(img)
</script>

<JsonLd
    type="Review"
    data={{
        author: {
            '@type': 'Person',
            name: author
        },
        reviewBody: textContent,
        datePublished: new Date(date).toISOString().slice(0, 10),
        itemReviewed: {
            '@type': 'Organization',
            name: 'Digital Virtues GmbH',
            url: 'https://digitalvirtues.com'
        }
    }}
/>

<figure class="testimonial" {id}>
    <blockquote>
        <slot />
    </blockquote>
    <figcaption>
        {#if loadedImage}
            <enhanced:img src={loadedImage} alt="Picture of {author}" />
            {/if}
        {author}, {role} at <a href="{url}">{company}</a>
    </figcaption>
</figure>

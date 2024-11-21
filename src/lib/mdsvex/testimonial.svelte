<script lang="ts">
    import { loadImageModule } from '$lib/loadImageModule';
    import JsonLd from '$lib/components/JSON-LD.svelte';

    let {
        date,
        author,
        role,
        company,
        url,
        img,
        id,
        textContent,
        children
    } = $props();

    const loadedImage = loadImageModule(img);
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
        {@render children?.()}
    </blockquote>
    <figcaption>
        {#if loadedImage}
            <enhanced:img
                src={loadedImage}
                sizes="(min-width: 1216px) 50vw, (min-width: 1024px) 80vw, 100vw"
                alt="Picture of {author}"
                class="photo"
            />
        {/if}
        {author}, {role} at <a href={url}>{company}</a>
    </figcaption>
</figure>

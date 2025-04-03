<script lang="ts">
    import { loadImageModule } from '$lib/loadImageModule';
    import JsonLd from '$lib/components/JSON-LD.svelte';

    let { date, author, role, company, url, img, id, textContent, children } = $props();

    const loadedImage = loadImageModule(img);
</script>

<figure class="testimonial" {id}>
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

<style lang="scss">
    .testimonial {
        text-align: center;
        margin-bottom: 3rem;

        blockquote {
            max-width: var(--breakpoint-mobile);
            margin: 1rem auto;
            padding: 1em;
            position: relative;
            text-wrap: pretty;

            &::before {
                content: url('$lib/assets/logo-v-white.svg');
                min-width: 1.25em;
                min-height: 1.25em;
                position: absolute;
                left: 0;
                bottom: 0;
            }

            &::after {
                content: url('$lib/assets/logo-d-white.svg');
                min-width: 1.25em;
                min-height: 1.25em;
                position: absolute;
                right: 0;
                top: 0;
            }
        }

        .photo {
            width: 10rem;
            height: auto;
            border-radius: 5rem;
            margin: 1rem auto;
        }
    }
</style>

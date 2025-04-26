<script lang="ts">
    import { loadImageModule } from '$lib/loadImageModule';
    import JsonLd from '$lib/components/JSON-LD.svelte';

    let { date, author, role, company, url, img, id, textContent, children } = $props();

    const loadedImage = loadImageModule(img);
</script>

<figure class="testimonial" {id}>
    <figcaption>
        {#if loadedImage}
            <enhanced:img
                src={loadedImage}
                sizes="(min-width: 1216px) 50vw, (min-width: 1024px) 80vw, 100vw"
                alt="Picture of {author}"
                class="photo"
            />
        {/if}
        
    </figcaption>
    <div class="content">
        <h2>{author}</h2>
        <h3>{role} at <a href={url}>{company}</a></h3>
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
    </div>
</figure>

<style lang="scss">
    .testimonial {
        text-align: center;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: start;
        gap:24px;
    width: 700px;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgb(0, 106, 255);

        .content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 12px;

            h2 {
            font-size: 2rem;
            margin: 0;

        }h3 {
            font-size: 1.3rem;
            color: white;
            margin: 0;

        }
        p{
            margin: 0;
            color: var(--color-text-secondary);
        }
        }
      

        blockquote {
            max-width: var(--breakpoint-mobile);
            position: relative;
            text-align: left;
            font-size: 0.85rem;
            max-width: 400px;
            overflow-wrap: break-word;

           /* &::before {
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
            } */
        }

        .photo {
            width: 10rem;
            height: auto;
            border-radius: 5rem;
            margin: 1rem auto;
        }
    }
</style>

<script lang="ts">
    import { loadImageModule } from '$lib/loadImageModule';
    import JsonLd from '$lib/components/JSON-LD.svelte';

    let { firstName, lastName, description, role, company, companyUrl, img, homepage, linkedin } =
        $props();

    const loadedImage = loadImageModule(img);
</script>

<div class="person">
    <JsonLd
        type="Person"
        data={{
            familyName: lastName,
            givenName: firstName,
            name: `${firstName} ${lastName}`,
            jobTitle: role,
            url: homepage,
            image: loadedImage?.img.src
        }}
    />

    {#if loadedImage}
        <enhanced:img
            src={loadedImage}
            sizes="(min-width: 1216px) 50vw, (min-width: 1024px) 80vw, 100vw"
            alt="Photo of {firstName} {lastName}"
            class="photo"
        />
    {/if}

    <h3>{firstName} {lastName}</h3>
    <h4><a href={companyUrl}>{role} {company}</a></h4>
    <p>{description}</p>

    <div class="links">
        <a href={homepage}>Homepage</a>
        <a href={linkedin}>LinkedIn</a>
    </div>
</div>

<style lang="scss">
    .person {
        margin: 3rem 1rem;

        h3 {
            font-weight: 700;
            font-size: 3em;
            margin-bottom: 1rem;
        }

        h4 {
            font-weight: 700;
            font-size: 1.5em;
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 1rem;
            line-height: 1.5;
            text-wrap: pretty;
        }

        .links {
            text-align: right;
        }

        .photo {
            width: 15rem;
            height: auto;
            border-radius: 7.5rem;
            margin: 1em auto;
        }

        @media (min-width: 768px) {
            max-width: var(--breakpoint-desktop);
            .photo {
                float: left;
                margin-right: 2rem;
            }

            &:nth-child(odd) {
                text-align: right;

                .photo {
                    float: right;
                    margin-right: 0;
                    margin-left: 2rem;
                }

                .links {
                    text-align: left;
                }
            }
        }

        &::after {
            content: '';
            clear: both;
            display: table;
        }
    }
</style>

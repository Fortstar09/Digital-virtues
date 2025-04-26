<script lang="ts">
    import { loadImageModule } from '$lib/loadImageModule';
    import JsonLd from '$lib/components/JSON-LD.svelte';
    import dvBlueDark from '$lib/assets/logo-dv-blue-dark.svg';
    

    let { firstName, lastName, description, role, company, companyUrl, img, homepage, linkedin } =
        $props();

    const loadedImage = loadImageModule(img);
</script>

<div class="person">
    <div class="photo-container">
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
    </div>

    <div class="person-info">
        <h3>{firstName} {lastName}</h3>
    <h4><a href={companyUrl}>{role} {company}</a></h4>
    <p>{description}</p>

    <div class="links">
        <a href={homepage}>Homepage</a>
        <a href={linkedin}>LinkedIn</a>
    </div>
    </div>
</div>

<style lang="scss">
    .person {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1.5rem;

        &:nth-child(even) {
        flex-direction: row-reverse;
        text-align: right;
    }

        .photo-container {
            position: relative;
            width: 12rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            overflow: hidden;
            background-color: var(--color-background);
        }

.person-info{


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
            overflow-wrap: break-word;
            max-width: 490px;
        }
        a{
            text-decoration: none;
            // color: var(--color-primary);
            font-weight: 700;
            font-size: 1.2em;
            cursor: pointer;
            margin-right: 1rem;
            &:hover {
                text-decoration: underline;
            }
        }
    }
        .photo {
            width: 100%;
          
        }

        @media (min-width: 768px) {
            max-width: var(--breakpoint-desktop);
            .photo {
               
            }
        }

        &::after {
            content: '';
            clear: both;
            display: table;
        }
    }
</style>

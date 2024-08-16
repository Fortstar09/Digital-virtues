<script lang="ts">
    import { loadImageModule } from '$lib/loadImageModule';
    import JsonLd from '$lib/components/JSON-LD.svelte';

    export let firstName;
    export let lastName;
    export let description;
    export let role;
    export let company;
    export let companyUrl;
    export let img;
    export let homepage;
    export let linkedin;

    const loadedImage = loadImageModule(img);
</script>

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

<div class="person">
    <h3>{firstName} {lastName}, {role} <a href={companyUrl}>{company}</a></h3>
    <p>{description}</p>
    {#if loadedImage}
        <enhanced:img
            src={loadedImage}
            sizes="(min-width: 1216px) 50vw, (min-width: 1024px) 80vw, 100vw"
            alt="Photo of {firstName} {lastName}"
            class="photo"
        />
    {/if}
    <a href={homepage}>Homepage</a>
    <a href={linkedin}>LinkedIn</a>
</div>

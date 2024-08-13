<script>
    export let firstName;
    export let lastName;
    export let description;
    export let role;
    export let img;
    export let homepage;
    export let linkedin;

    let jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "familyName": lastName,
        "givenName": firstName,
        "name": `${firstName} ${lastName}`,
        "jobTitle": role,
        "url": homepage,
        "image": img.img.src
    };
</script>

{@html '<script type="application/ld+json">'+ JSON.stringify(jsonLd) + '</script>'}

<div class="person">
    <h3>{firstName} {lastName}, {role}</h3>
    <p>{description}</p>
    {#if img}
        <enhanced:img
            src={img}
            sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 512px"
            alt="Photo of {firstName} {lastName}"
            class="photo"
        />
    {/if}
    <a href={homepage}>Homepage</a>
    <a href={linkedin}>LinkedIn</a>
</div>

<style lang="scss">
    .person .photo {
        width: 256px;
        height: auto;
    }
</style>

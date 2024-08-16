<script lang="ts">
    export let title;
    export let description;
</script>

<svelte:head>
    {#if description}
        <meta name="description" content={description} />
    {/if}

    {#if title}
        <title>{title} | Digital Virtues GmbH</title>
    {/if}
</svelte:head>

<section class="container">
    <slot />
</section>

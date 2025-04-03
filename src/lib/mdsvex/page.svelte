<script lang="ts">
    let { title, description, children } = $props();
</script>

<svelte:head>
    {#if description}
        <meta name="description" content={description} />
    {/if}

    {#if title}
        <title>{title} | Digital Virtues GmbH</title>
    {/if}
</svelte:head>

<section class="container content">
    {@render children?.()}
</section>

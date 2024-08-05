<script>
    import { page } from '$app/stores';
    $: console.log($page.params);

</script>

<svelte:head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <meta name="description" content="Description here">
    <title>Digital Virtues Updated Title</title>
</svelte:head>

<header>
    <div>Digital Virtues</div>
</header>

<main>
    <slot />
</main>

<footer>
    Copyright © 2024 Digital Virtues.
    <a href="/{ $page.params.lang || 'en' }/privacy-policy/">Privacy Policy</a>
    <a href="/{ $page.params.lang || 'en' }/legal-notice/">Legal Notice</a>
</footer>

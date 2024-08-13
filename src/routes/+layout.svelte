<script lang="ts">
    import { base } from '$app/paths';
    import '$lib/styles/layout.scss';
</script>

<svelte:head>
    <link rel="apple-touch-icon" sizes="180x180" href="{base}/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="{base}/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="{base}/favicon-16x16.png" />
    <link rel="manifest" href="{base}/site.webmanifest" />
    <link rel="mask-icon" href="{base}/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <meta
        name="description"
        content="Digital Virtues GmbH is a leading investment, consulting, and project management firm specializing in innovative digital solutions and strategic business growth."
    />
    <title>Digital Virtues GmbH</title>
</svelte:head>

<header>
    <div><a href="{base}/">Digital Virtues GmbH</a></div>
    <a href="{base}/#about">About</a>
    <a href="{base}/#pillars">Pillars</a>
    <a href="{base}/#team">Team</a>
    <a href="{base}/#testimonials">Testimonials</a>
    <a href="{base}/#news">News</a>
    <a href="{base}/#contact">Contact</a>
</header>

<main>
    <slot />
</main>

<footer>
    <p>Copyright &#169; {new Date().getFullYear()} <a href="{base}/">Digital Virtues GmbH</a></p>
    <div class="legal">
        <a href="{base}/privacy-policy/">Privacy Policy</a>
        <a href="{base}/legal-notice/">Legal Notice</a>
        <a href="{base}/#contact">Contact</a>
    </div>
    <div class="social">
        <a href="{base}/">Twitter / X</a>
        <a href="{base}/">LinkedIn</a>
        <a href="{base}/">Instagram</a>
        <a href="{base}/">Facebook</a>
        <a href="{base}/">TikTok</a>
        <a href="{base}/">YouTube</a>
        <a href="{base}/">Discord</a>
        <a href="{base}/">Telegram</a>
        <a href="{base}/">Matrix</a>
        <a href="{base}/">Mastodon</a>
    </div>
    <div class="project">
        <a href="{base}/">Proxy Manager</a>
        <a href="{base}/">Traffic Broker</a>
        <a href="{base}/">Knowledge Collector</a>
        <a href="{base}/">Creator Cartel</a>
        <a href="{base}/">Trading AI</a>
        <a href="{base}/">Lichtmatrosen</a>
        <a href="{base}/">Peach & Lime</a>
    </div>
</footer>

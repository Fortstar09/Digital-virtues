<script lang="ts">
    import { base } from '$app/paths';
    import '$lib/styles/layout.scss';

    import LogoDV from '$lib/assets/logo-dv-white.svg';
    import LogoText from '$lib/assets/logo-text-white.svg';

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
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
    <nav class="container">
        <a href="{base}/" class="brand">
            <img class="logo-text" src={LogoText} alt="Digital Virtues GmbH" />
        </a>
        <ul role="list">
            <li><a href="{base}/#mission">Mission</a></li>
            <!-- <li><a href="{base}/#vision">Vision</a></li>
            <li><a href="{base}/#values">Values</a></li> -->
            <li><a href="{base}/#team">Team</a></li>
            <li><a href="{base}/#references">References</a></li>
            <li><a href="{base}/#timeline">Timeline</a></li>
        </ul>
    </nav>
</header>

<main>
    {@render children?.()}
</main>

<footer>
    <div class="container">
        <div class="legal">
            <h2>
                Copyright &#169; {new Date().getFullYear()}
                <a href="{base}/">Digital Virtues GmbH</a>
            </h2>
            <ul role="list">
                <li><a href="mailto:contact@digitalvirtues.com">contact@digitalvirtues.com</a></li>
                <li><a href="{base}/privacy-policy/">Privacy Policy</a></li>
                <li><a href="{base}/legal-notice/">Legal Notice</a></li>
            </ul>
        </div>
        <div class="social">
            <h2>Socials</h2>
            <ul>
                <li><a href="{base}/">Twitter / X</a></li>
                <li><a href="{base}/">LinkedIn</a></li>
                <li><a href="{base}/">Instagram</a></li>
                <li><a href="{base}/">Facebook</a></li>
                <li><a href="{base}/">TikTok</a></li>
                <li><a href="{base}/">YouTube</a></li>
                <li><a href="{base}/">Discord</a></li>
                <li><a href="{base}/">Telegram</a></li>
                <li><a href="{base}/">Matrix</a></li>
                <li><a href="{base}/">Mastodon</a></li>
            </ul>
        </div>
        <div class="project">
            <h2>Projects</h2>
            <ul>
                <li><a href="{base}/">Proxy Manager</a></li>
                <li><a href="{base}/">Traffic Broker</a></li>
                <li><a href="{base}/">Knowledge Collector</a></li>
                <li><a href="{base}/">Creator Cartel</a></li>
                <li><a href="{base}/">Trading AI</a></li>
                <li><a href="{base}/">Lichtmatrosen</a></li>
                <li><a href="{base}/">Peach & Lime</a></li>
            </ul>
        </div>
    </div>
</footer>

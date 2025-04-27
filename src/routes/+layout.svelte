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
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Digital Virtues GmbH" />
    <link rel="manifest" href="/site.webmanifest" />

    <meta
        name="description"
        content="Digital Virtues GmbH is a leading investment, consulting, and project management firm specializing in innovative digital solutions and strategic business growth."
    />
    <title>Digital Virtues GmbH</title>
</svelte:head>

<header>
    <nav class="container">
        <a href="{base}/" class="brand">
            <img class="logo-text" src={LogoText} alt="Digital Virtues logo" />
        </a>
        <ul role="list">
            <li><a href="{base}/#mission">Mission</a></li>
            <li><a href="{base}/#mission">Vision</a></li>
            <li><a href="{base}/#team">Team</a></li>
            <li><a href="{base}/#references">References</a></li>
            <li><a href="{base}/#timeline">Timeline</a></li>
        </ul>
    </nav>
    <section class="hero">
        <div class="container">
            <img src={LogoDV} alt="Digital Virtues logo" class="logo-dv" />
        </div>
    </section>
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
                <!-- <li><a href="{base}/">Twitter / X</a></li> -->
                <li><a href="https://www.linkedin.com/company/digitalvirtues/">LinkedIn</a></li>
                <!-- <li><a href="{base}/">Instagram</a></li>
                <li><a href="{base}/">Facebook</a></li>
                <li><a href="{base}/">TikTok</a></li>
                <li><a href="{base}/">YouTube</a></li>
                <li><a href="{base}/">Discord</a></li>
                <li><a href="{base}/">Telegram</a></li>
                <li><a href="{base}/">Matrix</a></li>
                <li><a href="{base}/">Mastodon</a></li> -->
            </ul>
        </div>
        <div class="project">
            <h2>Projects</h2>
            <ul>
                <!-- <li><a href="{base}/">Proxy Manager</a></li>
                <li><a href="{base}/">Traffic Broker</a></li>
                <li><a href="{base}/">Knowledge Collector</a></li>
                <li><a href="{base}/">Creator Cartel</a></li>
                <li><a href="{base}/">Trading AI</a></li> -->
                <li>
                    <a href="{base}/anyblock-analytics/" target="_blank">Anyblock Analytics GmbH</a>
                </li>
                <li>
                    <a href="https://www.dielichtmatrosen.de/" target="_blank">Lichtmatrosen</a>
                </li>
                <li><a href="https://peachandlime.shop/" target="_blank">Peach & Lime</a></li>
            </ul>
        </div>
    </div>
</footer>

<style lang="scss">
    footer{
        .container{
            display: flex;
            justify-content: space-between;
            align-items: start;
            gap: 2rem;
            padding: 1rem 0;

            a{
                
                text-decoration: none;
            }

            a:hover{
                text-decoration: underline;
                color: aquamarine;
            }

            ul{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                list-style: none;

                li{
                    font-size: 14px;
                }
            }
        }
    }
</style>

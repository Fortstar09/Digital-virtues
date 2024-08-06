<script>
	// import { page } from '$app/stores';
	// $: console.log($page)
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />

	<meta name="description" content="Digital Virtues GmbH is a leading investment, consulting, and project management firm specializing in innovative digital solutions and strategic business growth." />
	<title>Digital Virtues GmbH</title>
</svelte:head>

<header>
	<div>Digital Virtues GmbH</div>
</header>

<main>
	<slot />
</main>

<footer>
	Copyright &#169; {new Date().getFullYear()}
	<a href="https://digitalvirtues.com">Digital Virtues</a>.
	<a href="/privacy-policy/">Privacy Policy</a>
	<a href="/legal-notice/">Legal Notice</a>
</footer>

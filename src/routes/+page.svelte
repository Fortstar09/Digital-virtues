<script>
	import { base } from '$app/paths';
	export let data;
</script>

<section id="about">
	<p>
		Digital Virtues GmbH is on a thrilling mission to revolutionize the world, harnessing
		cutting-edge technology to create a brighter, smarter, and more connected future for all.
	</p>
</section>

<section id="topics">
	<h2>Topics - Tag-Cloud?</h2>
	<ul>
		<li>DV investiert in Menschen und Ideen</li>
		<li>DV baut und betreibt Software</li>
		<li>
			DV berät einzelne Personen und Unternehmen
			<ul>
				<li>Bspw. Mentoring</li>
				<li>IT- Prozessberatung</li>
			</ul>
		</li>
	</ul>
</section>

<section id="pillars">
	<h2>Pillars</h2>
	<div class="pillar pillar-invest">
		Venture Capital / Business Angel Aktivitäten
		<ul>
			<li>
				Wir investieren in starke Gründerteams mit besonderen Fähigkeiten und Knowhow, fähig
				sich ändernden Situationen anzupassen
			</li>
			<li>
				Das Startup hat einen einzigartigen Blickwinkel auf seinen Markt oder gar einen sehr
				guten Marktzugang
			</li>
			<li>
				Wir engagieren uns gerne auch hands-on, oft intensive Beratung 1-2x im Monat, nicht
				nur reporting, sehr individuell
			</li>
		</ul>
	</div>
	<div class="pillar pillar-consult">Beratung Projekt, Persönlich & Software</div>
	<div class="pillar pillar-project">
		Projects
		<ul>
			<li>(Media Services)</li>
			<li>(Lichtmatrosen)</li>
			<li>(Peach & Lime)</li>
			<li>Software / SaaS</li>
			<li>Proxy</li>
			<li>Knowledge Extension</li>
			<li><a href="{base}/anyblock-analytics/">Anyblock Analytics GmbH</a></li>
		</ul>
	</div>
</section>

<section id="team">
	<h2>Team</h2>
	<div class="person">
		Peter Eulberg
		<enhanced:img src="/static/img/kitten.jpg?grayscale" alt="A kitten" class="kitten" />
	</div>
	<div class="person">
		Sascha Göbel
		<enhanced:img src="/static/img/kitten.jpg?grayscale" alt="A kitten" class="kitten" />
	</div>
</section>

<section id="testimonials">
	<h2>Testimonials</h2>
	{#each data.testimonials as testimonial}
		<div class="testimonial" id="testimonial-{testimonial.slug}">
			<svelte:component this={testimonial.default} />
		</div>
	{/each}
</section>

<section id="news">
	<h2>News / Timeline</h2>
	{#each data.news as news}
		<div class="news-item" id="news-item-{news.slug}">
			<svelte:component this={news.default} />
		</div>
	{/each}
</section>

<section id="contact">
    <h2>Contact</h2>
</section>

<style>
	.kitten {
		width: 250px;
		height: auto;
	}
</style>

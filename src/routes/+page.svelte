<script lang="ts">
    import Person from '$lib/components/Person.svelte';

    import { base } from '$app/paths';
    let { data } = $props();
</script>

<section id="mission">
    <div class="container">
        <h2>
            <blockquote>
                We build, operate and invest in digital revenue models with an emphasis on crypto
                and big data.
            </blockquote>
        </h2>
    </div>
</section>

<section id="vision">
    <div class="container">
        <h2>Mission</h2>
        <ul>
            <li>We invest in people and ideas</li>
            <li>We build and operate software</li>
            <li>We maintain long term personal relationships</li>
            <li></li>
            <li>Digital Virtues represents our passion.</li>
        </ul>

        <h2>Pillars</h2>
        <div class="pillars">
            <div class="pillar pillar-invest">
                <h3>Venture Capital / Business Angel Activities</h3>
                <ul>
                    <li>
                        We invest in strong founder teams with exceptional know how and skills that
                        are able to adapt to changing challenges
                    </li>
                    <li>
                        Our investments have superb access or at least a unique angle into their
                        markets
                    </li>
                    <li>
                        We love to engange on a personal level and very hands-on. Depending on the
                        individual preferences and needs of the founders we often have 1-2 calls a
                        month and at least one yearly workshop. We are providing real value i.e.
                        increasing efficiency and effectiveness significantly as well as adding raw
                        productivity output if needed.
                    </li>
                </ul>
            </div>
            <div class="pillar pillar-consult">
                <h3>Consulting</h3>
                <p>
                    Our consulting activities are very diverse reflecting our personal expertise and
                    experiences. They are mainly centered around personal, business and strategic
                    development. Lately we cover mostly entrepreneural topics like scoping, sales
                    and HR as well as specific questions in crypto, software or infrastructre
                    projects.
                </p>
                Following a few examples:
                <ul>
                    <li>Mentoring of students and (future) founders</li>
                    <li>
                        Supporting entrepreneurs and startup teams on a monthly basis regarding
                        prioritization, growth, HR and a wide range of other questions and needs as
                        they arise.
                    </li>
                    <li>IT- process design and advisory</li>
                    <li>
                        Information technology consulting, i.e. make or buy, decision support
                        regarding software and implementation options, design and implementation of
                        architecture and infrastructure, ...
                    </li>
                    <li>
                        As certified project managers we support our customers and partners in any
                        aspect of project and portfolio management.
                    </li>
                </ul>
            </div>
            <div class="pillar pillar-project">
                <h3>Projects, Activities & Interests</h3>
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
        </div>
    </div>
</section>

<section id="values">
    <div class="container">
        <h2>Values</h2>
        <ul>
            <li>Digitale Transformation</li>
            <li>Digitale Erneuerbarkeit</li>
            <li>Digitale Innovation</li>
        </ul>
    </div>
</section>

<section id="team">
    <div class="container">
        <h2>Team</h2>
        <Person
            firstName="Peter"
            lastName="Eulberg"
            description="Successful blockchain startup founder with executive leadership experience, specializing in organizational development, portfolio management, and expertise spanning entrepreneurship, web3, technology, and business process analysis."
            role="CEO"
            company="Digital Virtues GmbH"
            companyUrl="https://digitalvirtues.com/"
            img="peter-eulberg.jpg"
            homepage="https://eulberg.info/"
            linkedin="https://www.linkedin.com/in/eulberg/"
        />
        <Person
            firstName="Sascha"
            lastName="Göbel"
            description="Data Wrangler, AI Whisperer, Code Monkey, Investor, Serial Entrepreneur, Helpdesk, Meme Connoisseur. I do stuff with computers."
            role="CTO"
            company="Digital Virtues GmbH"
            companyUrl="https://digitalvirtues.com/"
            img="sascha-goebel.jpg"
            homepage="https://www.saschagoebel.com/"
            linkedin="https://www.linkedin.com/in/saschagoebel/"
        />
    </div>
</section>

<section id="references">
    <div class="container">
        <h2>Testimonials</h2>
        {#each data.testimonials as testimonial}
            <testimonial.default id="testimonial-{testimonial.slug}" />
        {/each}
    </div>
</section>

<section id="timeline">
    <div class="container">
        <h2>News / Timeline</h2>
        {#each data.news as news}
            <div class="timeline-year">
                <h3>{news[0]}</h3>
                {#each news[1] as item}
                    <item.default id="news-item-{item.slug}" />
                {/each}
            </div>
        {/each}
    </div>
</section>

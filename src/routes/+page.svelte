<script lang="ts">
    import Person from '$lib/components/Person.svelte';

    import { base } from '$app/paths';
    let { data } = $props();
</script>

<div class="main-content">
    <section id="mission">
        <div class="container">
            <h2>
                <blockquote>
                    We build, operate and invest in digital revenue models with an emphasis on
                    crypto and big data.<br />
                    We invest in people and ideas, build and operate software, and maintain long-term
                    personal relationships that reflect our passion for digital innovation.
                </blockquote>
            </h2>
        </div>
    </section>

    <section id="vision">
        <div class="container">
            <h2>Vision</h2>
            <p>
                To be a driving force in digital transformation by empowering exceptional
                entrepreneurs, creating sustainable digital value, and fostering an ecosystem of
                innovation through meaningful relationships and hands-on engagement.
            </p>
        </div>
    </section>

    <section id="values">
        <div class="container">
            <h2>Values</h2>
            <dl>
                <dt>Digital Transformation</dt>
                <dd>
                    We embrace and drive the evolution of digital technologies and business models.
                </dd>
                <dt>Digital Sustainability ("Digitale Erneuerbarkeit")</dt>
                <dd>We create and support digital solutions that are sustainable and renewable.</dd>
                <dt>Digital Innovation</dt>
                <dd>We constantly seek and develop new digital approaches and solutions.</dd>
                <dt>Personal Engagement</dt>
                <dd>
                    We build genuine, long-term relationships and engage on a personal level with
                    founders and partners.
                </dd>
                <dt>Hands-on Value Creation</dt>
                <dd>
                    We provide real value by actively contributing our expertise and resources,
                    increasing efficiency and effectiveness for our partners.
                </dd>
                <dt>Adaptability</dt>
                <dd>
                    We value teams and individuals who can adapt to changing challenges in the
                    digital landscape.
                </dd>
                <dt>Knowledge Sharing</dt>
                <dd>
                    We share our expertise through consulting, mentoring, and strategic support for
                    entrepreneurs and startup teams.
                </dd>
            </dl>
        </div>
    </section>

    <section id="pillars">
        <div class="container">
            <h2>Pillars of Operation</h2>
            <div class="pillars">
                <div class="pillar pillar-invest">
                    <h3>Venture Capital / Business Angel Activities</h3>
                    <ul>
                        <li>
                            We invest in strong founder teams with exceptional know how and skills
                            that are able to adapt to changing challenges
                        </li>
                        <li>
                            Our investments have superb access or at least a unique angle into their
                            markets
                        </li>
                        <li>
                            We love to engange on a personal level and very hands-on. Depending on
                            the individual preferences and needs of the founders we often have 1-2
                            calls a month and at least one yearly workshop. We are providing real
                            value i.e. increasing efficiency and effectiveness significantly as well
                            as adding raw productivity output if needed.
                        </li>
                    </ul>
                </div>
                <div class="pillar pillar-consult">
                    <h3>Consulting</h3>
                    <p>
                        Our consulting activities are very diverse reflecting our personal expertise
                        and experiences. They are mainly centered around personal, business and
                        strategic development. Lately we cover mostly entrepreneural topics like
                        scoping, sales and HR as well as specific questions in crypto, software or
                        infrastructre projects.
                    </p>
                    Following a few examples:
                    <ul>
                        <li>Mentoring of students and (future) founders</li>
                        <li>
                            Supporting entrepreneurs and startup teams on a monthly basis regarding
                            prioritization, growth, HR and a wide range of other questions and needs
                            as they arise.
                        </li>
                        <li>IT- process design and advisory</li>
                        <li>
                            Information technology consulting, i.e. make or buy, decision support
                            regarding software and implementation options, design and implementation
                            of architecture and infrastructure, ...
                        </li>
                        <li>
                            As certified project managers we support our customers and partners in
                            any aspect of project and portfolio management.
                        </li>
                    </ul>
                </div>
                <div class="pillar pillar-projects">
                    <h3>Projects, Activities & Interests</h3>
                    <ul>
                        <li>
                            <a href="{base}/anyblock-analytics/"
                                >Anyblock Analytics GmbH (Crypto Analytics)</a
                            >
                        </li>
                        <li>Digital Virtues Media Services</li>
                        <li>
                            <a href="https://www.dielichtmatrosen.de/"
                                >Die Lichtmatrosen (Photography)</a
                            >
                        </li>
                        <li>
                            <a href="https://peachandlime.shop/"
                                >Peach & Lime (Business- & IT-Consulting)</a
                            >
                        </li>
                        <li>
                            <a href="https://www.deine-zweisamkeit.de/"
                                >Deine Zweisamkeit (Business-, AI- & IT-Consulting)</a
                            >
                        </li>
                        <li>
                            <a href="https://finomet.de/">Finomet (Business- & IT-Consulting)</a>
                        </li>
                        <li>More to come, watch this space</li>
                        <!-- <li>Oli</li> -->
                        <!-- <li>Blockchain Founders</li> -->
                        <!-- <li>Valid</li> -->
                        <!-- <li>Creator Cartel</li> -->
                        <!-- <li>Curator</li> -->
                        <!-- <li>Knowledge Extension</li> -->
                        <!-- <li>Proxy Manager</li> -->
                    </ul>
                </div>
            </div>
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
            <div class="testimonials">
                {#each data.testimonials as testimonial}
                    <testimonial.default id="testimonial-{testimonial.slug}" />
                {/each}
            </div>
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
</div>

<style lang="scss">
    /* Sections */
    section {
        vertical-align: middle;
        padding: 2rem 0;

        color: var(--color-white);

        :global(a) {
            color: var(--color-cyan);
        }

        &#vision,
        &#values,
        &#pillars,
        &#team,
        &#references,
        &#timeline {
            h2 {
                font-weight: 900;
                text-align: center;
                font-size: 4em;
                margin-bottom: 0.5em;
            }
        }
    }

    /* Mission Section */
    section#mission {
        h2 {
            font-size: 1.75rem;
            font-weight: 900;
        }

        blockquote {
            position: relative;
            padding: 1em 0.5em;
            text-wrap: pretty;
        }

        blockquote::before {
            content: url('$lib/assets/logo-d-blue-light.svg');
            min-width: 1.5em;
            min-height: 1.5em;
            position: absolute;
            right: 0;
            top: 0;
        }

        blockquote::after {
            content: url('$lib/assets/logo-v-blue-light.svg');
            min-width: 1.25em;
            min-height: 1.25em;
            position: absolute;
            left: 0;
            bottom: 0;
        }

        @media (min-width: 768px) {
            h2 {
                font-size: 3rem;
            }

            blockquote {
                padding: 1em 3em;

                &::before {
                    right: 1.75em;
                }

                &::after {
                    left: 2em;
                }
            }
        }
    }

    section#vision {
        p {
            text-align: center;
            text-wrap: pretty;
        }
    }

    /* Values Section */
    section#values {
        dl {
            margin: auto;
            text-align: center;

            dt {
                font-weight: 700;
                font-size: 1.25em;
            }

            dd {
                padding-left: 1em;
                line-height: 1.5;
                margin-bottom: 1.5em;
                text-wrap: pretty;
            }
        }
    }

    /* Pillars Section */
    section#pillars {
        .pillars {
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: center;
            gap: 1em;

            .pillar {
                background-color: rgb(from var(--color-blue-dark) r g b / 0.5);
                border-radius: 1rem;

                flex: 1 1 95%;
                padding: 1em;

                @media (min-width: 1024px) {
                    flex: 1 1 30%;
                    padding: 2em;
                    border-radius: 2rem;
                }

                h3,
                ul,
                p {
                    text-wrap: pretty;
                }

                h3 {
                    margin-bottom: 1em;
                }

                ul li,
                p {
                    margin-bottom: 0.5em;
                }

                ul li {
                    margin-left: 0.75em;
                    padding-left: 0.25em;
                }
            }
        }

        ul {
            list-style-image: url('$lib/assets/logo-dv-white.svg');
        }
    }

    /* Team Section */
    section#team {
    }

    /* References Section */
    section#references {
    }

    /* Timeline Section */
    section#timeline {
        .timeline-year {
            text-align: left;

            overflow: auto;
            margin-right: 0px;
            margin-left: 1px;
            position: relative;
            margin-bottom: 2rem;

            padding: 1rem;

            background-color: rgb(from var(--color-cyan) r g b / 0.25);

            border-radius: 1rem;

            :global(h3) {
                font-size: 2.5rem;
                margin-bottom: 0.5rem;
            }

            :global(h4) {
                font-size: 1.25rem;
                color: var(--color-cyan);
                margin-bottom: 0.5rem;
            }

            @media (min-width: 1024px) {
                width: 50%;
                float: left;
                // border-radius: 2rem;
                margin-bottom: 0;

                &:nth-child(odd) {
                    float: right;
                    margin-left: 0;
                    margin-right: 1px;
                    text-align: right;
                }
            }
        }

        .container::after {
            content: '';
            clear: both;
            display: table;
        }
    }

    /* Background Animation */
    @property --a {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
    }

    @property --b {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
    }

    @property --c {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
    }

    @property --d {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
    }

    @property --e {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
    }

    @property --f {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
    }

    @property --g {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
    }

    @property --h {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
    }

    @property --i {
        syntax: '<angle>';
        inherits: false;
        initial-value: 20deg;
    }

    :global(main) {
        background-color: var(--color-blue-light);
    }

    :global(main > .main-content) {
        --a: 31%;
        --b: -11%;
        --c: -24%;
        --d: 29%;
        --e: 49%;
        --f: 102%;
        --g: 56%;
        --h: 112%;
        --i: 35deg;

        background-color: var(--color-blue-dark);

        background:
            radial-gradient(
                ellipse at var(--a) var(--b),
                rgb(from var(--color-cyan) r g b / 0.5),
                transparent 45%,
                transparent
            ),
            radial-gradient(
                ellipse at var(--c) var(--d),
                rgb(from var(--color-blue-dark) r g b / 0.75),
                transparent 75%,
                transparent
            ),
            radial-gradient(
                ellipse at var(--e) var(--f),
                rgb(from var(--color-blue-light) r g b / 0.75),
                transparent 55%,
                transparent
            ),
            radial-gradient(
                ellipse at var(--g) var(--h),
                rgb(from var(--color-white) r g b / 0.25),
                transparent 65%,
                transparent
            ),
            linear-gradient(var(--i), var(--color-blue-dark), var(--color-blue-light));

        animation:
            a 26s linear infinite alternate,
            b 24s linear infinite alternate,
            c 42s linear infinite alternate,
            d 23s linear infinite alternate,
            e 22s linear infinite alternate,
            f 44s linear infinite alternate,
            g 28s linear infinite alternate,
            h 39s linear infinite alternate,
            i 20s linear infinite alternate;
    }

    @keyframes a {
        from {
            --a: 31%;
        }
        25% {
            --a: 36%;
        }
        50% {
            --a: 22%;
        }
        75% {
            --a: 35%;
        }
        to {
            --a: 92%;
        }
    }

    @keyframes b {
        from {
            --b: -11%;
        }
        25% {
            --b: 107%;
        }
        50% {
            --b: 48%;
        }
        75% {
            --b: 122%;
        }
        to {
            --b: 5%;
        }
    }

    @keyframes c {
        from {
            --c: -24%;
        }
        25% {
            --c: 65%;
        }
        50% {
            --c: 17%;
        }
        75% {
            --c: 22%;
        }
        to {
            --c: 34%;
        }
    }

    @keyframes d {
        from {
            --d: 29%;
        }
        25% {
            --d: 52%;
        }
        50% {
            --d: -21%;
        }
        75% {
            --d: 92%;
        }
        to {
            --d: 61%;
        }
    }

    @keyframes e {
        from {
            --e: 49%;
        }
        25% {
            --e: -20%;
        }
        50% {
            --e: 38%;
        }
        75% {
            --e: -3%;
        }
        to {
            --e: 111%;
        }
    }

    @keyframes f {
        from {
            --f: 102%;
        }
        25% {
            --f: 30%;
        }
        50% {
            --f: 100%;
        }
        75% {
            --f: 111%;
        }
        to {
            --f: 72%;
        }
    }

    @keyframes g {
        from {
            --g: 56%;
        }
        25% {
            --g: 98%;
        }
        50% {
            --g: 105%;
        }
        75% {
            --g: 76%;
        }
        to {
            --g: 14%;
        }
    }

    @keyframes h {
        from {
            --h: 112%;
        }
        25% {
            --h: 98%;
        }
        50% {
            --h: 32%;
        }
        75% {
            --h: -25%;
        }
        to {
            --h: 64%;
        }
    }

    @keyframes i {
        from {
            --i: 35deg;
        }
        25% {
            --i: 211deg;
        }
        50% {
            --i: 151deg;
        }
        75% {
            --i: 62deg;
        }
        to {
            --i: 186deg;
        }
    }
</style>

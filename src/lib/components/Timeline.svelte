<script lang="ts">
</script>

<div class="timeline-container">
    <div class="timeline-box first">
        <span class="ball">
        </span>
        <div class="timeline-item">
            <h2>2012</h2>
            <h3>2012-08-06</h3>
            <p>
                Digital Virtues GbR is excited to announce the launch of gartenhuehner.de, a
                dedicated platform for private chicken keeping enthusiats. This special interest
                website offers expert advice, practical tips, and a vibrant community for those
                passionate about sustainable living and backyard farming.
            </p>
        </div>
    </div>
    <div class="timeline-box even second">
        <span class="ball">
        </span>
        <div class="timeline-item">
            <h2>2019</h2>
            <h3>2019-08-06</h3>
            <p>
                Digital Virtues GbR is excited to announce the launch of gartenhuehner.de, a
                dedicated platform for private chicken keeping enthusiats. This special interest
                website offers expert advice, practical tips, and a vibrant community for those
                passionate about sustainable living and backyard farming.
            </p>
        </div>
    </div>
    <div class="timeline-box third">

        <span class="ball">
        </span>
        <div class="timeline-item">
            <h2>2024</h2>
            <h3>2024-08-06</h3>
            <p>
                Digital Virtues GbR is excited to announce the launch of gartenhuehner.de, a
                dedicated platform for private chicken keeping enthusiats. This special interest
                website offers expert advice, practical tips, and a vibrant community for those
                passionate about sustainable living and backyard farming.
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    .timeline-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 1000px;
        // gap: 2rem;

        .first, .third {
            border-bottom: 0px;
            border-top: 2px;
            border-left: 0;
            border-right: 2px;
            border-color: aquamarine;
            border-style: solid;
            span{
                right: -22px;
                top: -4%;
            }
        }

        .second {
            border-bottom: 0px;
            border-top: 2px;
            border-left: 2px;
            border-right: 0px;
            border-color: aquamarine;
            border-style: solid;
            margin-right: 1px;
            span{
                left: -22px;
                top: -4%;
            }
        }

        

        .timeline-box {
            // width: 400px;
            max-width: 500px;
            height: 500px;
            position: relative;

            &.even {
                align-self: flex-end;
                padding-left: 30px;
            }

            span{
                width: 40px;
                height: 40px;
                border-radius: 100%;
                position: absolute;
                background-color: aquamarine;
                border: 8px solid #000627;
            }

            /* Target specifically the second box */

            .timeline-item {
                display: flex;
                flex-direction: column;
                gap: 20px;
                padding: 25px 30px;

                h2 {
                    font-size: 48px;
                }
                h3 {
                    font-size: 32px;
                    color: aquamarine;
                }
            }
        }
    }
</style>

<script>
    export let year = 2021;
    export let month = 7;
</script>
<div>
    <p class="month">{month}</p>
    <p class="year">{year}</p>
</div>

<style>
    :global(:root) {
        --strip-size: calc(80vw/7);
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2.5vh;
        position: relative;
    }

    p {
        margin: 0;
        color: #000;
        font-weight: 600;
    }

    .month {
        font-size: calc(var(--strip-size) * 2);
        translate: 0 5vw;
        transform: rotate(20deg);
        font-weight: 600;
        font-style: italic;
    }

    .year {
        letter-spacing: .5rem;
        font-size: 2vw;
    }
</style>

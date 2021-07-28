<script>
    export let year = 2021;
    export let month = 7;
</script>
<div>
    <p class="month">{month}</p>
    <p class="year">{year}</p>
</div>

<style>
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
        font-size: calc(70vw/7*2.1);
        translate: -1.5vw 4vw;
        transform: rotate(20deg);
        font-weight: 600;
        font-style: italic;
    }

    .year {
        letter-spacing: .5rem;
        font-size: 2vw;
    }
</style>

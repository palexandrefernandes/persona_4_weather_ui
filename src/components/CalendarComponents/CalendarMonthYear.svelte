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
    }

    p {
        margin: 0;
        color: #000;
        font-weight: 600;
    }

    .month {
        font-size: calc(70vw/7*2);
        translate: -1vw 4vw;
        transform: rotate(15deg);
        font-weight: 600;
        font-style: italic;
    }

    .year {
        letter-spacing: .5rem;
        font-size: 2vw;
    }
</style>

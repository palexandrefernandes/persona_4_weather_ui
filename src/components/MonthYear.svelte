<script>

</script>
<div>
    <p class="month">4</p>
    <p class="year">2012</p>
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
        translate: 0 5vw;
        transform: rotate(15deg);
        font-weight: 600;
        font-style: italic;
    }

    .year {
        letter-spacing: .5rem;
        font-size: 2vw;
    }
</style>
<script>
    import { fly } from 'svelte/transition';
    import { onMount, afterUpdate } from 'svelte';
    export let year = 2021;
    export let month = 7;
    let isMonthVisible = false;

    $: isMonthVisible = month && false;

    const showMonth = () => {
        isMonthVisible = true;
    };

    afterUpdate(showMonth);
    onMount(showMonth);
</script>
<div>
    {#if isMonthVisible}
        <div in:fly="{{delay: 250, duration: 1000, x: 200}}">
            <p class="month" class:two-digit={month > 9}>{month}</p>
        </div>
    {/if}
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
        font-size: calc(var(--strip-size) * 1.5);
        translate: -1.5vh 4vw;
        transform: rotate(20deg);
        font-weight: 600;
        font-style: italic;
    }

    .two-digit {
        translate: -1.5vh 3vw !important;
    }

    .year {
        letter-spacing: .5rem;
        font-size: 2vw;
    }
</style>

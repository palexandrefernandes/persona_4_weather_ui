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
        <div 
            in:fly="{{delay: 250, duration: 1000, x: 200}}"
            class="{month < 10 ? "month-container" : "month-two-digit-container"}"
        >
            <p class="month">{month}</p>
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
        justify-items: center;
        margin-bottom: 2.5vh;
    }

    p {
        margin: 0;
        color: #000;
        font-weight: 600;
    }

    .month-container {
        font-size: calc(var(--strip-size) * 2);
        transform: translate(1.2vh, 7vw);
    }

    .month-two-digit-container {
        font-size: calc(var(--strip-size) * 2);
        transform: translate(1.2vh, 5vw);
    }

    .month {
        transform: rotate(30deg);
        font-weight: 600;
    }

    .year {
        letter-spacing: .5rem;
        font-size: 2vw;
    }
</style>

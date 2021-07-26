<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import CalendarDay from './CalendarDay.svelte';
    import CalendarMonthYear from './CalendarMonthYear.svelte';
    export let selected = false;
    export let date = new Date();

    let interval;

    const verifyDayPassage = () => {

    };

    onMount(() => {
        interval = setInterval(verifyDayPassage, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="weather-strip" out:fade>
    <CalendarDay
        day={date.getDate()}
        dayOfTheWeek={date.getDay()}
    />
    {#if selected}
        <CalendarMonthYear
            month={date.getMonth() + 1}
            year={date.getFullYear()}
        />
    {/if}
</div>

<style>
    .weather-strip {
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: calc(100%/7);
        min-width: calc(100%/7);
        background: transparent;
        padding-top: 10vh;
        box-sizing: border-box;
        overflow: hidden;
    }
</style>
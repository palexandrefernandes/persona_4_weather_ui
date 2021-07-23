<script>
    import WeatherItem from './WeatherItem.svelte';
    import MonthYear from './MonthYear.svelte';
    export let selected;
</script>

<div class="weather-strip" class:weather-strip-selected={selected}>
    <WeatherItem />
    {#if selected}
        <MonthYear />
    {/if}
</div>

<style>
    .weather-strip {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: calc(100%/7);
        background: transparent;
        padding-top: 10vh;
        box-sizing: border-box;
    }

    .weather-strip-selected {
        background: linear-gradient(180deg, rgba(253, 242, 0, 1) 0%, rgba(255, 192, 0, 1) 60%, rgba(255, 192, 0, 1) 100%);
    }

</style>
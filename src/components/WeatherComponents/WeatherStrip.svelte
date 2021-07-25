<script>
    import { convertWeekDayToString } from '../../utils/dates';
    import WeatherItem from './WeatherItem.svelte';
    import MonthYear from './MonthYear.svelte';
    export let selected = false;
    export let date = new Date();
</script>

<div class="weather-strip" class:weather-strip-selected={selected}>
    <WeatherItem
        day={date.getDate()}
        dayOfTheWeek={convertWeekDayToString(date.getDay())}
    />
    {#if selected}
        <MonthYear
            month={date.getMonth() + 1}
            year={date.getFullYear()}
        />
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
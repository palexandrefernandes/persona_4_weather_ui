<script>
    import WeatherStrip from './WeatherComponents/WeatherStrip.svelte';
    import { createDateList } from '../utils/dates';
    const SELECTED_INDEX = 1;
    const dates = createDateList(1, 5);
</script>

<div id="container">
    {#each dates as date, i}
        <WeatherStrip selected={i == SELECTED_INDEX} date={date} />
    {/each}
</div>

<style>
    #container {
		overflow-y: hidden;
		height: 100vh;
		background: #000000;
		display: flex;
		flex-direction: row;
		padding: 0 10vw;
	}
</style>
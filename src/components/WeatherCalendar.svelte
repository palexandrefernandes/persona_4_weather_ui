<script>
    import CalendarStrip from './CalendarComponents/CalendarStrip.svelte';
    import { createDateList } from '../utils/dates';
    const SELECTED_INDEX = 1;
    const DAYS_BEFORE_TODAY = 1;
    const DAYS_AFTER_TODAY = 5;

    const dates = createDateList(DAYS_BEFORE_TODAY, DAYS_AFTER_TODAY);
</script>

<div id="container">
    {#each dates as date, i}
        <CalendarStrip selected={i == SELECTED_INDEX} date={date} />
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
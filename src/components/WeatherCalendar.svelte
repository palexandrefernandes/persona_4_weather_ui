<script>
    import CalendarStrip from './CalendarComponents/CalendarStrip.svelte';
    import { createDateList } from '../utils/dates';
    const SELECTED_INDEX = 1;
    const DAYS_BEFORE_TODAY = 1;
    const DAYS_AFTER_TODAY = 6;

    let dates = createDateList(DAYS_BEFORE_TODAY, DAYS_AFTER_TODAY);

    window.addEventListener('keydown', () => {
        const newDates = dates.slice(1);
        newDates.push(new Date(newDates[newDates.length - 1].getTime() + 3600 * 24));
        dates = [...newDates];
        console.log(dates.length);
    })
</script>

<div id="container">
    <div class="calendar-items">
        {#each dates as date, i}
            <CalendarStrip selected={i == SELECTED_INDEX} date={date} />
        {/each}
    </div>
    
</div>

<style>
    #container {
		height: 100vh;
		display: flex;
		flex-direction: row;
        box-sizing: border-box;
		padding: 0 10vw;
	}

    .calendar-items { 
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow: hidden;
    }
</style>
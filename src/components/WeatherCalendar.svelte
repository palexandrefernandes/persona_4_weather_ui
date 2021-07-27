<script>
    import CalendarDay from './CalendarComponents/CalendarDay.svelte';
    import { createDateList } from '../utils/dates';
    import CalendarStrip from './CalendarComponents/CalendarStrip.svelte';
    const SELECTED_INDEX = 1;
    const DAYS_BEFORE_TODAY = 1;
    const DAYS_AFTER_TODAY = 6;

    let dates = createDateList(DAYS_BEFORE_TODAY, DAYS_AFTER_TODAY);

    window.addEventListener('keydown', () => {
        const newDates = dates.slice(1);
        newDates.push(new Date(newDates[newDates.length - 1].getTime() + 3600 * 24 * 1000));
        dates = [...newDates];
        console.log(dates.length);
    })
</script>

<div id="container">
    <div class="calendar-items">
        {#each dates as date, i}
        <CalendarDay
            day={date.getDate()}
            dayOfTheWeek={date.getDay()}
        />
        {/each}
    </div>
    <CalendarStrip month={dates[SELECTED_INDEX].getMonth() + 1} year={dates[SELECTED_INDEX].getFullYear()}/>
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
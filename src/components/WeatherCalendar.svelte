<script>
    import { onDestroy } from 'svelte';
    import CalendarDay from './CalendarComponents/CalendarDay.svelte';
    import { createDateList } from '../utils/dates';
    import CalendarStrip from './CalendarComponents/CalendarStrip.svelte';

    const DAYS_BEFORE_TODAY = 1;
    const DAYS_AFTER_TODAY = 6;

    let selectedItem = 1;
    let canTransition = true;
    let dates = createDateList(DAYS_BEFORE_TODAY, DAYS_AFTER_TODAY);

    const hanleEventTransition = event => {
        if (canTransition) {
            const transitionAmount = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' && selectedItem > 1 ? -1 : 0;
            // Do nothing if we are trying to transition to yesterday.
            if (transitionAmount === 0)
                return;
            
            selectedItem += transitionAmount;
            dates = [...dates, new Date(dates[dates.length - 1].getTime() + 3600 * 24 * 1000)];
            canTransition = false;
            setTimeout(() => { canTransition = true; }, 600);
        }
    };

    window.addEventListener('keyup', hanleEventTransition);

    onDestroy(() => {
        window.removeEventListener('keyup', hanleEventTransition);
    });
</script>

<div id="container">
    <div class="calendar-items" style="--selectedItem: {selectedItem}">
        {#each dates as date, i}
            <CalendarDay
                day={date.getDate()}
                dayOfTheWeek={date.getDay()}
                selected={i === selectedItem}
            />
        {/each}
    </div>
    <CalendarStrip month={dates[selectedItem].getMonth() + 1} year={dates[selectedItem].getFullYear()}/>
</div>

<style>
    #container {
		height: 100vh;
        overflow: hidden;
		display: flex;
		flex-direction: row;
		margin: 0 10vw;
	}

    .calendar-items { 
        z-index: 1;
        display: flex;
        flex-direction: row;
        transition: translate .5s linear;
        translate: calc(-80vw / 7 * (var(--selectedItem) - 1)) 0;
    }
</style>
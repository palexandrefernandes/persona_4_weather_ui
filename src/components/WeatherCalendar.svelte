<script>
    import { onDestroy } from 'svelte';
    import CalendarStrip from './CalendarComponents/CalendarStrip.svelte';
    import CalendarDay from './CalendarComponents/CalendarDay.svelte';
    import { createDateList, skipDaysFromDate } from '../utils/dates';

    const DAYS_BEFORE_TODAY = 1;
    const DAYS_AFTER_TODAY = 6;

    let selectedIndex = 1;
    let todayIndex = 1;
    let canTransition = true;
    let dates = createDateList(DAYS_BEFORE_TODAY, DAYS_AFTER_TODAY);

    const addDayToDateListTail = () => {
        dates = [
            ...dates,
            skipDaysFromDate(dates[dates.length - 1], 1)
        ]
    }

    const hanleEventTransition = event => {
        if (canTransition) {
            const transitionAmount = event.key === 'ArrowRight' ?
                1 : event.key === 'ArrowLeft' && selectedIndex > 1 ? -1 : 0;
            // Do nothing if we are trying to transition to yesterday.
            if (transitionAmount === 0)
                return;
            
            addDayToDateListTail();
            selectedIndex += transitionAmount;
            canTransition = false;
            setTimeout(() => { canTransition = true; }, 600);
        }
    };

    const dateSkipVerification = () => {
        const currentTime = new Date();
        if (
            dates[todayIndex].getDate() !== currentTime.getDate() &&
            todayIndex === selectedIndex
        ) {
            todayIndex += 1;
            selectedIndex = todayIndex;
            addDayToDateListTail();
        }
    };

    const dayPassedEvent = setInterval(dateSkipVerification, 1000);
    window.addEventListener('keyup', hanleEventTransition);

    onDestroy(() => {
        clearInterval(dayPassedEvent);
        window.removeEventListener('keyup', hanleEventTransition);
    });
</script>

<div id="container">
    <div class="calendar-items" style="--selectedItem: {selectedIndex}">
        {#each dates as date, i}
            <CalendarDay
                day={date.getDate()}
                dayOfTheWeek={date.getDay()}
                selected={i === selectedIndex}
            />
        {/each}
    </div>
    <CalendarStrip
        month={dates[selectedIndex].getMonth() + 1}
        year={dates[selectedIndex].getFullYear()}
    />
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
        translate: calc(-1 * var(--strip-size) * (var(--selectedItem) - 1)) 0;
    }
</style>
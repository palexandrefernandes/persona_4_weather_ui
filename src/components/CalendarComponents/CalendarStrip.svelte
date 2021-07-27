<script>
    import CalendarMonthYear from "./CalendarMonthYear.svelte";
    export let month;
    export let year;
</script>

<div id="strip">
    <CalendarMonthYear month={month} year={year} />
</div>

<style>
    #strip {
        position: absolute;
        overflow: hidden;
        display: flex;
        flex-direction: column-reverse;
        z-index: 0;
        left: calc(80vw / 7 + 10vw);
        height: 100%;
        width: calc(80vw/7);
        padding-top: 10vh;
        box-sizing: border-box;
        background: linear-gradient(180deg, rgba(253, 242, 0, 1) 0%, rgba(255, 192, 0, 1) 60%, rgba(255, 192, 0, 1) 100%);
    }
</style>
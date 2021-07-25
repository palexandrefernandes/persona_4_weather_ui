<script>
    export let dayOfTheWeek = 'MON';
    export let day = '1';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Federo&display=swap" rel="stylesheet"> 
</svelte:head>

<div class="icon-container">
    <p class="icon-day-week">{dayOfTheWeek}</p>
    <p class="icon-day">{day}</p>
    <div class="weather-icon">
    </div>
</div>

<style>
    .sunday {
        color: #836066 !important;
    }

    .saturday {
        color: #4f616f !important;
    }

    .icon-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }

    .icon-container > p {
        margin: 0;
        color: rgb(45, 45, 45, 0.95);
        width: 100%;
        text-align: center;
    }

    .icon-day-week {
        height: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5vw;
        font-weight: 500;
    }

    .icon-day {
        font-family: 'Federo', sans-serif;
        letter-spacing: 1rem;
        height: 4.2vw;
        font-size: 4vw;
        font-style: italic;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .weather-icon {
        background-color: rgb(45, 45, 45, 0.95);
        aspect-ratio: 1 / 1;
        width: 65%;
        border-radius: 10px;
    }
</style>
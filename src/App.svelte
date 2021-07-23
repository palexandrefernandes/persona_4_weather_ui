<script>
import Spotlight from './components/Spotlight.svelte';

	import WeatherStrip from './components/WeatherStrip.svelte';
</script>
<svelte:body class="main"/>
<div id="container">
	<Spotlight />
	<WeatherStrip />
	<WeatherStrip selected />
	<WeatherStrip />
	<WeatherStrip />
	<WeatherStrip />
	<WeatherStrip />
	<WeatherStrip />
</div>

<style>
	:global(body) {
        margin: 0;
        padding: 0;
    }

	#container {
		overflow-y: hidden;
		height: 100vh;
		background: #000000;
		display: flex;
		flex-direction: row;
		padding: 0 10vw;
	}
</style>
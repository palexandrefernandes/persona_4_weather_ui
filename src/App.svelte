<script>
	import Spotlight from './components/Spotlight.svelte';
	import Strip from './components/Strip.svelte';
	import WeatherCalendar from './components/WeatherCalendar.svelte';
</script>

<div id="container">
	<Strip />
	<WeatherCalendar />
</div>

<style>
	#container { background: #000000; }
</style>
<script>
	import Hero from '../components/Hero.svelte';
	import Raven from '../components/Raven.svelte';
</script>

<main>
	<div class="hero">
		<Hero />
	</div>

	<div class="content">
		<div class="checkered" id="background" />
		<div id="foreground">
			<h1>Tallest Legacy</h1>
			<Raven />
		</div>
	</div>
</main>

<style>
	main {
		display: grid;
	}
	.content {
		position: relative;

		border-top-left-radius: 3rem;
	}
	#background {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: -1;
	}
	#foreground {
		background-color: black;
		color: white;
		border-top-left-radius: 3rem;
		padding-top: 0.01rem;
		height: 100%;
	}
	.hero {
		background-color: black;
	}
	h1 {
		font-size: 10vw;
		text-align: center;
		font-family: monospace;
	}
</style>

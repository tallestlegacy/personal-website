<script>
	import { fly } from 'svelte/transition';
</script>

<main>
	<div class="hero">
		<h1>Hi, I'm Marvin</h1>
		<h3>I love to code</h3>
	</div>
</main>

<style>
	h1 {
		font-family: 'Baskerville Italic';
		font-weight: 200;
	}
	h3 {
		font-family: 'Baskerville Bold';
	}
	main {
		display: grid;
		height: 100vh;
		place-items: center;
		background-color: silver;
	}
</style>

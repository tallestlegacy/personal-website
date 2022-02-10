<script>
	import '../app.scss';
	import '../fonts.scss';
	import Nav from '$lib/components/Nav.svelte';

	let nav = true;
</script>

<div class="wrapper">
	{#if nav}
		<Nav />
	{/if}
	<slot />
</div>

<style>
	.wrapper {
		position: relative;
		z-index: 0;
	}
</style>

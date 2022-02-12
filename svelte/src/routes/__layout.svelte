<script>
	import '../app.scss';
	import '../fonts.scss';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let nav = true;
</script>

<div class="wrapper">
	{#if nav}
		<Nav />
	{/if}
	<slot />
</div>
<Footer />

<style>
	.wrapper {
		position: relative;
		z-index: 0;
	}
</style>

<script>
	import '../app.scss';
	import '../fonts.scss';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="body-wrapper">
	<div class="wrapper">
		<Nav />
		<slot />
	</div>
	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		z-index: 0;
	}

	.body-wrapper {
		min-height: 100vh;
		display: grid;
		grid-template-rows: 1fr auto;
	}
</style>

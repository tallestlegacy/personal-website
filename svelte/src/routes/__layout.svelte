<script>
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import '$lib/styles/global.css';
	import '$lib/styles/fonts.css';

	$: heroIsOpen = $page.url.pathname === '/' ? true : false;
</script>

<main class={heroIsOpen ? '' : 'compact'}>
	<div class="slot">
		<slot />
	</div>
</main>

<style>
	main {
		display: grid;
		padding: 0;
		margin: 0;
		transition: ease 1s;
	}
	.hero {
		transition: all ease 0.4s;
	}
	nav {
		position: sticky;
		top: 0;
		background-color: white;
		margin: 0;
		padding: 0;
	}
</style>

<script>
	export let href;
	export let text;
	import { page } from '$app/stores';

	$: selected = $page.url.pathname === href;
</script>

<a {href} class={selected ? 'selected' : ''}>
	{text}
</a>

<style lang="scss">
	a {
		text-decoration: none;
		color: black;
		font-family: SerifBold, serif;
		font-size: 1.2rem;
	}

	a.selected {
		color: $primary;
	}
</style>

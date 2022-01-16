<script>
	import { page } from '$app/stores';
	export let url;
	const isActive = (link) => {
		return url === link ? 'active' : 'inactive';
	};
</script>

<a href={url} class={isActive($page.url.pathname)}>
	<slot />
</a>

<style>
	a {
		text-decoration: none;
		font-family: 'Playfair Regular';
	}
	a.active {
		color: black;
		font-family: 'PlayFair Black';
	}
</style>

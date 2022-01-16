<script>
	import NavLink from '$lib/components/NavLink.svelte';
</script>

<main>
	<NavLink url="/">Home</NavLink>
	<NavLink url="/skills">Skills</NavLink>
	<NavLink url="/projects">Projects</NavLink>
</main>

<style>
	main {
		background-color: white;
		padding: 0.5rem;
		display: flex;
		justify-content: space-between;
	}
</style>

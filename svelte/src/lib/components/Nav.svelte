<script>
	import NavLink from '$lib/components/NavLink.svelte';
</script>

<nav>
	<ul>
		<li><NavLink href="/" text="Portfolio" /></li>
		<!--li><a href="/">Blog</a></li-->
		<!--li><a href="/">CV</a></li-->
		<li><NavLink href="/projects" text="Projects" /></li>
	</ul>
</nav>

<style lang="scss">
	nav {
		@extend .basic-style;
		//position: sticky;
		top: 0;
		display: flex;
		position: sticky;
		background-color: #fffb;
		display: flex;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: #0002 1px solid;
		box-shadow: 0 1px 5px #0001;
		z-index: 3;

		ul {
			display: flex;
			flex: 1;
			gap: 1rem;
			padding: 0 1rem;

			:nth-child(2) {
				margin-left: auto;
			}
		}

		li {
			list-style: none;
		}
	}
</style>

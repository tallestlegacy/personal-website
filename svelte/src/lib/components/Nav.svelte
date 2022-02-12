<nav>
	<ul>
		<li><a href="/">Portfolio</a></li>
		<li><a href="/">Blog</a></li>
		<li><a href="/">CV</a></li>
		<li><a href="/">Projects</a></li>
		<!--li><a href="/">Skills</a></li-->
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
		border-bottom: #0002 1px solid;
		box-shadow: 0 1px 5px #0001;
		z-index: 3;

		ul {
			display: flex;
			flex: 1;
			gap: 1rem;
			padding: 0 1rem;

			:nth-child(3) {
				margin-left: auto;
			}
		}

		li {
			list-style: none;
		}

		a {
			text-decoration: none;
			color: black;
			font-family: Serif, serif;
			font-size: 1.2rem;
		}
	}
</style>

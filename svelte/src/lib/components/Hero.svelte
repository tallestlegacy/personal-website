<script>
	import logo from './tl logo.svg';
</script>

<div class="checkered">
	<div class="logo-container">
		<img id="logo" src={logo} alt="" srcset="" />
	</div>
</div>

<style>
	img {
		background: transparent;
	}
	.logo-container {
		display: grid;
		place-items: center;
		border: 2px solid white;
		width: max-content;
		padding: 5vw;
		border-bottom-right-radius: 3rem;
	}

	.checkered {
		display: grid;
		place-items: center;
		aspect-ratio: 2;
		border-bottom-right-radius: 3rem;
	}

	#logo {
		filter: drop-shadow(0 5px 0 black);
		height: 30vw;
		justify-self: center;
		transition: ease 0.3s;
	}
	#logo:hover {
		filter: drop-shadow(0 10px 0 black);
		transform: translateY(-4px);
	}
</style>

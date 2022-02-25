<script>
	export let src;
	export let title = 'Web';
</script>

<div class="window">
	<div class="window-border">
		<div class="title">
			<a href={src}>
				{title}
			</a>
		</div>
		<div class="circle red" />
		<div class="circle orange" />
		<div class="circle green" />
	</div>
	<div class="iframe">
		<iframe {src} frameborder="0" {title} />
	</div>
</div>

<style style="scss">
	.window {
		width: 100%;
		display: grid;
		border-radius: 1rem;
	}

	.window-border {
		border-radius: 1rem 1rem 0 0;
		padding: 0.5rem 1rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		background-color: #171717;
		color: white;
	}

	.title {
		margin: 0 auto;
	}

	.circle {
		background-color: white;
		border-radius: 50%;
		height: 0.75rem;
		aspect-ratio: 1;
	}

	.red {
		background-color: #ff6056;
	}
	.orange {
		background-color: #ffbd44;
	}
	.green {
		background-color: #00ca4e;
	}

	.iframe {
		margin: 0;
		padding: 0;
		width: 100%;
	}
	a {
		color: white;
	}
	iframe {
		min-height: 80vh;
		width: 100%;
		height: 100%;
		resize: both;
		border: none;
		box-shadow: 0 10px 24px -5px #0009;
		border-radius: 0 0 1rem 1rem;
	}
</style>

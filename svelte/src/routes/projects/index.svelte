<script>
	import IFrame from '$lib/components/IFrame.svelte';
</script>

<main>
	<div class="wrapper">
		<div class="intro">
			<h1>Projects</h1>
			<p>Heres a few examples of things I've been working on over the past couple months</p>
		</div>
		<div class="projects">
			<div class="project">
				<div class="text">
					<h2>Fooder Inc</h2>
					<p class="description">
						This was a dummy project to illustrate responsive, mobile-first web design.
						<br />
						I did this all in 4 hours.
					</p>
				</div>
				<div class="frame">
					<IFrame title="fooderinc.vercel.app" src="https://fooderinc.vercel.app" />
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		max-width: 1000px;
		margin: 0 auto;
		display: grid;
		gap: 4rem;
	}
	.wrapper {
		padding: 1rem;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
	.project {
		display: flex;
		flex-wrap: wrap;
	}
	.project .text {
		flex: 1;
	}
	.project .frame {
		flex: 2;
		min-width: 600px;
	}

	@media screen and (max-width: 500px) {
		.project .frame {
			min-width: 100%;
		}
	}
</style>

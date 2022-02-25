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
						The goal of this site was to illustrate the power of typography and good image design.
					</p>
					<p>
						One of the key takeaways here was that picture just make websites look good, no cap.
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
	}
	.wrapper {
		padding: 1rem;
		display: grid;
		gap: 4rem;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
	.project {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
	.project .text {
		flex: 1;
		text-align: justify;
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

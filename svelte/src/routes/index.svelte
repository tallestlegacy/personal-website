<script>
	import Hero from '$lib/components/Hero.svelte';
	import SkillsGrid from '$lib/components/SkillsGrid.svelte';
</script>

<Hero />

<section class="intro description">
	<div class="text">
		I’m <span class="primary-text"> Marvin </span>
		, a Computer Science student in Kenya that loves Web and Mobile Software Development, FOSS & ice-cream.
	</div>
</section>
<section>
	<SkillsGrid />
</section>

<section class="more description">
	<div class="wrapper">
		<div class="text">
			I try to balance between learning every other programming language and JavaScript Framework
			whilst keeping my skills up to date with the one's I'm used to.
		</div>
		<div class="text">
			I love to experiment with new and inventive ways to solve problems and visualise data
			effectively
		</div>
	</div>
</section>

<style lang="scss">
	section {
		height: 100vh;
		display: grid;
		place-items: center;
	}

	.description {
		display: grid;
		.wrapper {
			display: flex;
			flex-direction: column;
			height: fit-content;
			gap: 1rem;
			margin: auto;
		}
		.text {
			margin: auto;
			max-width: 45ch;
			font-family: SerifRegular;
			text-align: center;
			line-height: 2rem;
			font-size: 1.2rem;
		}
	}
	.primary {
		color: crimson;
	}
</style>

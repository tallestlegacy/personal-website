<script>
	import Hero from '$lib/components/Hero.svelte';
	import SkillsGrid from '$lib/components/SkillsGrid.svelte';
</script>

<Hero />

<section class="intro description">
	<div class="text">
		I’m <span class="primary-text"> Marvin </span>
		, a Kenyan Computer Scientist that loves Web and Mobile Software Development, FOSS & ice-cream.
	</div>
</section>
<section>
	<SkillsGrid />
</section>

<section class="more description">
	<div class="wrapper">
		<div class="text">
			I'm quick to pick up new skills and do my best to improve on what I already know
		</div>
		<div class="text">
			I think of myself as very helpful and adaptable person, ready to learn by adopting new
			strategies to improve the existing skill set
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 100vh;
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

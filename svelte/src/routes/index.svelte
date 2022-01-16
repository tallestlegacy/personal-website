<script>
	import Hero from '$lib/components/Hero.svelte';
	import NavCard from '$lib/components/NavCard.svelte';
	import codingImage from '$lib/images/glasses.jpeg';
	import ideasImage from '$lib/images/ideas.jpeg';
</script>

<div class="hero">
	<Hero />
</div>
<div class="content">
	<div class="intro">
		<p>
			I'm a Computer Science Student that codes in his free time
			<br />
			I like anime, Open Source software and Ice Cream
		</p>
	</div>
	<hr />
	<NavCard url="/skills" image={codingImage} title="Programming Skills">
		<p>
			I try to balance between learning every other Programming Language or JavaScript Framework.
		</p>
		<p>
			I'm appreciate new and emerging technologies and how the focus on making our lives a lot
			easier, and are open to learning new things on the job.
		</p>
	</NavCard>
	<NavCard url="/projects" image={ideasImage} title="Projects" reverse={true}>
		<p>I've worked on a couple of projects in my lifetime</p>
	</NavCard>
</div>

<style>
	.content {
		padding: 1rem;
		max-width: 900px;
		display: grid;
		gap: 10vh;
		justify-content: center;
	}
	.hero {
		margin-bottom: 5rem;
	}
	@media (max-width: 800px) {
	}

	@media (min-width: 800px) {
		.intro {
			text-align: center;
		}
	}
</style>

<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<main>
	<div class="name">
		<h1>Marvin Mokua Junior</h1>
	</div>
	<div class="blockquote">
		<blockquote>
			{#if loaded}
				<div class="quote" in:fly={{ x: 500, duration: 1000 }}>
					“Some people can read War and Peace and come away thinking it's a simple adventure story.
					<br />
					Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe”
				</div>
				<div class="author" in:fly={{ x: 500, duration: 1000, delay: 400 }}>Lex Luthor</div>
			{/if}
		</blockquote>
	</div>
</main>

<style>
	main {
		background-color: silver;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 1rem;
		position: relative;
	}
	h1 {
		align-self: center;
		font-family: 'Playfair Black Italic';
		font-size: 3rem;
		color: black;
	}

	blockquote {
		text-align: right;
		display: grid;
		gap: 0.5rem;
	}
	.quote {
		font-family: 'Playfair Italic';
	}
	.author {
		color: var(--primary);
		font-family: 'Playfair Black', sans-serif;
	}

	.blockquote {
		height: 10rem;
		margin-top: 1rem;
		margin-left: 1rem;
		margin-bottom: -5rem;
		z-index: 2;
		transition: ease 0.5s;
		background-color: white;
		box-shadow: 0 3px 12px #0005;

		position: sticky;
		bottom: 0;
	}
	.name,
	.blockquote {
		display: grid;
		justify-content: center;
		padding: 0.5rem;
	}

	/* Curve */
</style>

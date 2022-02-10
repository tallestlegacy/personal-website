<div class="hero">
	<div class="quote">
		<blockquote>
			Some people can read War and Peace and come away thinking it's a simple adventure story.
			Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the
			universe
		</blockquote>
		<p class="author">Lex Luthor</p>
	</div>
</div>

<style lang="scss">
	.hero {
		height: calc(100vh - 5rem);
		background-image: url('$lib/images/hero.jpg');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		background-repeat: no-repeat;

		padding: 1rem;
		display: grid;
		place-items: center;
		position: relative;

		.quote {
			color: #171717;
			background-color: #fff9;
			backdrop-filter: blur(20px);
			padding: 1rem;
			border-radius: 4px;
			max-width: 100ch;
			width: fit-content;
			margin: 0 auto;

			blockquote {
				@extend .basic-style;
				padding: 1rem;
				border-left: 4px solid crimson;
				font-family: SansSerif;
			}
			p {
				font-family: SerifBold, sans-serif;
				color: crimson;
			}
		}
	}
</style>

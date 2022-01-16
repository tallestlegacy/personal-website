<script>
	export let image;
	export let title;
	export let url;
	export let reverse = false;

	let y;
</script>

<main class={reverse ? 'reverse' : ''}>
	<div class="image">
		<img src={image} alt="" />
	</div>
	<div class="text">
		<a href={url}>
			<span class="title">{title}</span>
		</a>
		<slot />
	</div>
</main>

<style>
	main {
		min-height: 10rem;
		max-height: 40vh;
		display: flex;
		gap: 1rem;
	}
	.reverse {
		text-align: right;
		flex-direction: row-reverse;
	}
	.image {
		width: 40%;
		overflow: hidden;
	}
	.text {
		width: 60%;
	}
	img {
		background-color: red;
		height: 100%;
		width: 100%;
		object-fit: cover;
		filter: saturate(0);
		transition: ease 0.5s;
	}
	img:hover {
		filter: saturate(1);
		transform: scale(1.05);
	}
	.title {
		font-size: 2rem;
		text-decoration: underline;
	}
</style>

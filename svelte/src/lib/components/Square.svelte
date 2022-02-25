<script>
	export let image = '';
	export let width = 300;
	export let height = width;
</script>

<div
	class="wrapper"
	style={`
		background-image: url(${image});
		width=${width}rem; 
		height=${height}rem`}
/>

<style lang="scss">
	.wrapper {
		aspect-ratio: 1;
		width: 6rem;
		background-color: white;
		background-size: cover;
		border-radius: 20%;
		box-shadow: 0 0 12px #0003;
	}
</style>

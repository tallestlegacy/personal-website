<script>
	import Hexagon from '$lib/components/Hexagon.svelte';
	import Square from '$lib/components/Square.svelte';
	import jslogo from '$lib/icons/js.png';
	import tslogo from '$lib/icons/ts.png';
	import vuejslogo from '$lib/icons/vue.png';
	import reactjslogo from '$lib/icons/react.png';
	import nodejslogo from '$lib/icons/node.png';
	import gologo from '$lib/icons/gojpg.jpg';
	import javalogo from '$lib/icons/java-logo.png';
	import sveltelogo from '$lib/icons/svelte.png';
	import mysqllogo from '$lib/icons/mysql-logo.jpg';
	import mongologo from '$lib/icons/mongo.png';
	import pythonlogo from '$lib/icons/python.png';
	import scsslogo from '$lib/icons/scss.png';
	import mdlogo from '$lib/icons/md.png';
	import linuxlogo from '$lib/icons/linux.png';
	import figmalogo from '$lib/icons/figma.png';

	let width = 300;
	let height = width;
</script>

<div class="grid">
	<Square {width} {height} image={gologo} />
	<br />
	<Square {width} {height} image={scsslogo} />
	<Square {width} {height} image={mdlogo} />
	<Square {width} {height} image={figmalogo} />
	<br />
	<Square {width} {height} image={jslogo} />
	<Square {width} {height} image={tslogo} />
	<Square {width} {height} image={sveltelogo} />
	<Square {width} {height} image={vuejslogo} />
	<Square {width} {height} image={reactjslogo} />
	<Square {width} {height} image={nodejslogo} />
	<br />
	<Square {width} {height} image={javalogo} />
	<br />
	<Square {width} {height} image={mysqllogo} />
	<Square {width} {height} image={mongologo} />
	<br />
	<Square {width} {height} image={pythonlogo} />
	<Square {width} {height} image={linuxlogo} />
</div>

<style lang="scss">
	$tan30: 0.577350269;

	.grid {
		display: flex;
		width: 90%;
		gap: 1rem;
		margin: 0 auto;
		flex-wrap: wrap;
		justify-content: center;
		position: relative;
	}

	.grid::after {
		content: 'Skills';
		position: absolute;
		top: -20vh;
		height: 100%;
		font-size: 30vw;
		color: #0001;
		font-family: SerifItalic, serif;
		z-index: -1;
	}
</style>

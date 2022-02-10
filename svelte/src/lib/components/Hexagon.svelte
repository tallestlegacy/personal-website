<script>
	export let color = 'grey';
	export let backgroundImage;

	export let width = 327.846;
	export let height = 318.144;
</script>

<svg xmlns="http://www.w3.org/2000/svg" {height} {width} viewBox="0 0 327.846 318.144">
	<defs>
		<style>
			.a {
				fill: none;
				stroke-width: 25px;
				//stroke: rgba(255, 255, 255, 0.5);
			}
		</style>
		<clipPath id="image">
			<path
				transform="translate(111.598) rotate(30)"
				d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z"
			/>
		</clipPath>
	</defs>
	<image
		clip-path="url(#image)"
		height="100%"
		width="100%"
		href={backgroundImage}
		preserveAspectRatio="xMidYMin slice"
	/>
	<path
		class="a"
		d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z"
		transform="translate(111.598) rotate(30)"
	/>
</svg>

<style>
</style>

<script>
	import { onMount } from 'svelte';
	import moment from 'moment';
	let t = moment();
	let deadline = moment().date(4).month(7).year(2022);

	onMount(() => {
		setInterval(() => {
			t = moment();
		}, 1000);
	});

	function getDiff(t) {
		return deadline.diff(t, 'seconds');
	}
</script>

<h1>
	{Math.floor(getDiff(t) / (24 * 60 * 60)) + 'days'}
</h1>

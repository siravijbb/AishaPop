<script>
	import Navbar from './components/Navbar.svelte';
	import { onMount } from 'svelte';
	let AddLimit = 0;
	let ClientPop = 0;
	let ImageName = "/AishaPop/1.jpg";
	let OnClick = false;
function ClearLimit() {
		AddLimit = 0;
	}
	async function fetchData() {

		if(AddLimit >= 100) {
			alert('U spam too much');
			throw new Error('U spam too much');
		}
		else {
		const response = await fetch('/api/add',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ AishaPop:true, Authentication: 'trueButNotReally'})
			}
		);
		AddLimit += 1;
		const data = await response.json();
		if (data.error) {
			alert(data.error);
		} else {
			ClientPop = data.Totalpop;
		}}
	}

	if(OnClick) {
		ImageName = "/AishaPop/2.jpg";
	}
	else {
		ImageName = "/AishaPop/1.jpg";
	}

	function ImageChangePress() {

			ImageName = "/AishaPop/2.jpg";

	}
	function ImageChangeDePress() {

			ImageName = "/AishaPop/1.jpg";

	}
	onMount(() => {
		fetchData();
		let interval = setInterval(ClearLimit, 60000); // Poll every 5 seconds
		return () => {
			clearInterval(interval);
		};
	});
</script>

<head>

	<title>Document</title>
</head>

<body class="h-screen w-full bg-[#ecfee6] font-[itim]">
	<Navbar />
	<div class="w-full mx-auto ">

		<button on:click={fetchData} on:touchstart={fetchData}  on:mousedown ={ImageChangePress} on:mouseup ={ImageChangeDePress} on:touchstart|preventDefault ={ImageChangePress} on:touchend|preventDefault ={ImageChangeDePress}  class="mx-auto bg-emerald-600 w-fit flex flex-col items-center">
			<h1 class="mx-auto text-center text-4xl absolute bottom-10">Aisha Pop
				<p class="bottom-0">{ClientPop}</h1>

			<img src={ImageName} class="mx-auto max-h-[92vh] w-full   " alt="1" id="pic"/>
		</button>
	</div>

</body>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
</style>
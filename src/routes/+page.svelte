<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import { onMount } from 'svelte';
	let AddLimit = 0;
	let ClientPop = 0;
	let ImageName = "/AishaPop/1.jpg";
	let OnClick = false;
	let audio :any;


	function ClearLimit() {
		AddLimit = 0;
	}
	async function fetchData() {

		if(AddLimit >= 300) {
			alert('U spam too much,wait 1 min');
			throw new Error('U spam too much,wait 1 min');
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

	async function GetData() {
			const response = await fetch('/api/add',
				{
					method: 'PUT',
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


	if(OnClick) {
		ImageName = "/AishaPop/2.jpg";
	}
	else {
		ImageName = "/AishaPop/1.jpg";
	}

	function ImageChangePress() {
		audio.src = "/AishaPop/hey.mp3";
		audio.play();
			ImageName = "/AishaPop/2.jpg";

	}
	function ImageChangeDePress() {

			ImageName = "/AishaPop/1.jpg";

	}
	onMount(() => {
		GetData();
		audio = new Audio("/AishaPop/hey.mp3");
		let interval = setInterval(ClearLimit, 60000); // Poll every 5 seconds
		return () => {
			clearInterval(interval);
		};
	});
</script>

<head>

	<title>Aisha Pop - {ClientPop} Popped</title>
</head>

<body class="h-screen w-full bg-[#ecfee6] font-[itim]">
	<Navbar />
	<div class="w-full mx-auto ">

		<button on:click={fetchData} on:touchstart={fetchData} on:keyup={fetchData}  on:mousedown ={ImageChangePress} on:mouseup ={ImageChangeDePress} on:touchstart|preventDefault ={ImageChangePress} on:touchend|preventDefault ={ImageChangeDePress} on:keydown|preventDefault={ImageChangePress} on:keyup|preventDefault={ImageChangeDePress} class="mx-auto bg-[#ecfee6] h-screen w-full flex flex-col items-center">
			<h1 class="mx-auto text-center text-4xl absolute bottom-6">Aisha Pop
				<p class="bottom-0">{ClientPop}
			<small class="block text-sm">limit 300 ครั้งต่อนาที</small>
					<small class="block text-sm">ถ้าไม่ขึ้นลองrefreshดูนะครับ</small></h1>

			<img src={ImageName} class="mx-auto max-h-[92vh] w-auto   " alt="1" id="pic"/>
		</button>
	</div>

</body>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
</style>
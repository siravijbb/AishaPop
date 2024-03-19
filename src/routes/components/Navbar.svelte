<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Input,
		Modal
	} from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	let homeModal = false;
	let aboutModal = false;
	let contactModal = false;
</script>

<Navbar class="bg-gradient-to-b from-[#77de85] to-[#7ae387]">
	<NavBrand href="/" data-sveltekit-preload-code class="block">
		<span class="block self-center text-xl font-semibold text-white">Aisha Pop</span>
		<span class="block self-center text-center text-xl font-semibold text-white"
			> #PLGeveryday #Guppart</span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm" class="invisible text-slate-100 md:visible " href="https://discord.gg/ZHh5zYUxq9"
			>ดิสคอร์ดไอช่า</Button
		>
		<NavHamburger />
	</div>
	<NavUl class="order-1 ">
		<NavLi href="https://twitter.com/hashtag/PLGeveryday?src=hashtag_click" active={true}><p class="dark:text-white">Hastag #PLGeveryday</p></NavLi>
		<NavLi href="https://twitter.com/hashtag/Guppart?src=hashtag_click" active={true}><p class="dark:text-white">Hastag #Guppart</p></NavLi>
		<NavLi href="/credit" class="cursor-pointer hover:underline"
			><p class="dark:text-white">Credit</p></NavLi
		>
	</NavUl>
</Navbar>

<Modal title="คำเตือน" bind:open={homeModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			คุณกำลังเปลี่ยนหน้าไปยังหน้าหลักpolygang (https://polygang.fan)
		</h3>
		<Button color="red" class="mr-2" href="https://polygang.fan">ออกจากหน้านี้</Button>
		<Button color="alternative">ยังคงอยู่หน้านี้</Button>
	</div>
</Modal>
<Modal title="คำเตือน" bind:open={aboutModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			คุณกำลังเปลี่ยนหน้าไปยังข้อมูลpolygang (https://polygang.fan/about)
		</h3>
		<Button color="red" class="mr-2" href="https://polygang.fan/about">ออกจากหน้านี้</Button>
		<Button color="alternative">ยังคงอยู่หน้านี้</Button>
	</div>
</Modal>
<Modal title="คำเตือน" bind:open={contactModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			คุณกำลังเปลี่ยนหน้าไปยังtwitter.com (https://twitter.com/SierraB_Siravij)
		</h3>
		<Button color="red" class="mr-2" href="https://twitter.com/SierraB_Siravij"
			>ออกจากหน้านี้</Button
		>
		<Button color="alternative">ยังคงอยู่หน้านี้</Button>
	</div>
</Modal>

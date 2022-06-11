<script>
	import '../app.css';
	// import Socials from '$lib/components/Socials.svelte';
</script>

<a href="/">
	<div class="flex flex-col w-full min-h-min items-center justify-center bg-slate-700 py-2 sm:py-4">
		<h1 class="flex text-5xl text-slate-50">🏠 Car Queue 🚗</h1>
	</div>
</a>

<slot />
<!-- 
<div class="absolute bottom-0 right-0 p-3 flex flex-row gap-2">
	<Socials />
</div> -->

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap" rel="stylesheet">
</svelte:head>


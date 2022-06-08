<script>
	import '../app.css';
	// import Socials from '$lib/components/Socials.svelte';
</script>

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

<div class="absolute top-0 right-0 flex flex-row gap-2">
	<a href="/admin" class="text-xs sm:text-md bg-blue-600 text-white p-4 sm:p-6 rounded-lg">Admin Login</a>
</div>

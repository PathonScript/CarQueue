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

<div class="absolute top-0 right-0 p-2 flex flex-row gap-2">
	<!-- admin login button -->
	
	<a href="/admin" class="bg-blue-600 text-white p-4 rounded-lg">Admin Login</a>

</div>

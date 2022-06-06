<script>
	import '../app.css';
	import Socials from '$lib/components/Socials.svelte';
</script>

<slot />
<!-- 
<div class="absolute bottom-0 right-0 p-3 flex flex-row gap-2">
	<Socials />
</div> -->

<div class="absolute top-0 right-0 p-2 flex flex-row gap-2">
	<!-- admin login button -->
	
	<a href="/admin" class="bg-blue-600 text-white p-4 rounded-lg">Admin Login</a>

</div>

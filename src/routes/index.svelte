<script>
	import Queue from '$lib/components/Queue.svelte';

	import { collection, query, where, onSnapshot } from "firebase/firestore";
	import { auth, db } from '../firebase'

const q = collection(db, "queue")
let queues = new Array();
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
	queues = []
  querySnapshot.forEach((doc) => {
		queues.push(doc.data())
		console.log(queues)
  });
});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex flex-col w-full min-h-min items-center justify-center bg-slate-700 ">
	<h1 class="flex text-5xl text-slate-50">Car Queue</h1>
	<h1 class="flex text-sm text-slate-50">Work in Progress.</h1>
</div>

<div class="queue-grid">
	
	{#each queues as queue}
		<Queue name={queue.name} car={queue.car} status={queue.status} />
	{/each}

</div>

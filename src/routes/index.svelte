<script>
	import Queue from '$lib/components/Queue.svelte';

	import { collection, query, where, onSnapshot } from "firebase/firestore";
	import { db } from '../firebase'

const q = collection(db, "queue")
let queues = new Array();
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
	queues = []
  querySnapshot.forEach((doc) => {
		queues.push(doc.data())
  });
});
</script>

<a href="/admin">
	<div class="m-2 absolute top-0 right-0 flex flex-row gap-2 px-2">
		<button class="bg-blue-500 hover:bg-blue-400 rounded-xl hover:rounded-md text-white p-4 transition-all">Admin</button>
	</div>
</a>


<div class="grid grid-cols-3 md:grid-cols-5 sm:grid-cols-4">

	{#each queues as queue}
		<Queue name={queue.name} status={queue.status} />
	{/each}

</div>

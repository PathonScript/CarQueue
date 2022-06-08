<script>
// @ts-nocheck

  import { db } from '../../firebase';
  import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore';

  import Queue from './Queue.svelte';
  import Status from './Status.svelte';
  import Selector from './Selector.svelte';

  const queueRef = collection(db, "queue");
  let queues = [];
  let namee = JSON.parse('["Mulan","Peach","Oahm ","Amm","Pub","Yayo","Atom","Muna","Pat","Baikhao","Pai","Bouquet","PK","Prewa","Rak"]');


  const unsubscribe = onSnapshot(queueRef, (querySnapshot) => {
    queues = []
    querySnapshot.forEach((doc) => {
      queues.push({
        name: doc.data().name, 
        car: doc.data().car, 
        status: doc.data().status,
        id: doc.id
      });
    });
    console.log(queues)
  });
  
  const Clear = async(id) => {
    console.log("Cleared: " + id);
    await deleteDoc(doc(db, "queue", id));
  }

</script>

<Selector names={namee}/>



<!-- Students list -->
<div class="grid grid-cols-4 w-full">
  {#each queues as queue}
  <div class="m-2">
    <div class="flex flex-col w-full items-center justify-center min-h-min p-4 border-4 border-slate-600 rounded-lg">
        <h1 class="text-2xl sm:text-6xl">{queue.name}</h1> 
        <!-- <h1 class="text-xl sm:text-3xl">{queue.car}</h1>  -->
        <Status status={queue.status}/>
        <button class="text-red-500"on:click={Clear(queue.id)}>Clear</button>
      </div>
    </div>
  {/each}
</div>
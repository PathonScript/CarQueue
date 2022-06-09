<script>
// @ts-nocheck
  import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore';
  import Modal from 'svelte-simple-modal';
  import OpenModal from './OpenModal.svelte'

import { db } from '../../firebase';
  import Queue from './Queue.svelte';
  import Status from './Status.svelte';
  import Selector from './Selector.svelte';
  import grade8 from '../../G8.json'

  const queueRef = collection(db, "queue");
  let queues = [];
  let names = grade8


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

<div class="w-full h-auto grid grid-cols-5 text-center">
  <div class="bg-slate-600 rounded-lg min-h-min py-16 m-5">
    <Modal
      classWindowWrap="relative m-2 max-h-full"
      classWindow="relative w-full min-w-full max-h-full my-2 mx-auto text-orange-200 rounded shadow-md bg-indigo-900"
    ><OpenModal names={names}/></Modal>
  </div>
</div>
<hr />

<!-- Students list -->
<div class="grid grid-cols-2 sm:grid-cols-4 w-full">
  {#each queues as queue}
  <div class="m-2">
    <div class="flex flex-col items-center justify-center min-h-min p-4 border-4 border-slate-600 rounded-lg">
        <h1 class="text-2xl sm:text-6xl">{queue.name}</h1> 
        <!-- <h1 class="text-xl sm:text-3xl">{queue.car}</h1>  -->
        <Status status={queue.status}/>
        <button class="text-red-500"on:click={Clear(queue.id)}>Clear</button>
      </div>
    </div>
  {/each}
</div>
<script>
// @ts-nocheck

  import { db } from '../../firebase';
  import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore';

  import Queue from './Queue.svelte';

  const q = collection(db, "queue");
  let queues = [];
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
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

<div class="flex flex-col w-full h-auto items-center justify-center mt-40">
  <div class="flex">
    <form action="/admin" method="POST">
      <div class="flex flex-col items-center">
        <label for="name" class="text-lg">Name</label>
        <input type="text" name="name" id="name" class="border border-gray-400 p-2 w-full" />
      </div>
      <div class="flex flex-col items-center">
        <label for="car" class="text-lg">Car</label>
        <input type="text" name="car" id="car" class="border border-gray-400 p-2 w-full" />
      </div>
      <div class="flex flex-col items-center my-5">
        <button type="submit" class="bg-blue-600 text-white p-4 px-5 rounded-lg">Submit</button>
      </div>
    </form>
  </div>
</div>

<div class="grid grid-cols-4 w-full">
  {#each queues as queue}
  <div class="m-2">
    <div class="flex flex-col w-full items-center justify-center min-h-min p-4 border-4 border-gray rounded-lg">
        <h1 class="text-6xl">{queue.name}</h1> 
        <h1 class="text-3xl">{queue.car}</h1> 
        <h1 class="text-3xl">{queue.status}</h1> 
        <button on:click={Clear(queue.id)}>Clear</button>
      </div>
    </div>
  {/each}
</div>
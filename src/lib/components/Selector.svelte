<script>
  import { db } from '../../firebase';
  import { doc, setDoc} from 'firebase/firestore'
  export let names;

  const Update = async(name, status) => {
    // set doc with name with status arrived


    const queueRef = doc(db, "queue", (Math.random() * 1000000000).toString());
    const res = await setDoc(queueRef, {
      name: name,
      status: status
    })
    console.log(name, res)
  }

</script>

<div class="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 w-full">
  {#each names as name}
  <div class="flex flex-col p-2 bg-slate-500 rounded-lg m-3">
    <h1 class="text-4xl text-center">{name}</h1>
    <div class="flex flex-row justify-center px-5">
      <button class="flex-1 text-white bg-green-500 rounded-lg py-2 px-3 my-2" on:click={() => Update(name, "arrived")}>Arrived</button>
      <button class="flex-1 text-white bg-yellow-500 rounded-lg py-2 px-3 my-2" on:click={() => Update(name, "waiting")}>Waiting</button>
    </div>
  </div>
  {/each}
</div>
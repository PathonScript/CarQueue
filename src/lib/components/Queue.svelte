<script>
  export let name;
  export let status;

  import Status from './Status.svelte'
  import { fly } from "svelte/transition"
</script>

<div in:fly={{ x: 500, duration: 1000, delay: 0 }} out:fly={{ x: -500, duration: 500, delay: 0}} class="m-2">
  <div class="flex flex-col w-full items-center justify-center min-h-min p-4 border-4 border-gray rounded-lg">
    <h1 class="text-lg md:text-6xl sm:text-4xl">{name}</h1> 
    <Status status={status}/>
  </div>
</div>
<script>
  export let name;
  export let car;
  export let status;
</script>

<div class="m-2">
<div class="flex flex-col w-full items-center justify-center min-h-min p-4 border-4 border-gray rounded-lg">
    <h1 class="text-6xl">{name}</h1> 
    <h1 class="text-3xl">{car}</h1> 
    <h1 class="text-3xl">{status}</h1> 
  </div>
</div>
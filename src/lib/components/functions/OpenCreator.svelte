<script>
  import CreateClass from '../CreateClass.svelte';
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');
  export const showCreator = () => open(CreateClass);
</script>

<p><button class="border-4 border-white rounded-lg bg-green-600 text-white py-2 px-4 m-2 text-base sm:text-3xl hover:bg-white hover:text-green-600 hover:border-green-600" on:click={showCreator}>+ Create</button></p>
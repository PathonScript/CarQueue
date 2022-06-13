<script>
  import CreateClass from '../CreateClass.svelte';
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');
  export const showCreator = () => open(CreateClass);
</script>

<p><button class="text-green-600 text-base sm:text-3xl" on:click={showCreator}>Create</button></p>
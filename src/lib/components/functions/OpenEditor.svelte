<script>
  export let id;
  export let className;
  export let studentsName;

  import EditClass from '../EditClass.svelte';
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');
  export const showEditor = () => open(EditClass, { id: id, className, studentsName });
</script>

<p><button class="text-white text-base sm:text-3xl" on:click={showEditor}>Edit</button></p>

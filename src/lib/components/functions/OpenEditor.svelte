<script>
  export let id;
  export let className;
  export let studentsName;

  import EditClass from '../EditClass.svelte';
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');
  export const showEditor = () => open(EditClass, { id: id, className, studentsName });
</script>

<p><button class="border-4 border-slate-700 rounded-lg py-1 px-4 text-center text-slate-700 text-base sm:text-3xl hover:bg-slate-700 hover:text-white" on:click={showEditor}>Edit</button></p>

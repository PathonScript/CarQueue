<script>
  export let title;
  export let names;
  import { db } from '../../../firebase';

  import { deleteDoc, doc } from 'firebase/firestore'

  import Modal from 'svelte-simple-modal';
  import OpenEditor from './OpenEditor.svelte'
  import Selector from '../Selector.svelte'
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');
  export const showSelector = () => open(Selector, { names: names });


</script>

<div class="bg-slate-600 rounded-lg min-h-0 py-4 sm:py-16 m-5 cursor-pointer" on:click={showSelector}>
  <p><button class="text-white text-base sm:text-5xl" on:click={showSelector}>{title}</button></p>
</div>
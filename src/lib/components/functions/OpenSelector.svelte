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


  <p><button class="text-white text-base sm:text-5xl" on:click={showSelector}>{title}</button></p>
  
<script>
  export let title;
  export let names;

  import Selector from '../Selector.svelte'
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');
  export const showSurprise = () => open(Selector, { names: names });
</script>

<p><button class="text-white text-base sm:text-5xl" on:click={showSurprise}>{title}</button></p>
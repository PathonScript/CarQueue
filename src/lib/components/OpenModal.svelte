<script>
  export let names;

  import Selector from './Selector.svelte'
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');
  const showSurprise = () => open(Selector, { names: names });
</script>

<p><button class="text-white text-base sm:text-3xl" on:click={showSurprise}>Class Button</button></p>
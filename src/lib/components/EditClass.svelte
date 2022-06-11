<script>
  import { db } from '../../firebase';

  export let className;
  export let studentsName;
  let studentsLine = studentsName.join("\n")
</script>

<div class="flex flex-col w-full h-full items-center justify-center">
  <!-- Class Name -->
  <input type="text" bind:value={className}>
  <!-- Current Student \n each -->
  <textarea bind:value={studentsLine}/>
  <!-- Delete Class -->
</div>
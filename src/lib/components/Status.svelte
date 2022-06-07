<script>
  export let status;
</script>

{#if status === "arrived"}
<div class="text-3xl text-green-500">{status}</div>
{:else if  status === "waiting"}
<div class="text-3xl text-yellow-500">{status}</div>
{:else}
<div class="text-3xl text-slate-600">{status}</div>
{/if}

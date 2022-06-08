<script>
  import { auth, db } from '../firebase'
  import { onAuthStateChanged } from 'firebase/auth'
  import LoginForm from '$lib/components/LoginForm.svelte'
  import Admin from '$lib/components/Admin.svelte'

  let isUser;
 
  auth.onAuthStateChanged((user) => {
		if (user) {
			isUser = true;
		} else {
			isUser = false;
		}
	});

</script>
<div class="flex flex-col w-full min-h-min items-center justify-center bg-slate-700 py-4">
	<h1 class="flex text-5xl text-slate-50">Car Queue</h1>
</div>

{#if !isUser}
  <LoginForm />
{:else if isUser}
  <Admin />
{/if}

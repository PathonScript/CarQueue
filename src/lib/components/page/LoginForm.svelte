<script>
  import { auth }  from '../../../firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth'
  let email, password = "";

  function SignIn(e){ 
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
</script>

<div class="flex flex-row w-full h-screen items-center justify-center">
  <div class="flex w-3/4 h-3/4 items-center justify-center">
      <!-- email and password form -->
      <form action="/admin" method="POST">
        <div class="flex flex-col items-center">
          <label for="email" class="text-lg">Email</label>
          <input type="email" name="email" id="email" class="border border-gray-400 p-2 w-full" bind:value={email}/>
        </div>
        <div class="flex flex-col items-center">
          <label for="password" class="text-lg">Password</label>
          <input type="password" name="password" id="password" class="border border-gray-400 p-2 w-full" bind:value={password}/>
        </div>
        <div class="flex flex-col items-center my-5">
          <button type="submit" class="bg-blue-600 text-white p-4 px-5 rounded-lg" on:click={SignIn}>Login</button>
        </div>
      </form>
    </div>
  </div>
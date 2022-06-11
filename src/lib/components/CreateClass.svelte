<script>
  import { db } from '../../firebase';
  import { setDoc, collection } from 'firebase/firestore'


  // Create a Document in /students with each students name
  const studentsRef = collection(db, "students")
  let value = "Hi\nWorld!"
</script>

<div>
  <!-- Name of the Class -->
  <input type="text" class="text-3xl border-4 border-slate-700 rounded-lg"/>

  <!-- Students in the class with \n -->
  <textarea rows="10" class="border-4 border-slate-700 rounded-xl text-2xl" bind:value={value}></textarea>
</div>
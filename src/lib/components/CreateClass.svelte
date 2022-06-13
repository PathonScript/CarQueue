<script>
  import { db } from '../../firebase';
  import { addDoc, collection } from 'firebase/firestore'

  let className;
  let students;

  // Create a Document in /students with each students name
  const studentsRef = collection(db, "students")
  const AddClass = async() => {
    await addDoc(studentsRef, {
      name: className,
      students: students.split("\n")
    });
  }

</script>

<div class="flex flex-col w-full h-full items-center justify-center">
  <!-- Name of the Class -->
  <input type="text" class="text-3xl border-4 border-slate-700 rounded-lg text-center" placeholder="Class Name" bind:value={className}/>

  <!-- Students in the class with \n -->
  <textarea rows="10" class="border-4 border-slate-700 rounded-xl text-2xl p-2" placeholder="Students in the class separated by a newline" bind:value={students}></textarea>
  <button class="text-slate-700 border-2 rounded-lg border-slate-900 py-2 px-4" on:click={AddClass}>Create</button>
</div>
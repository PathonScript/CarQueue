<script>
  import { db } from '../../firebase';
  import { doc, setDoc } from 'firebase/firestore';
  
  export let id;
  export let className;
  export let studentsName;


  let studentsLine = studentsName.join("\n");

  const UpdateClass = async() => {
    console.log(id, studentsLine.split("\n"))
    await setDoc(doc(db, "students", id), {
      name: className,
      students: studentsLine.split("\n")
    }, {merge: true})
  }


</script>

<div class="flex flex-col w-full h-full items-center justify-center">
  <!-- Class Name -->
  <input class="text-2xl sm:text-5xl text-center" type="text" bind:value={className}>
  <!-- Current Student \n each -->
  <textarea class="text-lg p-2" bind:value={studentsLine} rows="25" cols="25"/>

  <button class="border-2 border-slate-700 px-4 py-2 rounded-2xl hover:rounded-lg hover:bg-slate-400 transition-all" on:click={UpdateClass}>Submit</button> 
  <!-- Delete Class -->
</div>
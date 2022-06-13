<script>
// @ts-nocheck

  import { onSnapshot, collection, doc, deleteDoc, setDoc} from 'firebase/firestore';
  import { listAll, ref, getDownloadURL, getBlob } from 'firebase/storage';

  import Modal from 'svelte-simple-modal';
  import { fly } from "svelte/transition"

  import OpenSelector from '../functions/OpenSelector.svelte'
  import OpenEditor from '../functions/OpenEditor.svelte'
  import OpenCreator from '../functions/OpenCreator.svelte'

  import { db } from '../../../firebase';
  import Status from '../Status.svelte';

  let grades = [];

  // Read JSON File
  // gs://carqueue-4879f.appspot.com
  // const fileRef = ref(storage, 'classes')

  

  const queueRef = collection(db, "queue");
  const studentsRef = collection(db, "students");
  let queues = [];

  const unsubscribe = onSnapshot(queueRef, (querySnapshot) => {
    queues = []
    querySnapshot.forEach((doc) => {
      queues.push({
        name: doc.data().name, 
        status: doc.data().status,
        id: doc.id
      });
    });
  });

  const unsubscribe2 = onSnapshot(studentsRef, (querySnapshot) => {
    grades = []
    querySnapshot.forEach((doc) => {
      grades.push({
        id: doc.id,
        name: doc.data().name, 
        students: doc.data().students
      });
    });
  });
  
  const Clear = async(id) => {
    await deleteDoc(doc(db, "queue", id));
  }

  const DeleteClass = async(id) => {
    await deleteDoc(doc(db, "students", id));
  }

  const Update = async(id, name, status) => {
    // set doc with name with status arrived
    const queueRef = doc(db, "queue", id);
    const res = await setDoc(queueRef, {
      name: name,
      status: status
    }, { merge: true })
  }
</script>

<Modal><OpenCreator /></Modal>

<div class="w-full h-auto grid grid-cols-5 text-center">
  {#each grades as grade}
  <div class="flex flex-col">
    <div class="bg-slate-600 rounded-lg min-h-0 py-4 sm:py-16 m-5">
       <Modal
         classWindowWrap="relative m-2 max-h-full"
         classWindow="relative w-full min-w-full max-h-full my-2 mx-auto text-orange-200 rounded shadow-md bg-indigo-900"
       >
        <OpenSelector title={grade.name} names={grade.students}/>
      </Modal>
      
    </div>
    <div class="flex flex-row justify-center">
      <div class="flex justify-center mx-1">
        <Modal
          classWindowWrap="relative m-2 max-h-full"
          classWindow="relative w-auto h-screen min-w-auto max-h-auto my-2 mx-auto text-orange-200 rounded shadow-md bg-indigo-900"
        >
          <OpenEditor id={grade.id} className={grade.name} studentsName={grade.students}/>
        </Modal>
      </div>
      <button class="flex justify-center border-4 border-red-600 rounded-lg py-1 px-2 mx-1 text-red-600 text-base sm:text-3xl hover:text-white hover:bg-red-600"on:click={() => DeleteClass(grade.id)}>Delete</button>
    </div>
  </div>
    {/each}
</div>

<hr />

<!-- Students list -->
<div class="grid grid-cols-2 sm:grid-cols-4 w-full">
  {#each queues as queue}
  <div class="m-2">
    <div in:fly={{ x: 500, duration: 1000, delay: 0 }} out:fly={{ x: -500, duration: 500, delay: 0}} class="flex flex-col items-center justify-center min-h-min p-4 border-4 border-slate-600 rounded-lg">
        <h1 class="text-2xl sm:text-6xl">{queue.name}</h1> 
        <!-- <h1 class="text-xl sm:text-3xl">{queue.car}</h1>  -->
        <Status status={queue.status}/>
        <button class="flex-1 text-white bg-yellow-500 rounded-lg py-2 px-3 my-2" on:click={() => Update(queue.id, queue.name, "waiting")}>Waiting</button>
        
        <button class="text-red-500"on:click={Clear(queue.id)}>Clear</button>
      </div>
    </div>
  {/each}
</div>

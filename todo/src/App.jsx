import {  useEffect,useState} from "react";
import Header from './components/Header';
import List from './components/List';
const LOCAL_STORAGE_KEY = 'todo:tasks';
function App() {
const [Lists , SetList] = useState([]);

function loadSavedTasks() {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(saved) {
    SetList(JSON.parse(saved));
  }
}

function setTasksAndSave(newTasks) {
  SetList(newTasks);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
}
useEffect(() => {
  loadSavedTasks();
}, [])

function addTask(TaskTitile) {

  setTasksAndSave([

     ...Lists,
  {
    id :crypto.randomUUID(),
    Title :TaskTitile,
    isCompleted : false,

  }
  ])
 
}
function DeleteTaskById(taskId) {
  const delTask =Lists.filter(task => task.id !== taskId );
  setTasksAndSave(delTask)
}


function togglecomplete(taskId) {
  const newtasks = Lists.map(List => {
    if (List.id === taskId) {
      return { ...List, isCompleted: !List.isCompleted }; // Correctly update the specific task
    }
    return List; // Return the task unchanged if the id doesn't match
  });

  setTasksAndSave(newtasks); // Update the state with the new tasks array
}

  return (
    <>
      <Header OnaddTask={addTask}/>
      <List  Lists ={Lists} oncomplete={togglecomplete} onDeelete={DeleteTaskById}/>
    </>
  )
}

export default App

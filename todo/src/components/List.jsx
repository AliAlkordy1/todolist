

import TasksC from './TasksC'; 


export default function List({Lists ,oncomplete ,onDeelete}) {
const taskQuantity= Lists.length
const completedTasks =Lists.filter(task => task.isCompleted).length
  return (
    <>
      <div className=" List-container ">
        <div className="Counter-container">
          <div>
            <span style={{ color: '#4EA8DE' }} >Created tasks</span>
            <span className="task-counter" >{taskQuantity}</span>
          </div>
          <div>
            <span style={{ color: '#8284FA' }} >Completed</span>
            <span className="task-counter" >{completedTasks} de {taskQuantity}</span>
          </div>
        </div>
        <div className="Task-list-container">
        {Lists.map(task => (
            <TasksC key={task.id} task={task} oncomplete={oncomplete} onDeelete={onDeelete}/>
          ))}



        </div>
      </div>
    </>
  );
}

import { Icon } from '@iconify-icon/react';

export default function TasksC({task,oncomplete,onDeelete}) {
    return <>
      <div className="task-container">
       

            { task.isCompleted ? (<Icon icon="simple-line-icons:check" width="17.5" height="17.5"  style={{color: "#1f6024", cursor: "pointer"  }} onClick={()=>oncomplete(task.id)}/>): <button onClick={()=>oncomplete(task.id)}>  </button> }
      
            <p   style={{
    textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.isCompleted ? '#808080' : '' }}>{task.Title}</p>
            <Icon icon="ph:trash" width="17" height="17"  style={{color: "#808080" , marginTop: "2px", cursor: "pointer"}} onClick={()=> onDeelete(task.id)} />

            </div>
    
    
    </>
}


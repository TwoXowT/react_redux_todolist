import './TaskList.scss';
import Task from "./Task";


const TaskList = ({taskList,makeDoneTask,removeTask}) =>{

    return(
        <div className='tasklist-container'>
            <div className='tasklist-heading'> Активные задачи</div>
                <div className='tasklist-place active'>
                    {taskList.filter(task => !task.completeStatus).map((task)=> (
                        <Task task={task}
                              removeTask={removeTask}
                              makeDoneTask={makeDoneTask}/>
                        ))}
                </div>

            <div className='tasklist-heading'> Завершенные задачи</div>
                <div className='tasklist-place done'>
                    {taskList.filter(task => task.completeStatus).map((task)=>{
                        return  <Task task={task} removeTask={removeTask} makeDoneTask={makeDoneTask}/>
                    })}
                </div>
        </div>
    )
}

export default TaskList;
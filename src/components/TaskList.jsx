import './TaskList.scss';
import Task from "./Task";


const TaskList = ({taskList}) =>{

    return(
        <div className='tasklist-container'>
            <div className='tasklist-heading'> Активные задачи</div>
                <div className='tasklist-place active'>
                    {taskList.filter(task => !task.completeStatus).map((task)=> (
                        <Task task={task}/>
                        ))}
                </div>

            <div className='tasklist-heading'> Завершенные задачи</div>
                <div className='tasklist-place done'>
                    {taskList.filter(task => task.completeStatus).map((task)=>{
                        return  <Task task={task} />
                    })}
                </div>
        </div>
    )
}

export default TaskList;
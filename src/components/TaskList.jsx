import {useSelector} from "react-redux";
import Task from "./Task";
import './TaskList.scss';


const TaskList = () =>{
    const taskList = useSelector(state => state)

    return(
        <div className='tasklist-container'>
            <div className='tasklist-heading'> Активные задачи</div>
                <div className='tasklist-place active'>
                    {taskList.todos.filter(task => !task.completeStatus).map((task)=> (
                        <Task task={task}/>
                        ))}
                </div>

            <div className='tasklist-heading'> Завершенные задачи</div>
                <div className='tasklist-place done'>
                    {taskList.todos.filter(task => task.completeStatus).map((task)=>{
                        return  <Task task={task} />
                    })}
                </div>
        </div>
    )
}

export default TaskList;
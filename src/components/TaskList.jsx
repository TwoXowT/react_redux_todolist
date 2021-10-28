import {useSelector} from "react-redux";
import Task from "./Task";
import './TaskList.scss';
import {useContext} from "react";
import Context from "react-redux/lib/components/Context";


const TaskList = () =>{
    const [context, setContext] = useContext(Context);
    const taskList = useSelector(state => state)
    console.log(taskList.todos)
    return(
        <div className='tasklist-container'>
            <div className='tasklist-heading'> Активные задачи</div>
                <div className='tasklist-place active'>
                    {taskList.todos.filter(task => !task.completeStatus && task.category === context).map((task)=> (
                        <Task task={task}/>
                        ))}
                </div>

            <div className='tasklist-heading'> Завершенные задачи</div>
                <div className='tasklist-place done'>
                    {taskList.todos.filter(task => task.completeStatus && task.category === context).map((task)=>{
                        return  <Task task={task} />
                    })}
                </div>
        </div>
    )
}

export default TaskList;

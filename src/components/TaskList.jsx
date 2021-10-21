import React, {useState} from 'react';
import './TaskList.scss';
import Task from "./Task";


const TaskList = () =>{
   const [taskList, setTaskList] = useState([
            {id:1, text:"Some text", completeStatus:true},
            {id:2, text:"Some text", completeStatus:true},
            {id:3, text:"Some text", completeStatus:true},
            {id:4, text:"Some text", completeStatus:false},
            {id:5, text:"Some text", completeStatus:false},
        ]);

    function removeTaskHandler(removeTask){
        const newTaskList = taskList.filter((task)=> task!== removeTask)
        setTaskList(newTaskList)
    }

    function makeDoneTask(doneTask){
        const taskLst = [...taskList]
        taskLst.filter((task)=>{
            if(task === doneTask){
                task.completeStatus = !task.completeStatus
            }
        })
        setTaskList(taskLst)
    }

    return(
        <div className='tasklist-container'>
            <div className='tasklist-heading'> Активные задачи</div>
                <div className='tasklist-place active'>
                    {taskList.filter(task => task.completeStatus === true).map((task)=>{
                        return <Task task={task}
                                     removeTask={removeTaskHandler}
                                     doneTask={makeDoneTask}/>
                    })}
                </div>
            <div className='tasklist-heading'> Завершенные задачи</div>
                <div className='tasklist-place done'>
                    {taskList.filter(task => task.completeStatus === false).map((task)=>{
                        return  <Task task={task} removeTask={removeTaskHandler}/>
                    })}
                </div>
        </div>
    )
}

export default TaskList;
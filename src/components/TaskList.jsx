import React, {useState} from 'react';
import './TaskList.scss';
import Task from "./Task";


const TaskList = (props) =>{
    const makeDoneTask = props.makeDoneTak;
    const removeTask = props.removeTask;

    return(
        <div className='tasklist-container'>
            <div className='tasklist-heading'> Активные задачи</div>
                <div className='tasklist-place active'>
                    {props.taskList.filter(task => task.completeStatus === false).map((task)=>{
                        return <Task task={task}
                                     removeTask={removeTask}
                                     doneTask={makeDoneTask}/>
                    })}
                </div>

            <div className='tasklist-heading'> Завершенные задачи</div>
                <div className='tasklist-place done'>
                    {props.taskList.filter(task => task.completeStatus === true).map((task)=>{
                        return  <Task task={task} removeTask={removeTask}/>
                    })}
                </div>
        </div>
    )
}

export default TaskList;
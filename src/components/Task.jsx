import React from 'react';
import './Task.scss';
import {AiOutlineCheck, CgTrashEmpty, MdOutlineNotes} from "react-icons/all";

const Task = ({task,removeTask,makeDoneTask}) =>{

    return(

        <div key={task.id} className='task-container'>
                <p>{task.text}</p>
            <div className='task-buttons-container'>
                <div onClick={() => makeDoneTask(task)} className='task-done-button'>
                    <AiOutlineCheck color={task.completeStatus?('#555b65'):('#49a29b')} fontSize='1.5em'/>
                </div>
                <div className='task-change-button'>
                    <MdOutlineNotes color={task.completeStatus?('#555b65'):('#ececec')} fontSize='1.5em'/>
                </div>
                <div onClick={() => removeTask(task)} className='task-cancel-button'>
                    <CgTrashEmpty color='#eb5454' fontSize='1.5em'/>
                </div>
            </div>

        </div>
    )
}

export default Task;
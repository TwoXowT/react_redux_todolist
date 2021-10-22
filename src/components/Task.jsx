import React from 'react';
import './Task.scss';
import {AiOutlineCheck, CgTrashEmpty, MdOutlineNotes} from "react-icons/all";

const Task = (props) =>{

    return(

        <div key={props.task.id} className='task-container'>
                <p>{props.task.text}</p>
            <div className='task-buttons-container'>
                <div onClick={() => props.doneTask(props.task)} className='task-done-button'>
                    <AiOutlineCheck color={props.task.completeStatus?('#555b65'):('#49a29b')} fontSize='1.5em'> </AiOutlineCheck>
                </div>
                <div className='task-change-button'>
                    <MdOutlineNotes color={props.task.completeStatus?('#555b65'):('#ececec')} fontSize='1.5em'/>
                </div>
                <div onClick={() => props.removeTask(props.task)} className='task-cancel-button'>
                    <CgTrashEmpty color='#eb5454' fontSize='1.5em'/>
                </div>
            </div>

        </div>
    )
}

export default Task;
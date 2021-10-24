import React from 'react';
import {useDispatch} from "react-redux";
import {
    doneTask,
    inc_delete_task,
    inc_done_task,
    removeTask
} from "../store/actionCreators/actionCreators";
import {AiOutlineCheck, CgTrashEmpty, MdOutlineNotes} from "react-icons/all";
import './Task.scss';

const Task = ({task}) =>{

    const dispatch = useDispatch();

    function buttonDoneClick(id){
        dispatch(doneTask(id))
        dispatch(inc_done_task())
    }
    function buttonDeleteClick(id){
        dispatch(removeTask(id))
        dispatch(inc_delete_task())
    }
    return(

        <div key={task.id} className='task-container'>
                <p>{task.text}</p>
            <div className='task-buttons-container'>
                <div onClick={() =>  buttonDoneClick(task.id)} className='task-done-button'>
                    <AiOutlineCheck color={task.completeStatus?('#555b65'):('#49a29b')} fontSize='1.5em'/>
                </div>
                <div className='task-change-button'>
                    <MdOutlineNotes color={task.completeStatus?('#555b65'):('#ececec')} fontSize='1.5em'/>
                </div>
                <div onClick={() => buttonDeleteClick(task.id)} className='task-cancel-button'>
                    <CgTrashEmpty color='#eb5454' fontSize='1.5em'/>
                </div>
            </div>

        </div>
    )
}

export default Task;
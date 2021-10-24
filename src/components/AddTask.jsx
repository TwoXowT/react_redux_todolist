import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {addTask, inc_create_task} from "../store/actionCreators/actionCreators";
import './AddTask.scss';

const AddTask = ({ createTask }) => {
    const [text, setText] = useState('Поучить React')
    const dispatch = useDispatch();

    function handleChange(e) {
        setText(e.target.value)
    }
    function buttonCreateClick(){
        dispatch(addTask(text))
        dispatch(inc_create_task())
    }

    return(
        <div className="addTask-container">
            <h1>Добавить задачу</h1>
            <div className="addTask-content">
                <input className="addTask-input" value={text} onChange={handleChange}/>
                <button className="addTask-button" onClick={()=>buttonCreateClick()}>Добавить</button>
            </div>

        </div>
    )
}

export default AddTask;
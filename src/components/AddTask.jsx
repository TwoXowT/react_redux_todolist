import React, {useContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {
    addCategory,
    addTask,
    inc_create_task
} from "../store/actionCreators/actionCreators";
import Context from "react-redux/lib/components/Context";
import './AddTask.scss';

const AddTask = ({ createTask }) => {
    const [text, setText] = useState('Поучить React')
    const [context, setContext] = useContext(Context);
    const dispatch = useDispatch();

    function handleChange(e) {
        setText(e.target.value)
    }
    function handleKeyDown(e){
        if (e.key === 'Enter') {
            dispatch(addTask(text,context))
            dispatch(inc_create_task())
        }
    }
    function buttonCreateClick(){
        dispatch(addTask(text,context))
        dispatch(inc_create_task())
    }

    return(
        <div className="addTask-container">
            <h1>Добавить задачу </h1>
            <div className="addTask-content">
                <input className="addTask-input" onKeyDown={handleKeyDown} value={text} onChange={handleChange}/>
                <button className="addTask-button" onClick={()=>buttonCreateClick()}>Добавить</button>
            </div>

        </div>
    )
}

export default AddTask;

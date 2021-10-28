import React, {useContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask, inc_create_task} from "../store/actionCreators/actionCreators";
import './AddTask.scss';
import Context from "react-redux/lib/components/Context";

const AddTask = ({ createTask }) => {
    const [text, setText] = useState('Поучить React')
    const [context, setContext] = useContext(Context);
    const dispatch = useDispatch();

    function handleChange(e) {
        setText(e.target.value)
    }
    function buttonCreateClick(){
        dispatch(addTask(text,context))
        dispatch(inc_create_task())
    }

    return(
        <div className="addTask-container">
            <h1>Добавить задачу </h1>
            <div className="addTask-content">
                <input className="addTask-input" value={text} onChange={handleChange}/>
                <button className="addTask-button" onClick={()=>buttonCreateClick()}>Добавить</button>
            </div>

        </div>
    )
}

export default AddTask;

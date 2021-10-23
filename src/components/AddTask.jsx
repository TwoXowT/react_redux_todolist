import React, { useState } from 'react';
import './AddTask.scss';

const AddTask = ({ createTask }) => {
    const [text, setText] = useState('Поучить React')

    function handleChange(e) {
        setText(e.target.value)
    }

    return(
        <div className="addTask-container">
            <h1>Добавить задачу</h1>
            <div className="addTask-content">
                <input className="addTask-input" value={text} onChange={handleChange}/>
                <button className="addTask-button" onClick={()=>createTask(text)}>Добавить</button>
            </div>

        </div>
    )
}

export default AddTask;
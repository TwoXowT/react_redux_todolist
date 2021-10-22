import React, {useState} from 'react';
import './AddTask.scss';

const AddTask = (props) => {

    const [text, setText] = useState('Стать разработчиком')

    function handleChange(e) {
        setText(e.target.value)
    }


    const funcAddTask = props.createTask;

    return(
        <div className="addTask-container">
            <h1>Добавить задачу</h1>
            <div className="addTask-content">
                <input className="addTask-input" value={text} onChange={() => handleChange}/>
                <button className="addTask-button" onClick={()=>funcAddTask(text)}>Добавить</button>
            </div>

        </div>
    )
}

export default AddTask;
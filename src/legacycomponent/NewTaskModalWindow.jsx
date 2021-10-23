import React from 'react';
import './NewTaskModalWindow.scss';

const NewTaskModalWindow = (props) =>{
    const { show, closeModal } = props;

    return (
        <>
            <div className={show ? "overlay" : "hide"} onClick={closeModal} />
            <div className={show ? "modal" : "hide"}>
                <button onClick={closeModal}>X</button>
                <h1>Добавить новую задачу</h1>
                <h4>Что нужно сделать?</h4>
                <input className='input-task' placeholder="Поучить react"/>
                <div>
                    <div>
                        <h4>Категория</h4>
                    </div>
                    <div>
                        <h4>Когда</h4>
                    </div>
                    <div>
                        <h4>Приоритет задачи</h4>
                    </div>
                </div>
            </div>
        </>
    );

}

export default NewTaskModalWindow;

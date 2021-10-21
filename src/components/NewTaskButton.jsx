import React from 'react';
import './NewTaskButton.scss';
import {AiOutlinePlus, AiOutlinePlusCircle} from "react-icons/all";

const NewTaskButton = (props) =>{

    return(
        <div className='newtask-button-container'>
            <div className='newtask-button'>
                <AiOutlinePlus color="#f9f9f9" fontSize='1.7em' />
            </div>
            <p>Новая задача</p>
        </div>
    )
}

export default NewTaskButton;

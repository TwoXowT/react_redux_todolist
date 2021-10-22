import React, {useState} from 'react';
import './NewTaskButton.scss';
import {AiOutlinePlus, AiOutlinePlusCircle} from "react-icons/all";
import * as PropTypes from "prop-types";
import NewTaskModalWindow from "./NewTaskModalWindow";


const NewTaskButton = (props) =>{

    const [showModal, setShowModal] = useState(false)
    const  openModal = () => setShowModal(true)
    const closeModal = ()=> setShowModal(false)

    return(
        <div className='newtask-button-container'>
            {!showModal && <div onClick={openModal} className='newtask-button'>
                <AiOutlinePlus color="#f9f9f9" fontSize='1.7em'/>
            </div>

            }
            <NewTaskModalWindow closeModal={closeModal} show={showModal} />
        </div>
    )
}

export default NewTaskButton;

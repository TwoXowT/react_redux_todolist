import React, {useContext, useState} from 'react'

import {AiOutlineCopyright, RiTodoFill} from "react-icons/all";
import './AuthPage.scss'
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {Authorization} from "../authorization/Authorization";
import {Registration} from "../authorization/Registration";

export const RegistrationPage = ()=>{
    const {loading,error,request} = useHttp()
    const auth = useContext(AuthContext)
    const [form,setForm] = useState({
        email:'',
        password:''
    })

    const registerHandler = async()=>{
        try{
            const data = await request('/api/auth/register','POST',{...form})
            console.log(data)
        }catch (e){}
    }

    const changeHandler = e =>{
        setForm({...form, [e.target.name]: e.target.value})
        console.log('data', form)
    }

    return(
        <div className='authpage-container'>
            <div className='authpage-header'>
                <div className='navbar-header'>
                    <div className='navbar-icon'>
                        <RiTodoFill color="#f9f9f9" fontSize="3em"> </RiTodoFill>
                    </div>
                    <div className='navbar-name-app'>Cool Todo</div>
                </div>
            </div>
            <div className='auth-content'>
                <Registration changeHandler={changeHandler}
                               registerHandler={registerHandler}/>

            </div>

            <div className='authpage-footer'>
                <div className='footer-icon'>
                    <AiOutlineCopyright color="#555b65" fontSize="1.4em"/>

                </div>
                <p> copyright 2021</p>
                <p>Политика конфиденциальности</p>

            </div>
        </div>
    )
}

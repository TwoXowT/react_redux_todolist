import React, {useContext, useState} from 'react'
import {AiOutlineCopyright, RiTodoFill} from "react-icons/all";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {Authorization} from "../authorization/Authorization";
import './AuthPage.scss'

export const AuthPage = ()=>{
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const [form,setForm] = useState({
        email:'',
        password:''
    })

    let succsesRegister = false
    const loginHandler = async()=>{
        try{
            const data = await request('/api/auth/login','POST',{...form})
            auth.login(data.token, data.userId)
            succsesRegister = true
        }catch (e){}
    }
    const changeHandler = e =>{
        setForm({...form, [e.target.name]: e.target.value})
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
                <Authorization changeHandler={changeHandler}
                                loginHandler={loginHandler}/>

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

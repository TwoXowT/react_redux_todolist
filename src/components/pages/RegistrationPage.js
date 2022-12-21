import React, {useContext, useState} from 'react'

import {AiOutlineCopyright, RiTodoFill} from "react-icons/all";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom";
import './AuthPage.scss'

export const RegistrationPage = ()=>{
    const {loading,error,request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [form,setForm] = useState({
        email:'',
        password:'',
        repeatPassword:'',
    })
    const [validPasswd, setValidPasswd] = useState(true)
    const [repPasswd, setRepPasswd] = useState(true)
    const registerHandler = async()=>{
        if(validPasswd && repPasswd){
            try{
                const data = await request('/api/auth/register','POST',{...form})
                console.log(data)
                history.push('/')
            }catch (e){}
        }

    }


    const changeHandler = e =>{
        //Для проверки пароля от 6 до 20 символов, которые содержат
        // как минимум одну цифровую цифру , одну заглавную и одну строчную букву
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        setForm({...form, [e.target.name]: e.target.value})
        if(e.target.name === 'password'){
            setValidPasswd(false)
            if(e.target.value.match(passw)){
               setForm({...form, [e.target.name]: e.target.value})
               setValidPasswd(true)
           }
        }
        if(e.target.name === 'repeatPassword'){
            setRepPasswd(false)
            if(e.target.value === form.password){
                setForm({...form, [e.target.name]: e.target.value})
                setRepPasswd(true)
            }
        }
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

                        <div className='auth-container'>
                            <h1>Регистрация</h1>
                            <form className='form' onSubmit={changeHandler}>
                                <input
                                    name='email'
                                    placeholder='email'
                                    onChange={changeHandler}/>

                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Введите пароль'
                                    onChange={changeHandler}/>
                                <input
                                    type='password'
                                    name='repeatPassword'
                                    placeholder='Повторите пароль'
                                    onChange={changeHandler}/>
                                {!validPasswd && (<p className='valid-message'>Пароль не подходит</p>)}
                                {!repPasswd && (<p className='valid-message'>Пароли не совпадают</p>)}
                                <input onClick={registerHandler} className='button-submit' type='button' value='Зарегистрироваться'/>
                            </form>
                            <p className='text-registration' >
                                <Link to='/login' className='registration-text'>Авторизация</Link></p>
                        </div>

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

import React, {useState} from "react";
import {Link} from "react-router-dom";


export const Registration = ({changeHandler,registerHandler})=>{

    const [active, setActive] = useState(false)
    return(
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
                    name='repeat-password'
                    placeholder='Повторите пароль'
                    onChange={changeHandler}/>
                <input disabled={active}
                    onClick={registerHandler} className='button-submit' type='button' value='Зарегистрироваться'/>
            </form>
            <p className='text-registration' >
                <Link to='/' className='registration-text'>Авторизация</Link></p>
        </div>

    )
}

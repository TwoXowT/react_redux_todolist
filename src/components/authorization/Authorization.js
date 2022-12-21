import React from "react";
import {Link} from "react-router-dom";

export const Authorization = ({changeHandler, loginHandler})=>{

    return(
        <div className='auth-container'>
            <h1>Вход в аккаунт</h1>
            <form className='form' onSubmit={changeHandler}>
                <input
                    name='email'
                    placeholder='Username'
                    onChange={changeHandler}/>

                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={changeHandler}/>
                <input
                    onClick={loginHandler} className='button-submit' type='button' value='Войти'/>
            </form>

            <p className='text-registration' >Еще нет аккаунта?
                <Link to='/registration' className='registration-text'>Регистрация</Link>
            </p>

        </div>

    )
}

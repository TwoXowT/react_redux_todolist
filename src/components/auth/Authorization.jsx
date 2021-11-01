
import './Authorization.scss'
import {useState} from "react";


const Authorization = () => {

    const [login, setLogin] = useState(null)
    const [passwd, setPasswd] = useState(null)

    function handleChange(e) {
        setLogin(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('login', login)
        console.log('pass',passwd)
    }

    return(

        <div className='auth-container'>
            <h1>Вход в аккаунт</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input value={login}
                       name='username'
                       placeholder='Username'
                       onChange={(e)=>setLogin(e.target.value)}/>
                <input value={passwd}
                       type='password'
                       name='password'
                       placeholder='Password'
                       onChange={(e)=>setPasswd(e.target.value)}/>
                <input className='button-submit' type='submit' value='Войти'/>
            </form>
        </div>
    )

}

export default Authorization;

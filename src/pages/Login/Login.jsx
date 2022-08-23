import React, { useContext, useState } from 'react'
import MyButton from '../../components/button/MyButton'
import { AuthContext } from '../../context'
import cl from './Login.module.css'


const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className={cl.window}>
            <div className={cl.content}>
                <div className={cl.logo}></div>

                <h1 className={cl.content__header}>Учебный проект <br/> React-post-list</h1>
                <form onSubmit={login}>
                    <div className={cl.btnWrap}>
                        <button className={cl.btn}>Войти</button>
                    </div>
                </form>
                <div className={cl.git}></div>
            </div>


        </div>
    )
}

export default Login
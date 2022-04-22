import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import cl from './NavBar.module.css'

const NavBar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={cl.navbar}>
                <div className={cl.navbar__links}>
                    <Link className={cl.link} to='/about'>О сайте</Link>
                    <Link className={cl.link} to='/posts'>Посты</Link>
                </div>
                <button className={cl.exit} onClick={logout}>Выйти</button>
        </div>
    )
}

export default NavBar
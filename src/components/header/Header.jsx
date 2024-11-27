import React from 'react'
import style from './Header.module.scss'
import { Htag } from '../Htag/Htag'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'


export const Header = () => {
    const { logout, user } = useAuth();

    return (
        <header className={style.header}>
            <div className={style.header__h1}>
                <Htag tag='h1'>Вітаю {user?.name ? user.name : ''}</Htag>
            </div>
            <div className={style.header__wrapp}>
                <ul>
                    <Link to='/dashboard' className={style.header__wrapp_link}>{user?.name ? user.name : 'Home'}</Link>
                    <li className={style.header__wrapp_link}>/</li>
                    <Link
                        to='/'
                        onClick={logout}
                        className={style.header__wrapp_link}
                    >Вихід
                    </Link>
                </ul>
            </div>
        </header>
    )
}
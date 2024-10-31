import React from 'react'
import style from './Header.module.scss'
import { Htag } from '../Htag/Htag'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__h1}>
                <Htag tag='h1'>Вітаю 'Андрій'</Htag>
            </div>
            <div className={style.header__wrapp}>
                <ul>
                    <li className={style.header__wrapp_link}>Андрій</li>
                    <li className={style.header__wrapp_link}>/</li>
                    <Link to='/' className={style.header__wrapp_link}>Вихід</Link>
                </ul>
            </div>
        </header>
    )
}
import React from 'react'
import style from './Header.module.scss'
import { Htag } from '../Htag/Htag'

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
                    <li className={style.header__wrapp_link}>Вихід</li>
                </ul>
            </div>
        </header>
    )
}
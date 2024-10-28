import React from 'react';
import style from './input.module.scss'


export const Input = ({ name, type, placeholder }) => {
    return (
        <input type={type} className={style.input} name={name} placeholder={placeholder} />
    )
}
import React from 'react';
import style from './input.module.scss'


export const Input = ({ name, type, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            className={style.input}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}
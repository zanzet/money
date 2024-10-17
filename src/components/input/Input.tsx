import React from 'react';
import style from './input.module.scss'

interface InputProps {
    name: string;
    type: string;
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({ name, type, placeholder }) => {
    return (
        <input type={type} className={style.input} name={name} placeholder={placeholder} />
    )
}
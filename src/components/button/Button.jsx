import style from './Button.module.scss'
import React from 'react';


export const Btn = ({ children, className }) => {
    return (
        <button className={`${style.btn} ${className}`}>
            <div className={style.text}>
                {children}
            </div>
        </button >
    )
};
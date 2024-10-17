import style from './Button.module.scss'
import React, { ReactNode } from 'react';


export interface BtnProps {
    className?: string
    children: ReactNode;
}

export const Btn: React.FC<BtnProps> = ({ children, className }) => {
    return (
        <button className={`${style.btn} ${className}`}>
            <div className={style.text}>
                {children}
            </div>
        </button >
    )
};
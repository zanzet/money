import style from './Htag.module.scss'
import React, { ReactNode } from "react";

export interface HtagProps {
    tag: 'h1' | 'h2' | 'h3' | 'p';
    children: ReactNode;
}

export const Htag: React.FC<HtagProps> = ({ tag, children }) => {
    switch (tag) {
        case "h1":
            return <h1 className={style.h1}>{children}</h1>;
        case "h2":
            return <h2 className={style.h2}>{children}</h2>;
        case "h3":
            return <h3 className={style.h3}>{children}</h3>;
        case "p":
            return <p className={style.p}>{children}</p>;
        default:
            return <></>;
    }

};
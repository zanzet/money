import React from 'react';
import style from './augh.module.scss';
import { Btn, Htag, Input } from '../../components';


export const AughPage = () => {
    return (
        <div className={style.wrapp}>
            <div className={style.wrapp__log}>
              

            </div>
            <Htag tag='h2'>
                Авторезуйтеся
            </Htag>
            <form className={style.wrapp__form}>
                <Input
                    name='name'
                    type='name'
                    placeholder="Введіть своє ім'я" />
                <Input
                    name='password'
                    type='password'
                    placeholder="Введіть пароль" />
                <Btn className={style.wrapp__btn}>
                    Відправити
                </Btn>
            </form>

        </div>
    )
}
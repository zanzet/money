import React from 'react';
import style from './augh.module.scss';
import { Btn, Htag, Input } from '../../components';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useHttp } from '../../hooks/useHttp';

export const AughPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const { request } = useHttp()

    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = await request('http://localhost:3001/users')

        const user = userData.find(u => u.name === name && u.password === password)
        login(user)
    }

    return (
        <div className={style.wrapp}>
            <div className={style.wrapp__log}>


            </div>
            <Htag tag='h2'>
                Авторезуйтеся
            </Htag>
            <form className={style.wrapp__form} onSubmit={handleLogin}>
                <Input
                    name='name'
                    type='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введіть своє ім'я"
                />
                <Input
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введіть пароль"
                />
                <Btn className={style.wrapp__btn}>
                    Відправити
                </Btn>
            </form>

        </div>
    )
}
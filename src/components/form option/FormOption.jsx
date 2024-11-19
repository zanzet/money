import React from 'react'
import style from './form.module.scss'
import { Input } from '../input/Input'
import { Btn } from '../button/Button'
import { useAuth } from '../../context/AuthContext'

export const FormOption = () => {
    const { user } = useAuth();
    console.log(user)
    const optionList = user.categories.map(el => {
        return (
            <option key={el.id} value={el.id}>{el.name}</option>
        )
    })
    return (
        <div className={style.form}>
            <form>
                <select className={style.select}>
                    <option disabled selected>Вибиріть опцію</option>
                    {optionList}
                </select>
                <Input type='name' name='number' placeholder='Введіть суму' />
                <Btn className={style.btn}>Відправити</Btn>
            </form>
        </div>
    )
}
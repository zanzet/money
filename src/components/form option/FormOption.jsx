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

                    {/* <option key={2} value="1">Food</option>
                    <option key={3} value="3">Entertainment</option>
                    <option key={4} value="4">Movies</option> */}
                </select>
                <Input type='name' name='number' placeholder='Введіть суму' />
                <Btn className={style.btn}>Відправити</Btn>
            </form>
        </div>
    )
}
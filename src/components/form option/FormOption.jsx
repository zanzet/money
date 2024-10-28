import React from 'react'
import style from './form.module.scss'
import { Input } from '../input/Input'
import { Btn } from '../button/Button'

export const FormOption = () => {
    return (
        <div className={style.form}>
            <form>
                <select className={style.select}>
                    <option disabled selected>Вибиріть опцію</option>
                    <option key={1} value="2">Transport</option>
                    <option key={2} value="1">Food</option>
                    <option key={3} value="3">Entertainment</option>
                    <option key={4} value="4">Movies</option>
                </select>
                <Input type='name' name='number' placeholder='Введіть суму' />
                <Btn className={style.btn}>Відправити</Btn>
            </form>
        </div>
    )
}
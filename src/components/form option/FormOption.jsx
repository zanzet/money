import React, { useState } from 'react'
import style from './form.module.scss'
import { Input } from '../input/Input'
import { Btn } from '../button/Button'
import { useAuth } from '../../context/AuthContext'
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../../hooks/useHttp'

export const FormOption = () => {
    const { user, login } = useAuth();
    const { request } = useHttp()
    const [nameOperation, setNameOperation] = useState('')
    const [prise, setPrice] = useState('');
    const [transactionValue, setTransactionValue] = useState('')

    const optionList = user.categories.map(el => {
        return (
            <option
                key={el.id}
                value={el.name}
            >{el.name}</option>
        )
    })

    const onLoadTransaction = async (e) => {
        e.preventDefault()

        const date = new Date();
        const formattedDate = date.toISOString().split('T')[0];

        const transaction = {
            "id": uuidv4(),
            "name": nameOperation,
            "type": transactionValue,
            "amount": transactionValue === 'income' ? parseInt(prise) : parseInt("-" + prise),
            "category": "Groceries",
            "date": formattedDate
        }
        user.transactions.push(transaction)
        login(user)
        request(`http://localhost:3001/users/${user.id}`, 'PATCH', JSON.stringify(user))
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setNameOperation('')
        setPrice('')
        setTransactionValue('')

    }

    return (
        <div className={style.form}>
            <form className={style.form__transaction} onSubmit={onLoadTransaction}>
                <Input
                    type='name'
                    name='name'
                    placeholder='назва операції'
                    value={nameOperation}
                    onChange={e => setNameOperation(e.target.value)}
                    required />
                <select onChange={e => setTransactionValue(e.target.value)} className={style.select} required>
                    <option key={3} disabled selected>Type operation</option>
                    {optionList}
                </select>
                <Input
                    type='number'
                    name='number'
                    placeholder='Введіть суму'
                    onChange={e => setPrice(e.target.value)} required />
                <Btn className={style.btn}>Відправити</Btn>
            </form>
        </div>
    )
}
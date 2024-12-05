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
    const [typeOperation, setTypeOperation] = useState('')

    const optionList = user.categories.map(el => {
        return (
            <option
                key={el.id}
                value={el.name}
            >{el.name}</option>
        )
    })

    const onLoadTransaction = (e) => {
        e.preventDefault()

        const date = new Date();
        const formattedDate = date.toISOString().split('T')[0];

        const transaction = {
            id: uuidv4(),
            name: nameOperation,
            type: typeOperation,
            amount: typeOperation === 'income' ? parseInt(prise) : parseInt("-" + prise),
            category: transactionValue,
            date: formattedDate
        }

        let updatedBalance = user.balance + (typeOperation === 'income' ? parseInt(prise) : -parseInt(prise));
        let newIncome;
        let newExpenses;
        if (typeOperation === 'income') {
            newIncome = user.income + transaction.amount
        }
        if (typeOperation === 'expense') {
            newExpenses = user.expenses + Math.abs(transaction.amount)
        }

        const updatedUser = {
            ...user,
            expenses: newExpenses ? newExpenses : user.expenses,
            income: newIncome ? newIncome : user.income,
            balance: updatedBalance,
            transactions: [...user.transactions, transaction],
        };
        
        login(updatedUser)

        request(`http://localhost:3001/users/${user.id}`, 'PATCH', JSON.stringify(updatedUser))
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setNameOperation('')
        setPrice('')
        setTransactionValue('')
        setTypeOperation('')

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
                <select
                    onChange={e => {
                        const selectedOption = user.categories.find(el => el.name === e.target.value);
                        setTransactionValue(e.target.value)
                        setTypeOperation(selectedOption?.type || '')
                    }}
                    className={style.select}
                    value={transactionValue}
                    required>
                    <option value="" disabled hidden>
                        Выберіть категорію
                    </option>
                    {optionList}
                </select>
                <Input
                    type='number'
                    name='number'
                    value={prise}
                    placeholder='Введіть суму'
                    onChange={e => setPrice(e.target.value)} required />
                <Btn className={style.btn}>Відправити</Btn>
            </form>
        </div>
    )
}
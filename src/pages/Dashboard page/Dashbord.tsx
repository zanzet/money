import { Htag } from '../../components';
import style from './dashbord.module.scss'
import React from 'react';

interface Transaction {
    id: number;
    category: string;
    amount: number;
    description: string;
    date: string;
}

interface DashboardProps {
    balance: number;
    income: number;
    expenses: number;
    transactions: Transaction[];
}

export const Dashboard: React.FC<DashboardProps> = ({ balance, income, expenses, transactions }) => {
    return (
        <div className={style.dashboard}>
            <Htag tag='h1'>Панель </Htag>
            <div className={style.dashboard__summary}>
                <div className={style.summary__item}>
                    <Htag tag='h2'>Баланс</Htag>
                    <Htag tag='p'>${balance.toFixed(2)}</Htag>
                </div>
                <div className={style.summary__item}>
                    <Htag tag='h2'>Прибуток</Htag>
                    <Htag tag='p'>${income.toFixed(2)}</Htag>
                </div>
                <div className={style.summary__item}>
                    <Htag tag='h2'>Витрати</Htag>
                    <Htag tag='p'>${expenses.toFixed(2)}</Htag>
                </div>

            </div>

            <div className={style.dashboard__transactions}>
                <h2>Нещодавні транзакции</h2>
                <ul>
                    {transactions.map((transaction) => (
                        <li key={transaction.id} className={style.transaction__item}>
                            <div>
                                <span>{transaction.category}</span> - ${transaction.amount.toFixed(2)}
                            </div>
                            <div>
                                <span>{transaction.description}</span>
                                <span>{new Date(transaction.date).toLocaleDateString()}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

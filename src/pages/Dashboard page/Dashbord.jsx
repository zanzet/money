import { Link } from 'react-router-dom';
import { Htag, Transaction } from '../../components';
import style from './dashbord.module.scss'
import React from 'react';
import { useAuth } from '../../context/AuthContext';

export const Dashboard = () => {

    const { user } = useAuth()
    console.log(user)
    const { balance, income, expenses, transactions } = user
    return (
        <div className={style.dashboard}>
            <Htag tag='h1'>Панель </Htag>
            <div className={style.dashboard__summary}>

                <Link to='/expensecategories' className={style.summary__item}>
                    <div>
                        <Htag tag='h2'>Баланс</Htag>
                        <Htag tag='p'>${balance.toFixed(2)}</Htag>
                    </div>
                </Link>

                <Link to='/add' className={style.summary__item}>
                    <div>
                        <Htag tag='h2'>Прибуток</Htag>
                        <Htag tag='p'>${income.toFixed(2)}</Htag>
                    </div>
                </Link>
                <Link to="/add" className={style.summary__item}>
                    <div>
                        <Htag tag='h2'>Витрати</Htag>
                        <Htag tag='p'>${expenses.toFixed(2)}</Htag>
                    </div>
                </Link>

            </div>

            <Transaction transactions={transactions} />
        </div>
    );
};

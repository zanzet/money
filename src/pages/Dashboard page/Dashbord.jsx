import { FormOption, Htag, Transaction } from '../../components';
import style from './dashbord.module.scss'
import React from 'react';

export const Dashboard = ({ balance, income, expenses, transactions }) => {
    return (
        <div className={style.dashboard}>
            <Htag tag='h1'>Панель </Htag>
            <div className={style.dashboard__summary}>

                <div className={style.summary__item}>
                    <Htag tag='h2'>Баланс</Htag>
                    <Htag tag='p'>${balance.toFixed(2)}</Htag>
                </div>

                <a href="#" className={style.summary__item}>
                    <div>
                        <Htag tag='h2'>Прибуток</Htag>
                        <Htag tag='p'>${income.toFixed(2)}</Htag>
                    </div>
                </a>
                <a href="#" className={style.summary__item}>
                    <div>
                        <Htag tag='h2'>Витрати</Htag>
                        <Htag tag='p'>${expenses.toFixed(2)}</Htag>
                    </div>
                </a>

            </div>

            <Transaction transactions={transactions} />

            <div className={style.dashboard__transactions}>
                <FormOption />
            </div>
        </div>
    );
};

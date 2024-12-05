import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormOption, Htag, Transaction } from '../../components';
import style from './dashbord.module.scss'
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Graphs } from '../../components/graphs/graphs';

export const Dashboard = () => {

    const { user } = useAuth();
    const { balance, income, expenses } = user;
    console.log(expenses)
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

                <Link to='/income' className={style.summary__item}>
                    <div>
                        <Htag tag='h2'>Прибуток</Htag>
                        <Htag tag='p'>${income.toFixed(2)}</Htag>
                    </div>
                </Link>
                <Link to="/expense" className={style.summary__item}>
                    <div>
                        <Htag tag='h2'>Витрати</Htag>
                        <Htag tag='p'>${expenses.toFixed(2)}</Htag>
                    </div>
                </Link>

            </div>

            <FormOption />

            <Transaction />

            <Graphs />
        </div>
    );
};

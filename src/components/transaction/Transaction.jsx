import { useAuth } from '../../context/AuthContext'
import style from './transaction.module.scss'
import { Htag } from '../index'

export const Transaction = ({ flag }) => {
    const { user } = useAuth();
    const filterList = user.transactions.filter(el => {
        return el.type === flag
    })
    

    return (
        <div className={style.dashboard__transactions}>
            <Htag tag='h2'>Нещодавні транзакции</Htag>
            <ul>
                {filterList.map((transaction) => (
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
    )
}
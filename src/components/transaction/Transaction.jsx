import { Htag } from '../Htag/Htag'
import style from './transaction.module.scss'

export const Transaction = ({ flag }) => {
    console.log(flag)
    // return (
    //     <div className={style.dashboard__transactions}>
    //         <Htag tag='h2'>Нещодавні транзакции</Htag>
    //         <ul>
    //             {transactions.map((transaction) => (
    //                 <li key={transaction.id} className={style.transaction__item}>
    //                     <div>
    //                         <span>{transaction.category}</span> - ${transaction.amount.toFixed(2)}
    //                     </div>
    //                     <div>
    //                         <span>{transaction.description}</span>
    //                         <span>{new Date(transaction.date).toLocaleDateString()}</span>
    //                     </div>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // )
}
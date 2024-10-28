import { FormOption, Header, Transaction } from '../../components'
import style from './addTransaction.module.scss'

export const AddTransaction = ({ transactions }) => {
    return (
        <>
            <Header />
            <FormOption />
            <Transaction transactions={transactions} />
        </>
    )
}
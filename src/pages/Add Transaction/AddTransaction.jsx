import { FormOption, Header, Transaction } from '../../components'
// import style from './addTransaction.module.scss'

export const AddTransaction = ({ transactions }) => {
    return (
        <>
            <FormOption />
            <Transaction transactions={transactions} />
        </>
    )
}
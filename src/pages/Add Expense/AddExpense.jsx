import { FormOption, Transaction } from '../../components'
// import style from './addTransaction.module.scss'

export const AddExpense = () => {
    return (
        <>
            {/* <FormOption /> */}
            <Transaction flag='expense' />
        </>
    )
}
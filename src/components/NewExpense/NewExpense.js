import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
import './NewExpense.css'

const NewExpense = (props) => {
    const [form, setForm] = useState(false)

    const showFormHandler = (event) => {
        setForm(true)
    }

    const removeFormHandler = (event) => {
        setForm(false)
    }

    const saveExpenseHandler = (prevexpenseData) => {
        const expenseData = {
            ...prevexpenseData,
            id: Math.random().toString()
        }
        props.onAddExp(expenseData)
        setForm(false)
    }
    return (
        <div className="new-expense">
            {!form && <button onClick={showFormHandler}>Add Expense</button>}
            {form && <ExpenseForm onSaveExp={saveExpenseHandler} onCancel={removeFormHandler}/>}
        </div>
    )
}

export default NewExpense
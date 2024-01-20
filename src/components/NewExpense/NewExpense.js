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
            //Saved in expenseForm
            ...prevexpenseData,
            id: Math.random().toString()
        }
        props.onAddExp(expenseData)
        setForm(false)
    }
    return (
        <div className="new-expense">
            {/* If form isn't displayed, show button else show form */}
            {!form && <button onClick={showFormHandler}>Add Expense</button>}
            {/* Expected onSaveExp prop from ExpenseForm */}
            {form && <ExpenseForm onSaveExp={saveExpenseHandler} onCancel={removeFormHandler}/>}
        </div>
    )
}

export default NewExpense
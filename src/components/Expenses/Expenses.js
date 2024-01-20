import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [ filteredYear, setFilteredYear ] = useState('2023')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.array.filter((expenses => {
        //Same as year selected in filter
        return expenses.date.getFullYear().toString() === filteredYear
    }))
    return (
        <li>
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
        <ExpensesChart array={filteredExpenses}/>
        <ExpensesList array={filteredExpenses}/>
        </Card>
        </li>
    )
}

export default Expenses
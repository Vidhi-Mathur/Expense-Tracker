import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
// The map() method of [] creates a new [] populated with the results of calling a provided function on every element in the calling []. 
if(props.array.length === 0){
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>
}
/* SYNTAX - 2: Directly under property 'expense', but now in component, extract as props.expense.title/date/amount instead of props.name/date/price 
    <ExpenseItem expense = {props.array[0]} /> */
    return <ul className="expenses-list">{
        props.array.map((array) => {
        // SYNTAX - 1: Extract as props.name/ price in App.js, not title/ amount
           return <ExpenseItem key={array.id} name={array.title} price={array.amount} date={array.date} />
       })
    }</ul>
}

export default ExpensesList
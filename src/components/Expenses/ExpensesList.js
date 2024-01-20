import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => { 
if(props.array.length === 0){
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>
}
    return <ul className="expenses-list">{
        props.array.map((array) => {
           return <ExpenseItem key={array.id} name={array.title} price={array.amount} date={array.date} />
       })
    }</ul>
}

export default ExpensesList
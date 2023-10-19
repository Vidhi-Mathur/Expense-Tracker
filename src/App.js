import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App(props) {
  const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 300,
      //YYYY/MM/DD
      date: new Date(2023, 10, 6)
    },
    {
      id: 'e2',
      title: 'Furniture',
      amount: 600,
      //YYYY/MM/DD
      date: new Date(2021, 10, 5)
    },
    {
      id: 'e3',
      title: 'Home Loan',
      amount: 400,
      //YYYY/MM/DD
      date: new Date(2023, 10, 4)
    },
    {
      id: 'e4',
      title: 'Mobile',
      amount: 100,
      //YYYY/MM/DD
      date: new Date(2023, 10, 3)
    }
  ]

  const [ expense, setExpense ] = useState(INITIAL_EXPENSES)

  //Triggered wheneever a new expense is added
  const addExpenseHandler = (expenseData) => {
  //setExpense([expenseData, ...expense]) not recommended. Pass function as argument for state updating function and that function will automatically receive latest snapshot
    setExpense((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }

  return (
    <div>
      <NewExpense onAddExp={addExpenseHandler}/>
      <Expenses array={expense}/>
    </div>
  );
}

export default App;

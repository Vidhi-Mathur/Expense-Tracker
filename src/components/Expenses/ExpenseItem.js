import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

/* {props.date} = stateless/ presentational/ dumb component as no internal state and just there to outut some data. 
{title} = stateful/ smart component */
//Used (name, date, price) instead of (props) -> {name}, {date}, {price} directly
const ExpenseItem = (props) => {
    //useState() is on per component instance basis. So, every component has its own state. Hence, if we clicked on a title, only that one updated, not the other titles
    const [title, setTitle] = useState(props.name)
    const clickHandler = () => {
        setTitle('Updated')
    }
    /* Can't update something without states because of the way React executes. Component is simply a function, that returns JSX code. Whenever React evaluates JSX code, it will call these functions, evaluates them till no more code is left there to be evaluated. At end, to displays initial rendering on screen, but never repeats them. Hence, even if we want to update something, can't do so and need to tell react about updating something, so re-evaluate certain component*/
    return (
        //Can't use custom components as wrappers around other componenets. Hence use 'childern' props there in Card, whose value is equivalent to what is inside <Card />
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__title">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}
export default ExpenseItem
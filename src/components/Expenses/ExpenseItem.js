import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    return (
        //Can't use custom components as wrappers around other componenets. Hence use 'childern' props there in Card, whose value is equivalent to what is inside <Card />
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__title">
                <h2>{props.name}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem
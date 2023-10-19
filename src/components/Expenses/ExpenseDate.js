import './ExpenseDate.css'

const ExpenseDate = (props) => {
    if (!props.date) {
        return null; // or return a default value or an error message
    }
    //Convert time to human readable string, taking language as first argument and second optional 
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const month = props.date.toLocaleString('en-US', { month: 'long'})
    const year = props.date.getFullYear()
    return (
        /* SYNTAX - 1:  To get as ISO format date string 
            <div>{props.date.toISOString()}</div> */
        // SYNTAX - 2 
            <div className="expense-date">
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
            </div>
    )
}
export default ExpenseDate
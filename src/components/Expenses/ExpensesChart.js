import Chart from "../Chart/Chart"

const ExpensesChart = (props) => {
    const ChartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sept', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]
    //Passed in Expenses, use 'of' for array and 'in' for objects
    for (const expense of props.array) {
        const expenseMonth = expense.date.getMonth()
        ChartDataPoints[expenseMonth].value += expense.amount
    }
    return <Chart dataPoints={ChartDataPoints}/>
}

export default ExpensesChart
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)
    return (
        <div className='chart'>
        {props.dataPoints.map((dataPoint) => <ChartBar key={dataPoint.month} value={dataPoint.value} maxValue={totalMax} label={dataPoint.month}/>)}
        </div>
    )
}   

export default Chart
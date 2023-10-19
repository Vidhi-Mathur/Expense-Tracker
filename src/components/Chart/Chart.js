import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)
    return (
        <div className='chart'>
        {/* Create as many chart bars as many data points we have, having value extracted from dataPoint */}
        {props.dataPoints.map((dataPoint) => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label}/>)}
        </div>
    )
}   

export default Chart
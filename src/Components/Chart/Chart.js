import ChartBars from './ChartBars';
import './Chart.css';
function Chart(props)
{
    let maxInDataPoints = props.dataPoints.map(maxx => maxx.value);
    let maxVal = Math.max(...maxInDataPoints);
    console.log(maxVal);

   return( 
   <div className='chart'>
       {props.dataPoints.map((dP) => (
       <ChartBars 
        key ={dP.label}
        value = {dP.value} 
        maxValue = {maxVal}
        label = {dP.label}
       />
       )
       )
       }
   </div>
   );
};
export default Chart;
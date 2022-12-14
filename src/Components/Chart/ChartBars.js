import './ChartBars.css';
function ChartBars(props)
{
    let barFilled = '0%';
    if(props.maxValue > 0)
    {
        barFilled = Math.round((props.value/props.maxValue)*100)+'%';
        console.log(barFilled);
    }
    return (<div className='chart-bar'>
               <div className='chart-bar__inner'> 
                   <div className='chart-bar__fill' style={{height:barFilled}}></div>
               </div>
            <div className='chart-bar__label'>{props.label}</div>
    </div>
    );
};
export default ChartBars;
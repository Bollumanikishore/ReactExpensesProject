// import ExpensesItem from './ExpensesItem'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import './Expenses.css';
import { useState } from 'react';
function Expenses(props)
{
    const[selectedYear,setSelectedYear] = useState('2021')
    const getYearHandler = (year) => setSelectedYear(year);
    const filteredYear = props.d.filter((arg)=>{return arg.date.getFullYear().toString()===selectedYear});
    // console.log(props.d);
return(
    <div className="expenses">
        
      <ExpensesFilter selected={selectedYear} onGetYear={getYearHandler}></ExpensesFilter>
      <ExpensesChart expense={filteredYear}></ExpensesChart>
      <ExpensesList filteredYear = {filteredYear}></ExpensesList>
      {/* <ExpensesItem date={props.d[0].date} cost={props.d[0].cost} title={props.d[0].title}></ExpensesItem>
      <ExpensesItem date={props.d[1].date} cost={props.d[1].cost} title={props.d[1].title}></ExpensesItem>
      <ExpensesItem date={props.d[2].date} cost={props.d[2].cost} title={props.d[2].title}></ExpensesItem> */}
    </div>
)

}
export default Expenses;
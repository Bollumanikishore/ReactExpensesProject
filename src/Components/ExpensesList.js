import ExpensesItem from './ExpensesItem';
import './ExpensesList.css'
const ExpensesList = (props) => {
    if(props.filteredYear.length === 0)
    {
        return <h2 className='expenses-list__fallback'>No data found</h2>
    } 
return <ul>
    {props.filteredYear.map((expense) => (
        <ExpensesItem
          key = {expense.id}
          title={expense.title}
          cost={expense.cost}
          date={expense.date}
        />
      ))}
    </ul>
}

export default ExpensesList;
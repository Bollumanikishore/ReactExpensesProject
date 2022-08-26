import './NewExpenses.css'
import ExpensesForm from './ExpensesForm'
import { useState } from 'react';
// import ExpensesDate from '../Components/ExpensesDate'
function NewExpenses(props)
{
    
    const[isEditing, setIsEditing]=useState(false);
    // debugger;
    function newExpensesAddingHandler()
    {
        // debugger;
        setIsEditing(true);
    }
    function saveExpenseDataHandler(enteredExpenses)
    {
        // debugger;
        var ExpensesData={
             ...enteredExpenses,
             id:Math.random().toString()
         }
        //  var ExpensesData = {id:Math.random().toString(),title : enteredExpenses.title,cost:enteredExpenses.cost,date:enteredExpenses.date}
        //  console.log(ExpensesData);
         props.onBringExpenseData(ExpensesData);
        //  setIsEditing(false);
        //  debugger;
    }
    function cancelEventHandler()
    {
        setIsEditing(false);
    }
return(
    <div className = "new-expense">
        {!isEditing && <button onClick={newExpensesAddingHandler}>Add Expenses</button>}
        {isEditing && <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEventHandler}></ExpensesForm>}
    </div>
)
}

export default NewExpenses;
import { useState } from 'react';
import './ExpensesForm.css'

function ExpensesForm(props)
{
    const[enteredTitle,setEnteredTitle] = useState('');
    const[enteredDate,setEnteredDate] = useState('');
    const[enteredCost,setEnteredCost] = useState('');
    function titleChangeHandler(event)
    {
        setEnteredTitle(event.target.value);
    }
    function dateChangeHandler(event)
    {
        setEnteredDate(event.target.value);
    }
    function costChangeHandler(event)
    {
        setEnteredCost(event.target.value);
    }
    function formSubmitHanlder(event)
    {
        event.preventDefault();
        const expenses ={
            title:enteredTitle,
            date:new Date(enteredDate),
            cost: +enteredCost
        }
        props.onSaveExpenseData(expenses);        
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredCost('');
    }

    return(
        <form onSubmit={formSubmitHanlder}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange ={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Cost</label>
                    <input type="number" value={enteredCost} min="0.01" step="0.01" onChange={costChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Submit</button>
                </div>
        </form>
    )
}
export default ExpensesForm;
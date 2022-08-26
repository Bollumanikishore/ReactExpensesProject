import './ExpensesItem.css';
// import {useState} from 'react'

import ExpensesDate from './ExpensesDate';
function ExpensesItem(props)
{
    // debugger;
    // const [title,setTitle] = useState(props.title);
    // function buttonClickHandler()
    // {
    //    setTitle('updated!');
    // }
    return(
        <li>
        <div className="expense-item">
            <ExpensesDate date = {props.date}></ExpensesDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.cost}</div>
                {/* <button onClick = {buttonClickHandler}>Click me!</button> */}
            </div>
        </div>
        </li>
    );
}
export default ExpensesItem;
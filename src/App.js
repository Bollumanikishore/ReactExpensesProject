import { useState } from 'react';
import Expenses from './Components/Expenses'
import NewExpenses from './NewExpenses/NewExpenses'

const dummy_Data = [{id:'1',title: "book", cost:100, date: new Date(2022,2,25)},
  {id:'2',title: "pen", cost:10, date: new Date(2022,3,26)},
  {id:'3',title: "bench", cost:10, date: new Date(2022,5,27)}];

function App() {
    const [expenses, setExpenses] = useState(dummy_Data);
    const BringExpenseData = (expense) =>{
      console.log(expense);
      setExpenses((prevState)=>
      {
        return [expense, ...prevState];
      })
      //  var expensesTemp = expenses;
      //  expensesTemp.push(expense);
      //  console.log(expensesTemp);
      //  setExpenses([expense, ...expensesTemp]);
      // setExpenses(expene);
    };
  return (
    <div>
      
      <NewExpenses onBringExpenseData={BringExpenseData}></NewExpenses>
      
      <Expenses d = {expenses}></Expenses>
      
    </div>
  );
}

export default App;

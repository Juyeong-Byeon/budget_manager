import React,{useState,useCallback} from 'react';
import './App.css';
import BudgetSetter from './components/BudgetSetter';
import BudgetController from './components/BudgetController';
import BudgetCategoryList from './components/BudgetCategoryList';
import BudgetTotal from './components/BudgetTotal';

function App() {
 const [TotalBudget,setTotalBudget]=useState(0);
 const SubmitBudget=useCallback((budget)=>{
   setTotalBudget(budget);
},[TotalBudget]);
  return (
    <div className="App">
      <BudgetSetter SubmitBudget={SubmitBudget} ></BudgetSetter>
      <BudgetController></BudgetController>
      <BudgetCategoryList></BudgetCategoryList>
      <BudgetTotal TotalBudget={TotalBudget}></BudgetTotal> 
    </div>
  );
}

export default App;

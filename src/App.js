import React,{useState,useCallback} from 'react';
import './App.css';
import BudgetSetter from './components/BudgetSetter';
import BudgetController from './components/BudgetController';
import BudgetCategoryList from './components/BudgetCategoryList';
import BudgetTotal from './components/BudgetTotal';

function App() {
 const [TotalBudget,setTotalBudget]=useState(0);
 const [budgetUseageInfos,setbudgetUseageInfo]=useState([
   
   {
    category:"공부",
    items:[{useage:'바지',cost:1000},{useage:'윗 옷',cost:2000},{useage:'후드',cost:4000}],
    used:0
   }
  ]);

 const CategoryAdd=useCallback((newCategory)=>{
  if(!newCategory){
    console.log('null!');
    return;
  }
  setbudgetUseageInfo(budgetUseageInfos.concat(
    {
      category:newCategory,
      items:[],
      used:0
     }
  ));


 },[budgetUseageInfos])

 const SubmitBudget=useCallback((budget)=>{
   setTotalBudget(budget);
  },[TotalBudget]);


  

  return (
    <div className="App">
      <BudgetSetter SubmitBudget={SubmitBudget} /*총예산 관리 컴포넌트*/></BudgetSetter >
       <BudgetController CategoryAdd={CategoryAdd} Categorys={budgetUseageInfos} /*카테고리별 예산관리, 사용내역 추가 컴포넌트*/></BudgetController >
      <BudgetCategoryList BudgetCategorys={budgetUseageInfos} /* 카테고리 리스트(카테고리(사용내역))*/></BudgetCategoryList >
      <BudgetTotal TotalBudget={TotalBudget} /*현제 남은 예산*/></BudgetTotal> 
    </div>
  );
}

export default App;

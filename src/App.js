import React,{useState,useCallback} from 'react';
import './App.css';
import BudgetSetter from './components/BudgetSetter';
import BudgetController from './components/BudgetController';
import BudgetCategoryList from './components/BudgetCategoryList';
import BudgetTotal from './components/BudgetTotal';

function App() {
 const [TotalBudget,setTotalBudget]=useState(0);
 const [budgetUseageInfo,setbudgetUseageInfo]=useState([
   {
    category:"밥먹기",
    items:[{useage:'김치찌개',cost:1000},{useage:'돈까스',cost:1200},{useage:'된장찌개',cost:1400},],
    used:0
   },
   {
    category:"옷사기",
    items:[{useage:'바지',cost:1000}],
    used:0
   }
  ]);
 const SubmitBudget=useCallback((budget)=>{
   setTotalBudget(budget);
},[TotalBudget]);
  return (
    <div className="App">
      <BudgetSetter SubmitBudget={SubmitBudget} /*총예산 관리 컴포넌트*/></BudgetSetter >
       <BudgetController /*카테고리별 예산관리, 사용내역 추가 컴포넌트*/></BudgetController >
      <BudgetCategoryList BudgetCategorys={budgetUseageInfo} /* 카테고리 리스트(카테고리(사용내역))*/></BudgetCategoryList >
      <BudgetTotal TotalBudget={TotalBudget} /*현제 남은 예산*/></BudgetTotal> 
    </div>
  );
}

export default App;

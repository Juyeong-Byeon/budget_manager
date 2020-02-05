import React,{useState,useCallback} from 'react';
import './App.css';
import BudgetSetter from './components/BudgetSetter';
import BudgetController from './components/BudgetController';
import BudgetCategoryList from './components/BudgetCategoryList';
import BudgetTotal from './components/BudgetTotal';

function App() {
 const [TotalBudget,setTotalBudget]=useState(0);
 const [budgetUseageInfos,setbudgetUseageInfo]=useState([
   
  
  ]);

 const CategoryAdd=useCallback((newCategory)=>{
  if(!newCategory){
    console.log('null!');
    return;
  }
  if(budgetUseageInfos.find((c)=>c.category===newCategory)){
    alert('이미 있는 카테고리 입니다.');
    return;
  }
   
  setbudgetUseageInfo(budgetUseageInfos.concat(
    {
      category:newCategory,
      items:[],
      used:0
     }
  ));


 },[budgetUseageInfos]);

 const ItemAdd=useCallback(({itemCategory,itemUsage,itemCost})=>{//item==={itemCategory:'',itemUseage:'',itemCost:0};
  
        
        if(!(itemCategory&&itemUsage&&itemCost)){
          alert('입력폼을 확인해 주세요!');
          //console.log(itemCategory,itemUsage,itemCost);
          return -1;
        }
        const date=new Date();
        
        setbudgetUseageInfo(()=>
          budgetUseageInfos.map((useageInfo,index)=>{//카테고리가 같은 것만 수정함.
            if(useageInfo.category===itemCategory){
              return {
                ...useageInfo,
                items:useageInfo.items.concat({itemCategory:itemCategory,useage:itemUsage,cost:itemCost,date:date}),
                used:Number(useageInfo.used)+Number(itemCost),
              
              }
            }else{
              return useageInfo;
            }
          })
        );
  
 
  //infos.items
  //arr.find 함수 써서 하면 될듯

  console.log(budgetUseageInfos);
  

 },[budgetUseageInfos]);

 const SubmitBudget=useCallback((budget)=>{
   setTotalBudget(budget);
  },[TotalBudget]);

  const DeleteCategory=useCallback((category)=>{
    setbudgetUseageInfo(
      budgetUseageInfos.filter((c)=>{return (!c.category===category) })
    );
  },[budgetUseageInfos]);
  
  const DeleteItem=useCallback((category,item)=>{
   
    
    setbudgetUseageInfo(
      budgetUseageInfos.map((useageInfo,i)=>{
        if(useageInfo.category===category){
          return {
            ...useageInfo,
            items:useageInfo.items.filter((e)=>e.date!==item.date),
            used:Number(useageInfo.used)-Number(useageInfo.items.find((e)=>e.date===item.date).cost)
          }
          
        }else{
          return useageInfo;
        }
      })
      );
    
    console.log(budgetUseageInfos);
    
  },[budgetUseageInfos]);

  return (
    <div className="App">
      <BudgetSetter SubmitBudget={SubmitBudget} /*총예산 관리 컴포넌트*/></BudgetSetter >
       <BudgetController CategoryAdd={CategoryAdd} ItemAdd={ItemAdd} Categorys={budgetUseageInfos} /*카테고리별 예산관리, 사용내역 추가 컴포넌트*/></BudgetController >
      <BudgetCategoryList DeleteItem={DeleteItem} BudgetCategorys={budgetUseageInfos} DeleteCategory={DeleteCategory}/* 카테고리 리스트(카테고리(사용내역))*/></BudgetCategoryList >
      <BudgetTotal TotalBudget={TotalBudget}  BudgetUseageInfos={budgetUseageInfos} /*현제 남은 예산*/></BudgetTotal> 
    </div>
  );
}

export default App;

import React,{useState,useCallback,useEffect} from 'react';
import './App.css';
import BudgetSetter from './components/BudgetSetter';
import BudgetController from './components/BudgetController';
import BudgetCategoryList from './components/BudgetCategoryList';
import BudgetTotal from './components/BudgetTotal';

function App() {
 const [totalBudget,setTotalBudget]=useState(0);
 const [budgetUsageInfos,setbudgetUseageInfo]=useState([]);

//  const saveInfos=()=>{

//   localStorage.setItem('TotalBudget',JSON.stringify(TotalBudget));
//   localStorage.setItem('budgetUsageInfos',JSON.stringify(budgetUsageInfos));

//  } 
// console.log(
//  localStorage.getItem('TotalBudget'),
//  localStorage.getItem('budgetUsageInfos')
// )
//   const loadInfos=()=>{

//     setTotalBudget(JSON.parse(localStorage.getItem('TotalBudget')));
//     setbudgetUseageInfo(JSON.parse(localStorage.getItem('budgetUsageInfos')));


//   } 

//  useEffect(()=>{
//    saveInfos()
//  },[TotalBudget,budgetUsageInfos]);
//   useEffect(()=>{
//   if(TotalBudget===0||budgetUsageInfos===[])
//    loadInfos();
    
//   },[])

 const addCategory=useCallback((newCategory)=>{
  if(!newCategory){
    console.log('null!');
    return;
  }
  if(budgetUsageInfos.find((c)=>c.category===newCategory)){
    alert('이미 있는 카테고리 입니다.');
    return;
  }
   
  setbudgetUseageInfo(budgetUsageInfos.concat(
    {
      category:newCategory,
      items:[],
      used:0
     }
  ));


 },[budgetUsageInfos]);

 const addItem=useCallback(({itemCategory,itemUsage,itemCost})=>{//item==={itemCategory:'',itemUseage:'',itemCost:0};
  
        
        if(!(itemCategory&&itemUsage&&itemCost)){//폼이 모두 차있지 않으면 alert후 종료
          alert('입력폼을 확인해 주세요!');
          //console.log(itemCategory,itemUsage,itemCost);
          return -1;
        }
        const date=new Date();
        
        setbudgetUseageInfo(()=>
          budgetUsageInfos.map((useageInfo,index)=>{//카테고리가 같은 것만 수정함.
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

  console.log(budgetUsageInfos);
  

 },[budgetUsageInfos]);

 const submitBudget=useCallback((budget)=>{
   setTotalBudget(budget);
  },[totalBudget]);

  const deleteCategory=useCallback((category)=>{
    setbudgetUseageInfo(
      budgetUsageInfos.filter((c)=>!(c.category===category))
    );

  
  },[budgetUsageInfos]);
  
  const deleteItem=useCallback((category,item)=>{
   
    
    setbudgetUseageInfo(
      budgetUsageInfos.map((useageInfo,i)=>{
        if(useageInfo.category===category){
          return {
            ...useageInfo,
            items:useageInfo.items.filter((e)=>e.date!==item.date),
            used:useageInfo.used-useageInfo.items.find((e)=>e.date===item.date).cost
          }
          
        }else{
          return useageInfo;
        }
      })
      );
    
    console.log(budgetUsageInfos);
    
  },[budgetUsageInfos]);

  return (
    <div className="App">
      <h1>Budget manager</h1>
      <hr/>
      <BudgetSetter submitBudget={submitBudget} /*총예산 관리 컴포넌트*//>
       <BudgetController addCategory={addCategory} addItem={addItem} categorys={budgetUsageInfos} /*카테고리별 예산관리, 사용내역 추가 컴포넌트*//>
      <BudgetCategoryList deleteItem={deleteItem} budgetCategorys={budgetUsageInfos} deleteCategory={deleteCategory}/* 카테고리 리스트(카테고리(사용내역))*//>
      <BudgetTotal totalBudget={totalBudget}  budgetUsageInfos={budgetUsageInfos} /*현제 남은 예산*//>
    </div>
  );
}

export default App;

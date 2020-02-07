import React,{useState,useCallback} from 'react'

export default function BudgetSetter({submitBudget}) {
    const [budget,setInputBudget]=useState(0);
    const [BudgetSetup,ToggleBudgetSetup]=useState(true);
    

    const budgetInputChange=useCallback((e)=>{
        const inputText=e.target.value;
        if(isNaN(inputText)){
            alert('You need to input numbers!');
            return;
        }
        setInputBudget(inputText);
    },[budget]);

    
    const onKeyPress=(e)=>{
           if(e.charCode===13){
            const inputText=e.target.value;
            ToggleBudgetSetup(!BudgetSetup);
            submitBudget(inputText);
           }
    };
    
    return (
        <div>
            <span><b>BUDGET:</b></span>
            {BudgetSetup?<input type='text' placeholder='Set your total budget' value={budget} onChange={budgetInputChange} onKeyPress={onKeyPress}></input>:""}
            <button onClick={()=>{ToggleBudgetSetup(!BudgetSetup);submitBudget(budget)}}>{BudgetSetup?"Set!":"Change"}</button>
        </div>
    )
}

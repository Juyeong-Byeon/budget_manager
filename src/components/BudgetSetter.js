import React,{useState,useCallback} from 'react'

export default function BudgetSetter({SubmitBudget}) {
    const [budget,setInputBudget]=useState(0);

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
            SubmitBudget(inputText);
           }
    };
    
    return (
        <div>
            <span><b>BUDGET:</b></span>
            <input  type='text' placeholder='Set your total budget' value={budget} onChange={budgetInputChange} onKeyPress={onKeyPress}></input>
            <button onClick={()=>{SubmitBudget(budget)}} >Set!</button>
        </div>
    )
}

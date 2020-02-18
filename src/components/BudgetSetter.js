import React,{useState,useCallback} from 'react';
import '../scss/bootstrap.scss';

export default function BudgetSetter({submitBudget}) {
    const [budget,setInputBudget]=useState(0);
    const [BudgetSetup,ToggleBudgetSetup]=useState(false);
    

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
        <section>
            <span><b>BUDGET:</b></span>
            {BudgetSetup?<input type='text' placeholder='Set your total budget' value={budget} onChange={budgetInputChange} onKeyPress={onKeyPress}></input>:""}
            <button className='btn btn-primary' onClick={()=>{ToggleBudgetSetup(!BudgetSetup);submitBudget(budget)}}>{BudgetSetup?"Set!":"Change"}</button>
        </section>
    )
}

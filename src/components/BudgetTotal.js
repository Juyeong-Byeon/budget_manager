import React from 'react'

export default function BudgetTotal({TotalBudget,BudgetUseageInfos}) {

    let used=0;
    for(let i=0;i<BudgetUseageInfos.length;i++){
        used+=BudgetUseageInfos[i].used;
    }
  
    return (
        <div style={{margin:'3rem'}}>
            <h2>Left budget: {TotalBudget-used} 원</h2>
        </div>
    )
}

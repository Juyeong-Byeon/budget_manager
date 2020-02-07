import React from 'react'

export default function BudgetTotal({totalBudget,budgetUsageInfos}) {
    const used = budgetUsageInfos.reduce((crnt, { used }) => crnt + used, 0);
  
    return (
        <div >
            <h2 style={{margin:'0.2rem'}} >Left budget: {totalBudget-used} 원</h2>
            <h3 style={{margin:'0.1rem'}}>{totalBudget-used>=0?"":"예산초과!"}</h3>
        </div>
    )
}

import React from 'react'
import '../scss/bootstrap.scss';
export default function BudgetTotal({totalBudget,budgetUsageInfos}) {
    const used = budgetUsageInfos.reduce((crnt, { used }) => crnt + used, 0);
  
    return (
        <section>
            <h2>Left budget: {totalBudget-used} 원</h2>
            <h3>{totalBudget-used>=0?"":"예산초과!"}</h3>
        </section>
    )
}

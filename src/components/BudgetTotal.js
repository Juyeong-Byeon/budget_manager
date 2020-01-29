import React from 'react'

export default function BudgetTotal({TotalBudget}) {
    return (
        <div style={{margin:'3rem'}}>
            <h2>Left budget: {TotalBudget} 원</h2>
        </div>
    )
}

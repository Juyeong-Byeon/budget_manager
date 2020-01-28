import React from 'react'
import BudgetItem from './BudgetItem';

export default function BudgetCategory({Category}) {
    return (
        <div>
            <div>
                <h3>Category:{Category?"":Category}</h3>
            </div>
            <div>
                <BudgetItem></BudgetItem>
            </div>
        </div>
    )
}

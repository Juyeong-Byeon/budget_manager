import React from 'react'
import BudgetCategory from './BudgetCategory';

export default function BudgetCategoryList({BudgetCategorys}) {
    return (
        <div>
            {BudgetCategorys&&BudgetCategorys.map((Category,i)=>{return(<BudgetCategory key={i} Category={Category}></BudgetCategory>)})}
        </div>
    )
}

import React from 'react'
import BudgetCategory from './BudgetCategory';

export default function BudgetCategoryList({BudgetCategorys,DeleteCategory}) {
    return (
        <div style={{ overflowY:'scroll', height:'18rem', backgroundColor:'rgba(40,40,40,0.8)'}}>
            {BudgetCategorys&&BudgetCategorys.map((Category,i)=>{return(<BudgetCategory key={Category.category} Category={Category} DeleteCategory={DeleteCategory}></BudgetCategory>)})}
        </div>
    )
}

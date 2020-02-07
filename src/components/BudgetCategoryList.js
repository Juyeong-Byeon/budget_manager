import React from 'react'
import BudgetCategory from './BudgetCategory';

export default function BudgetCategoryList({budgetCategorys,deleteCategory,deleteItem}) {
    return (
        <div style={{ overflowY:'scroll', height:'18rem', backgroundColor:'rgba(40,40,40,0.8)'}}>
            {budgetCategorys&&budgetCategorys.map((budgetcategory,i)=><BudgetCategory deleteItem={deleteItem} key={budgetcategory.category} budgetcategory={budgetcategory} deleteCategory={deleteCategory}/>)}
        </div>
    )
}

import React from 'react'
import BudgetCategory from './BudgetCategory';
import '../scss/bootstrap.scss';

export default function BudgetCategoryList({budgetCategorys,deleteCategory,deleteItem}) {
    return (
        <div style={{ margin:'2rem',overflowY:'scroll', height:'250px'}}>
            {budgetCategorys&&budgetCategorys.map((budgetcategory,i)=><BudgetCategory deleteItem={deleteItem} key={budgetcategory.category} budgetcategory={budgetcategory} deleteCategory={deleteCategory}/>)}
        </div>
    )
}

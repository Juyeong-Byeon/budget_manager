import React from 'react'
import BudgetItem from './BudgetItem';

export default function BudgetCategory({Category}) {
    console.log(Category.category);
    return (
        <div>
            <div>
                <h3>Category:{Category?Category.category:""}</h3>
            </div>
            <div>
                <BudgetItem></BudgetItem>
            </div>
        </div>
    )
}

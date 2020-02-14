import React from 'react'
import BudgetItem from './BudgetItem';
import '../scss/bootstrap.scss';

export default function BudgetCategory({budgetcategory,deleteCategory,deleteItem}) {
    
    const {category,items}=budgetcategory;
    
    const handleDeleteCategory=(e)=>{deleteCategory(category)};
    return (
        <div className='card bg-light mb-3 text-dark'>
            <div>
                <span className='card-header'>category : {category?category:""}</span>
                <span ><button className='btn btn-danger btn-sm ' onClick={handleDeleteCategory}>X</button></span>
            </div >
            <div className='card-body'>
                {items&&items.map((item,i)=><BudgetItem deleteItem={deleteItem}  key={i} item={item} category={category}/>)}
            </div>
        </div>
    )
}

import React from 'react'
import BudgetItem from './BudgetItem';

export default function BudgetCategory({budgetcategory,deleteCategory,deleteItem}) {
    
    const {category,items}=budgetcategory;
    
    const handleDeleteCategory=(e)=>{deleteCategory(category)};
    return (
        <div style={{ borderColor:'white', borderStyle:'solid', borderRadius:'0.4rem', backgroundColor:'rgba(5,5,5,0.1)',margin:'1rem'}}>
            <div>
                <span style={{textAlign:"center",margin:'auto'}}>category : {category?category:""}</span>
                <span ><button onClick={handleDeleteCategory} style={{width:'20px', height:'20px',textAlign:"center",marginLeft:'1rem',marginRight:'0',backgroundColor:'red',padding:0}}>X</button></span>
            </div>
            <div>
                {items&&items.map((item,i)=><BudgetItem deleteItem={deleteItem}  key={i} item={item} category={category}/>)}
            </div>
        </div>
    )
}

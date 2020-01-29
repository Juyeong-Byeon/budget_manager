import React from 'react'
import BudgetItem from './BudgetItem';

export default function BudgetCategory({Category}) {
    
    const {category,items}=Category;
    console.log(category);
    return (
        <div style={{borderWeight:'3rem', borderColor:'white', borderStyle:'solid', borderRadius:'1rem', backgroundColor:'rgba(5,5,5,0.1)',margin:'1rem'}}>
            <div>
                <h3>Category : {Category?category:""}</h3>
            </div>
            <div>
                {Category&&items.map((item,i)=>{return(<BudgetItem key={item.useage} item={item}></BudgetItem>)})}
            </div>
        </div>
    )
}

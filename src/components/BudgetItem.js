import React, { useEffect } from 'react'

export default function BudgetItem({item,DeleteItem}) {
    const{useage,cost}=item;
    return (
        <div>
             <hr/>
            <span>{useage}:</span>
            <span> -{cost}</span>
            <span ><button style={{width:'20px', height:'20px',textAlign:"center",marginLeft:'1rem',marginRight:'0',backgroundColor:'red',padding:0}}>X</button></span>
           
        </div>
    )
}

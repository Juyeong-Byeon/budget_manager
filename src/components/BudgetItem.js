import React, { useEffect } from 'react'

export default function BudgetItem({item,deleteItem,category}) {
    const{useage,cost,date}=item;
    console.log(typeof(date));
    return (
        <div>
             <hr/>
            <span>{useage}:</span>
            <span> -{cost}</span>
            <br/>
            <br/>
            <span>{`${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`}</span>
            <br/>
            <span ><button onClick={()=>deleteItem(category,item)} style={{width:'20px', height:'20px',textAlign:"center",marginLeft:'1rem',marginRight:'0',backgroundColor:'red',padding:0}}>X</button></span>
        </div>
    )
}

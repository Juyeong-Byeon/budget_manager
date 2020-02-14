import React, { useEffect } from 'react'
import '../scss/bootstrap.scss';

export default function BudgetItem({item,deleteItem,category}) {
    const{useage,cost,date}=item;
    console.log(item);
    return (
        <div className='container'>
             <hr/>
            <span>{useage}:</span>
            <span> -{cost}</span>
            <br/>
            <br/>
            <span>{date&&`${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`}</span>
            <br/>
            <span ><button className='btn btn-danger btn-sm' onClick={()=>deleteItem(category,item)}>X</button></span>
        </div>
    )
}

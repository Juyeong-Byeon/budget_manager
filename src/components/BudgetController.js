import React,{useState} from 'react'

export default function BudgetController({Categorys,CategoryAdd}) {
    const [newCategoryInput,setNewCategoryInput]=useState('');
    
    const newCategoryOnchange=(e)=>{
        setNewCategoryInput(e.target.value);
    };
    
    return (
        <div style={{backgroundColor:'#192F5E',height:'300px',width:'90%',marginLeft:"auto",marginRight: 'auto',borderRadius:'10px',marginTop:'4rem'}}>
            <span>ADD category: <input type='text' value={newCategoryInput} onChange={(e)=>{newCategoryOnchange(e)}}></input> <button onClick={()=>{console.log('set');setNewCategoryInput('')}}>ADD</button></span>
            <hr/>
            <div>
                <span>
                        <label htmlFor="selectCategory">Category : </label>
                        <select id='selectCategory'>
                           {Categorys&&Categorys.map((category,index)=>{return(<option key={index}>{category.category}</option>)})}
                        </select>
                </span>
                    <hr/>
                <label htmlFor='usage'> Usage : </label><input id='usage' type='text'></input>
                    <hr/>
                <label>Cost : </label><input id='Cost' type='text'></input>
                    <hr/>
                <button style={{marginTop:'2rem'}}>ADD</button>
            </div>
        </div>
    )
}

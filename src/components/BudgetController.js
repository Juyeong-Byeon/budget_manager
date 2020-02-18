import React,{useState} from 'react'
import '../scss/bootstrap.scss';

export default function BudgetController({categorys,addCategory,addItem}) {
    const [newCategoryInput,setNewCategoryInput]=useState('');// 카테고리 생성용 state
    const [currentItem,setItem]=useState({
            itemCategory:'',
            itemUsage:'',
            itemCost:0
    });//한번에 State 관리 하는 방법 생각해 보기
    
    const newCategoryOnchange=(e)=>{setNewCategoryInput(e.target.value);};

    
    return (
        <section>
        <div className='container '>
            <span >ADD category: <input type='text' value={newCategoryInput} onChange={(e)=>{newCategoryOnchange(e)}} onKeyPress={
                (e)=>{if(e.charCode===13){addCategory(newCategoryInput);setNewCategoryInput('')}}
                }></input>
                <button className='btn btn-primary' onClick={()=>{addCategory(newCategoryInput);setNewCategoryInput('')}}
                >ADD</button>
            </span>
            <hr/>
            <div>
                <span>
                        <label className='col-form-label' htmlFor="selectCategory">Category : </label>
                        <select className=''  id='selectCategory' onChange={(e)=>setItem({...currentItem,itemCategory:e.target.value})} value={currentItem.itemCategory}>
                            <option key='default'>선택</option>
                           {categorys&&categorys.map((category,index)=>{return(<option key={category.category}>{category.category}</option>)})}
                        </select>
                </span>
                    <hr/>
                <label className='col-form-label' htmlFor='usage'> Usage : </label>
                <input id='usage' type='text' value={currentItem.itemUsage} onChange={(e)=>setItem({...currentItem,itemUsage:e.target.value})}></input>
                    <hr/>
                <label className='col-form-label'>Cost : </label>
                <input id='Cost' type='text' value={currentItem.itemCost}
                    onKeyPress={(e)=>{
                            if(e.charCode===13){
                                if(addItem(currentItem)===-1)return;
                                setItem(()=>{return{itemCategory:'',itemUsage:'',itemCost:0}})
                            }
                            else{
                                return;
                            }
                        }
                    } 
                    onChange={(e)=>{
                        if(isNaN(e.target.value)){
                            alert('숫자를 입력해 주세요!');
                            return;
                        }
                        setItem({...currentItem,itemCost:Number(e.target.value)})
                    }}
                    ></input>
                    <hr/>
                <button className='btn btn-primary btn-lg btn-block' 
                onClick={(e)=>{
                    if(addItem(currentItem)===-1)return;
                    setItem(()=>{return{itemCategory:'',itemUsage:'',itemCost:0}})
                }
                    }
                    >ADD</button>
            </div>
        </div>
        </section>
    )
}

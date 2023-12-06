import { useState,memo,useCallback,useMemo,useRef } from "react";
import ContentMemo from "./ContentMemo";

// 1. memo() => higher order component (HOC)
// 2. useCallBack()
    // - Reference types
    // - React memo()

function AppMemo(){
    const [count,setCount]=useState(0)

    const [name,setName]=useState('');
    const [price,setPirce]=useState('');
    const [products,setProducts]=useState([]);
    const nameRef=useRef();
    const handleIncrease = useCallback(()=>{
        setCount(prevCount=>prevCount+1)   
       },[])

    const handleSubmit=()=>{
            setProducts([...products,{
                name,
                price:+price
            }])
            setName('')
            setPirce('')
            nameRef.current.focus();
    }
    var total=useMemo(() =>{
        const result=products.reduce((result,prod) => {
            console.log('tính toán lại ...');
            return result+prod.price
        },  0)
        return result
    },[products])
    return (
        <div>
            <ContentMemo onIncrease={handleIncrease}/>
            <h1 >{count}</h1>
            <div style={{padding:'10px 32px'}}>
                <input
                ref={nameRef}
                    value={name}
                    placeholder="Enter name ..."
                    onChange={e=>setName(e.target.value)}
                />
                <br/>
                <input
                    value={price}
                    placeholder="Enter price ..."
                    onChange={e=>setPirce(e.target.value)}
                />
                <br/>
                <button onClick={handleSubmit}>Add</button>
                <br/>
                Total: {total}
                <ul>
                    {products.map((product,index)=>(
                        <li key={index}>{product.name} - {product.price}</li>
                    ))}
                </ul>
            </div>
        </div>
         
       );
}

export default AppMemo;
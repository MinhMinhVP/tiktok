import { useState,memo,useCallback } from "react";
import ContentMemo from "./ContentMemo";

// 1. memo() => higher order component (HOC)
// 2. useCallBack()
    // - Reference types
    // - React memo()

function AppMemo(){
    const [count,setCount]=useState(0)
    const handleIncrease = useCallback(()=>{
        setCount(prevCount=>prevCount+1)   
       },[])
    return (
        <div>
            <ContentMemo onIncrease={handleIncrease}/>
            <h1 >{count}</h1>
        </div>
         
       );
}

export default AppMemo;
import { useState ,useRef,useEffect} from "react";
import Content2  from "./Content2.js"


// useRef
// Lưu các giá trị qua 1 tham chiếu bên ngoài
// function component
function App2() {
  const [show,setShow]=useState(false)
  const [count2,setCount2]=useState(60)

  const ref=useRef(99)

  const timerId=useRef()
  const prevCount=useRef()
  const h1Ref=useRef()

  useEffect(()=>{
    prevCount.current=count2
  },[count2])

  useEffect(()=>{
    console.log(h1Ref.current);
  })

  const handleStart = () =>{
    timerId.current=setInterval(()=>{
        setCount2(prevCount => prevCount-1)
        console.log('start - '+timerId.current)
    },1000)
  }
  const handleStop = () =>{
    clearInterval(timerId.current)
    console.log('stop - '+timerId.current)
  }
  console.log(count2,prevCount.current);
      return (
       <div>
        <button onClick={()=>setShow(!show)}>Toggle</button>
        {show && <Content2/>}

        <br></br><hr></hr>
        <h1 ref={h1Ref}>{count2}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
       </div>
        
      );
    }
    
export default App2;
    
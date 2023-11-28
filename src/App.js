import { useState } from "react";

const orders=[100,200,300];


function App() {
const total=orders.reduce((total,cur) => total+cur)
  const [counter,setCounter]=useState(total);
  const handleIncrease=()=>{
    //setCounter(counter+1)
    //setCounter(prevState=>prevState+1);
    //setCounter(prevState=>prevState+1);
    setCounter(prevState=>prevState+1);
  }

  const [infor,setInfo]=useState({
    name:'Nguyễn Văn A',
    age:12,
    address:'Ha Noi - VN'
  })
  const handleUpdate=()=>{
    setInfo({
      ...infor,
      bio:"Test"
    })
  }
  return (
    <div className="App" style={{padding:20}}>
      <h1>{counter}</h1>
      
      <button onClick={handleIncrease}>Increase</button>
      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;

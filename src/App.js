import { useState } from "react";
import {Content} from "./Content";

const orders=[100,200,300];

const gifts=["CPU","RAM","ROM"]

// response from API
const courses=[
  {id:1,name:'HTML, CSS'},
  {id:2,name:'HJavascript'},
  {id:3,name:'ReactJS'},
]
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

  const [gift,setGift]=useState()
  const randomGift=()=>{
    const index=Math.floor(Math.random()* gifts.length);
    setGift(gifts[index])
  }

  const [ name,setName]=useState('')
  const [ email,setEmail]=useState('')
  const handleSubmit=()=>{
    //Call api
    console.log({
      name,
      email
    })

  }
  const handleSubmit2=()=>{
    console.log({
      id:checked
    })
  }
  //console.log(name);

  const [checked,setChecked]=useState()
  ///console.log(checked);
  const [checkedbox,setCheckedbox]=useState([])
  const handleCheckbox=(id)=>{
    setCheckedbox(prev=>{
      const isChecked=checkedbox.includes(id)
      if(isChecked){
        //uncheck
        return checkedbox.filter(item =>item !==id)
      }else{
        return [...prev,id]
      }
    })
  }
  const handleSubmit3=()=>{
    console.log({
      ids:checkedbox
    })
  }
  console.log(checkedbox);
  /////////////////////////////////////////
  
  const [job,setJob]=useState('')
  const [jobs,setJobs]=useState(()=>{

    const storageJobs=JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? []
  }) // trường hợp alf null thì là  []
  const handleAdd=()=>{
    setJobs(prev=>{
      const newJobs=[...prev,job]
      const josnJobs=JSON.stringify(newJobs)
      localStorage.setItem('jobs',josnJobs)
      return [...prev,job]
    })
    setJob('')

  }
  return (
    <div className="App" style={{padding:20}}>
      <h1>{counter}</h1>
      
      <button onClick={handleIncrease}>Increase</button>
      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleUpdate}>Update</button>
      <hr>
      </hr>
      <h1>{gift||'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}> LẤy thưởng</button>
      <hr>
      </hr>
      <input onChange={e=>setName(e.target.value)} value={name}/>
      <input onChange={e=>setEmail(e.target.value)} value={email}/>

      <button onClick={handleSubmit}>Register</button>
      <hr></hr>
      <br></br>
      {
        courses.map(course => (
          <div key={course.id}>
              <input type="radio"
                checked={checked===course.id}
                onChange={()=>setChecked(course.id)}
               />
              {course.name}
          </div>
        ))
      }
            <button onClick={handleSubmit2}>Register</button>
      <hr></hr>
      <br></br>
      {
        courses.map(course => (
          <div key={course.id}>
              <input type="checkbox"
                checked={checkedbox.includes(course.id)}
                onChange={()=>handleCheckbox(course.id)}
               />
              {course.name}
          </div>
        ))
      }
      <button onClick={handleSubmit3}>Register</button>

      <hr></hr>
      <br></br>
      <input value={job} onChange={e=>setJob(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
          {
            jobs.map((job, index)=>(
              <li key={index}>{job}</li>
            ))
          }
      </ul>
      <hr></hr>
      <br></br>
      <Content/>
    </div>
    
  );
}

export default App;

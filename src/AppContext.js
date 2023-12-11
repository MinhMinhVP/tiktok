import { useContext } from "react"
import Content from "./Content3"
import {ThemeContext } from "./ThemeContext"
import './App.css'

// Context
// CompA => CompB => CompC

// 1. Create context

// 2. Provider
// 3. Comsumer 

//Theme : Dark/Light 
function App(){
    const context=useContext(ThemeContext)   

    return(
       
            <div style={{padding:20}}>
                <button onClick={context.toggleTheme}>Toogle theme</button>
                <Content />
            </div>
      
    )
}

export default App
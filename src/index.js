import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import AppMemo from './AppMemo';
import AppReducer from './AppReducer';
import AppReducerTodoApp from './AppReducerTodoApp';
import reportWebVitals from './reportWebVitals';
import AppContext from './AppContext';
import { ThemeProvider } from './ThemeContext';
import AppGlobal from './AppGlobal';
import {StoreProvider} from './store';
import AppImperativeHandle from './AppImperativeHandle';
import AppCSS from './AppCSS';
import AppCLSX from './AppCLSX'; 
import AppPage from './AppPage'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
function emitComment(id){
  setInterval(()=>{
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail:`Noi dung commnet cua lessson ${id}`
      })
    )
  },2000)
}
emitComment(1)
emitComment(2)
emitComment(3)
root.render(
  //<React.StrictMode>
  //<ThemeProvider>
  //  <AppContext />
   // </ThemeProvider>
  //</React.StrictMode>
  <Router>
    <AppPage/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

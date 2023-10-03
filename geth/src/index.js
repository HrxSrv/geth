import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './login.css';
import './register.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./Login";
import Regsiter from "./Register"
import Account from "./Account"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element ={<Regsiter/>}/>
        <Route path='/account' element ={<Account/>}/>
        <Route path = "/" element={<App/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

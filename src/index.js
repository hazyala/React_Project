import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import SignUp from "./chp11/SignUp";
import ConfirmDialogs from "./chp04/ConfirmDialogs";
import ConfrimBoilVerdict from "./chp12/ex1/ConfrimBoilVerdict";
import ConfrimBoilVerdict_in_css from "./chp12/ex1/ConfrimBoilVerdict_in_css";


const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ConfrimBoilVerdict_in_css/>
        </React.StrictMode>
    );







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

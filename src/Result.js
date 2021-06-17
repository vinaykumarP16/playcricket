import React,{useContext,useState} from 'react';
import {finaltotal} from './Bowl.js';

const Result = (props) => {
    
    const[win,setWin]=useState('');

    const first=useContext(finaltotal);
    const second=props.total;

  
  return (
    <div className="result">
        <h2 
            style={{display:(second>0?"block":"hidden")}}>
            {first>second ? 'human won' : "computer won"}
        </h2>
    </div>
  )
}

export default Result;
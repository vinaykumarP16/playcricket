import React,{useState} from 'react';
import './App.css';

import Bowl from './Bowl.js';


const Bat = (props) => {
    const[balls,setBalls]=useState('12');
    const[runs,setRuns]=useState([]);
    const[status,setStatus]=useState('');
    const[total,setTotal]=useState('');

    const batt=()=>{
        
        if(balls==0){
            setStatus('no balls remaining');
            console.log(runs);
            setTotal(runs.reduce((prev,curr)=>prev+curr)+ 1)
        }else{
            setBalls(balls-1);
            setRuns([...runs,Math.floor(Math.random()*6)+ 1])  
            console.log(runs);
        }
    }



  return (
    <div className="Bat">
    <h1>Bat first</h1>
       <div className="bt">
       <h3>Balls :  {balls}</h3>
       <h3>Total :  {runs.length==0 
                     ? "no runs" :
                    runs.reduce((prev,curr)=>prev+curr)}</h3>
               
        <h3>final total to win : {total>0 ? total :'no runs yet'}</h3>
        <button onClick={batt}>Batt</button>
        
        <Bowl total={total}/>
        
        </div>
    </div>
  )
}

export default Bat;
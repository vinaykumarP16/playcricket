import React,{useState,createContext} from 'react';
import Result from './Result.js';
import './App.css';

export const finaltotal=createContext();

const Bowl = (props) => {
    const playertot=(props.total);
    const[balls,setBalls]=useState('12');
    const[runs,setRuns]=useState([]);
    const[status,setStatus]=useState([]);
    const[total,setTotal]=useState('');
    const[result,setResult]=useState('');

    const batt=()=>{
        
        if(balls==0){
            setStatus('no balls remaining ');
            console.log(runs);
            setTotal(runs.reduce((prev,curr)=>prev+curr))
            
                      
        }else{
            setBalls(balls-1);
            setRuns([...runs,Math.floor(Math.random()*6)+ 1])
            console.log(runs);
            if(total>playertot){
                setStatus("you won")
            }else{
                setStatus("")
            }
           
        }

    }





  return (
    
    <div className="Ball">
        <h1>Defend total</h1>
        <h3>Balls : {balls}</h3>
        <h3>Total : {runs.length==0 
            ? "no runs yet" :
            runs.reduce((prev,curr)=>prev+curr)}
            </h3>
         <h3 style={{color:'blue'}} >{status}</h3>  
         <h5>{`computer need ${playertot-total} runs to win`}</h5>
        <button onClick={batt}>Ball</button>
        <finaltotal.Provider value={playertot}>
        <Result total={total}/>
        </finaltotal.Provider>

    </div>
  )
}

export default Bowl;
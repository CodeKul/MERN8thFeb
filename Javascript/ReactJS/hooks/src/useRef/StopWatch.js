import React, { useState,useRef } from 'react'

function StopWatch() {
    const[counter,setCounter]=useState(0)
    const lapseRef = useRef(0)
    const startCounter=()=>{
      lapseRef.current= setInterval(()=>{
            setCounter(c=>c+1)
        },1000)
      console.log(lapseRef.current)  
    }

    const pauseCounter=()=>{
        clearInterval(lapseRef.current)
        lapseRef.current =0 
        console.log(lapseRef.current)
    }

    const resetCounter=()=>{
        clearInterval(lapseRef.current)
        setCounter(0)
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={startCounter}>Start</button>
            <button onClick={pauseCounter}>Pause</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}

export default StopWatch

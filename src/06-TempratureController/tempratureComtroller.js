import React, { useEffect, useState } from 'react'
import './tempratureController.css'
export default function TempratureComtroller() {
    const val = 10;
    const [temp,setTemp] = useState(20);
    const [colr , setColr] = useState({
        R : 0,
        B: 60
    });

    const increment = ()=>{
        if (colr.R < 255-val){
            setColr((prevColr) => ({
                R: prevColr.R + val,
                B: prevColr.B - val,
              }));
        }
        setTemp(temp+1);
    }

    const decrement = ()=>{
        if (colr.B < 255-val){
            setColr((prevColr) => ({
                R: prevColr.R - val,
                B: prevColr.B + val,
              }));
        }
        setTemp(temp+1);
    }
    useEffect(()=>{
        if(colr.R < 0){
            setColr((prevColr) => ({
                R: 0,
                B: prevColr.B,
              }));
        }

        if(colr.B < 0){
            setColr((prevColr) => ({
                R: prevColr.R,
                B: 0,
              }));
        }
    })
  return (
    <div className='tempratureController_container'>
        <div className="circle" style={{backgroundColor: `rgb(${colr.R}, 0, ${colr.B})`,}}>
            <label className='temp_lbl'>{temp}</label>
            <label className="degree">o</label>
            <label className='temp_lbl'>C</label>

        </div>
        <button className="increase_temp control_btn" onClick={increment}>
            +
        </button>
        <button className="decrease_temp control_btn" onClick={decrement}>
            -
        </button>
    </div>
  )
}

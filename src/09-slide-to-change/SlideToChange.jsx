import React, { useState } from 'react'
import Slider from './Slider.jsx'

export default function SlideToChange() {
    const [count,setCount] = useState(0);
    const bg = 'black';
    const c = 'red';
    
  return (
    <div style={{
        margin:'-10px',
        padding:'0',
        width:'100vw',
        height:'100vh',
        backgroundColor:'#C2DEDC',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around'
    }}>
        <Slider  counter={setCount}/>
        <div style={{
            width:`${count+20}px`,
            height:`${count+20}px`,
            backgroundColor:bg,
            color:c,
            borderRadius:`${count+20}px`,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
           {count}%
        </div>
    </div>
  )
}

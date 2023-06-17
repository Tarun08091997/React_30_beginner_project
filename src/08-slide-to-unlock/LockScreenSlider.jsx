import React, { useEffect, useRef, useState } from 'react'

export default function LockScreenSlider({screenOn , setUnlockScreen}) {

    const [enter,setEnter] = useState(false);
    const [click,setClick] = useState(false);
    const [brightness,setBrightness] = useState('0');
    const [posX , setPosX] = useState(2);

    const slide_bar = useRef(null);
    
    const slideBar_STYLE={
        width:'200px' , height:'40px',
        backgroundColor:`rgba(0,0,0,${screenOn ? '0.3':'0'})`,
        position:'absolute',
        top:'325px',left:'50%',
        transform:'translateX(-50%)',
        outline:'none', border:'none',
        borderRadius:'20px',
        transition:'backgroundColor 0.5s',
    }

    const slider_STYLE = {
        backgroundColor:`rgba(255,255,255,${brightness})`,
        width:`40px`, height:`40px`,
        border:'none',outline:'none',
        borderRadius:'20px', marginLeft:`${posX}px`,
    }


    

    useEffect(()=>{
        if(!screenOn){
            setBrightness(0);
        }
        if(screenOn && !enter){
            setBrightness('0.4');
        }
        else if(enter && !click){
            setBrightness('0.7');
        }
        else if(click){
            setBrightness('1');        }
    },[click , screenOn , enter , brightness]);


    const handleMove=(e) =>{
        if(click){
            const divRect = slide_bar.current.getBoundingClientRect();
            const mouseX = e.clientX - divRect.left;
            if(mouseX >= (divRect.right - divRect.left - 60)){
                setUnlockScreen();
            }
            else{
                setPosX(mouseX);
            }
            
            
        }
    }
  
    return (
    <div style={slideBar_STYLE} ref = {slide_bar} 
        onMouseEnter={()=>setEnter(true)} onMouseLeave={()=>{setEnter(false); setClick(false)}}
        onMouseMove={handleMove} 
        >

        <div style={slider_STYLE}
            onMouseDown={()=>setClick(true)} onMouseUp={()=>setClick(false)}
        ></div>
    </div>
  
  )
}

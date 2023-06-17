import React, { useState } from 'react'
import LockScreen from './LockScreen';
import UnlockedScreen from './UnlockedScreen';
export default function SlideToUnlock() {
    // check hover
    const [hover,setHover] = useState(false);

    // Check if locked or not
    const [locked , setLocked] = useState(true);

    const unlockScreen=()=>{
      setLocked(false);
    }

    const lockScreen = ()=>{
      setLocked(true);
    }

    const SCREEN_STYLE = {
        position:'absolute',
        top:'0',left:'0',
        backgroundColor:'rgba(100,100,100,0.7)' , 
        height:'100vh' , width:'100vw'
    }

    const PHONE_STYLE = {
        width:'225px',
        height:'400px',
        backgroundColor:'rgba(100,100,100,0.3)',
        position:'absolute',
        top:'40%' , left:'50%',
        transform:'translate(-50%,-50%)',
        border:'10px solid black',
        borderRadius:'30px',
        boxShadow:`${hover ? '0px 3px 5px 7px rgba(255,255,255,0.8)' : '0px 5px 7px 10px rgba(200,200,200,0.7)'}`,
        Transition:'0.5s ease-in-out'           
    }

  return (
    <div style={SCREEN_STYLE}>
        <div className="phone_screen" style={PHONE_STYLE} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
              {locked ? <LockScreen  onScreen={hover} setUnlock={unlockScreen} checkLock={locked}/> : <UnlockedScreen onScreen={hover} setLock={lockScreen} checkLock={locked}/>}
              
        </div>
       
        
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'

export default function Slider({counter}) {
    const W = 800;
    const divRef = useRef(null);

    const [clicked,setClicked] = useState(false);
    const [margin,setMargin] = useState(0);

    const handleMouse = (e) => {
        
        if(clicked){
            const divElement = divRef.current;
            const div_x = parseInt(divElement.getBoundingClientRect().x);
            setMargin(e.clientX-div_x);
            counter(parseInt((margin/(W-20))*100));
        }   
    }

    useEffect(()=>{
        if(margin > W-20){
            setMargin(W-20);
            counter(100);
        }
    },[margin]);

  return (
    
    <div>
        <div ref={divRef} style={{
            width:`${W}px`,
            height:'20px',
            backgroundColor:'rgba(255,255,255,0.8)',
            borderRadius:'20px',
            display:'flex',
            alignItems:'center'
        }}  onMouseMove={(e)=>handleMouse(e)} onMouseLeave={()=>setClicked(false)} onMouseUp={()=>setClicked(false)}>
            <div style={{
                width:'25px',
                height:'25px',
                backgroundColor:'#116A7B',
                borderRadius:'25px',
                marginLeft:`${margin}px`,

            }}  onMouseDown={()=>setClicked(true)} onMouseUp={()=>setClicked(false)}>

            </div>
        </div>
    </div>
  )
}

import React, { useState , useEffect } from 'react'
import './Alert_component.css'

export default function Alertcomponent({color , text , order}) {
    const [visible,setVisible] = useState(true);

    useEffect(()=>{
        if(!visible){
          return null;
        }
    },[visible])
    
    return (
    <div className='Alert_component_container' style={{backgroundColor:color,top:`${80*(order-1)}px` , opacity: visible?1:0}}>
        <div className='alert_text'>{text? text : 'Alert' }</div>
        <button className='alert_btn' onClick={()=>setVisible(false)}>X</button>
    </div>
  )
}

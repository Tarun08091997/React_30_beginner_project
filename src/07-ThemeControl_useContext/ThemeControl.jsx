import React, { createContext, useEffect, useState } from 'react'
import ThemeControlCpomponent from './ThemeControlCpomponent';
import { useContext } from 'react';
import { COLORContext } from './context/theme-file';


export default function ThemeControll() {
  const themeColor = useContext(COLORContext);
  const [theme,setTheme] = useState(themeColor.d);
  const [nextTheme,setNextTheme] = useState(themeColor.l);

  const ThemeContext = createContext(theme);
  const toggleTheme = ()=>{
    setTheme((prevTheme)=>
       prevTheme === themeColor.d ? themeColor.l : themeColor.d       
    );
  }

  useEffect(()=>{
    if(theme === themeColor.d ){
      setNextTheme(themeColor.l);
    }else{
      setNextTheme(themeColor.d );
    }
  },[theme])
  return (
    <div>
      <button className="btn" onClick={toggleTheme} 
      style={{position:'absolute',height:'30px' , width:'100px',
      right:'20px',top:'20px', border:'none',color:`${theme}`,
      backgroundColor:`${nextTheme}`
    }}>
      {nextTheme}
      </button>
      <ThemeControlCpomponent Theme = {theme} FontColor={nextTheme}/>
    </div>
  
    )
}

import React, { useContext } from 'react'
export default function ThemeControlCpomponent({Theme , FontColor}) {
  return (
    <div style={{color: `${FontColor}` ,backgroundColor:`${Theme}` , height: '100vh', width:'100vw' , margin:'0' , padding:'0'}}>
        <h1 style={{marginLeft:'50px'}}>
            This is
        </h1>
        <h1 style={{marginLeft:'60px'}}>
            Dark Theme
        </h1>
        <div style={{marginLeft:'100px',width:'700px'}}>
        <label >
            In this example, we define a theme object with primaryColor and secondaryColor properties. 
            We wrap our app components inside the ThemeContext.Provider component and provide the theme
            object as the value prop.
            Now, in another file where you want to use the theme values, let's say Header.js, 
            you can use the useContext hook to access the theme values. Here's an example:
        </label>
        </div>
    </div>
  )
}

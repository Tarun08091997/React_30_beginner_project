import React from 'react'
import {AiFillLock } from 'react-icons/ai'

export default function UnlockedScreen({onScreen , setLock ,checkLock}) {
    return (
        <div style={{position:'relative' , userSelect:'none'}}>
            <img src={require('./wallpaper.png')} alt="Wallpaper" style={
                {
                    width:'225px',height:'400px',
                    borderRadius:'20px',
                    filter:`${onScreen ? 'brightness(1)' : 'brightness(0.9)'}`,
                    transition:'filter 0.5s',
                    position:'absolute',
                    top:'0',left:'0', z:'-200'            
                }
            }/>
            
            <AiFillLock style={
                {
                    color : 'white',
                    position:'absolute',
                    top:'325px',
                    left:'50%',
                    transform:'translateX(-50%)',
                    height:'50px', width:'50px',
                    opacity:'0.3'
                }
            }
                onClick={setLock}/>
        </div>
      )
}

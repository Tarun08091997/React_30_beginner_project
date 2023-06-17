import React from 'react'
import LockScreenSlider from './LockScreenSlider'

export default function LockScreen({onScreen , setUnlock}) {

  return (
    <div style={{position:'relative'}}>
        <img src={require('./Earth.png')} alt="Wallpaper" style={
            {
                width:'225px',height:'400px',
                borderRadius:'20px',
                filter:`${onScreen ? 'brightness(1)' : 'brightness(0.3)'}`,
                transition:'filter 0.5s',
                position:'absolute',
                top:'0',left:'0', z:'-200'             
            }}/>
        <LockScreenSlider side = {'40px'} screenOn={onScreen} setUnlockScreen={setUnlock}/>
    </div>
  )
}

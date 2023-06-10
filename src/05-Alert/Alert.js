import React from 'react'
import Alertcomponent from './Alert_component'
export default function Alert() {
    const color_comb={
        RED : '#FD5D5D',
        GREEN:'#38E54D',
        BLUE : '#9AC5F4'
    }
  return (
    
    <div className='alert_div'>
        <Alertcomponent color = {color_comb.RED} text={'Danger'} order={1} />
        <Alertcomponent color = {color_comb.BLUE} order={2}/>
        <Alertcomponent color = {color_comb.GREEN} text={'OK'} order={3}/>

    </div>
  )
}

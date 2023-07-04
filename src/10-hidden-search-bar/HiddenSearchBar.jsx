import React, { useState } from 'react'
import {HiSearch} from 'react-icons/hi'
export default function HiddenSearchBar() {
    const [opensearch_bar,setOpenSearch_Bar] = useState(false);
    const searchButton = <HiSearch style={
                                        {
                                            position:'absolute',
                                            top:'10px', right:'10px',
                                            height:'50px', width:'50px' , color:'black' 
                                        }
                                    }  onClick={()=>setOpenSearch_Bar(true)}/>

    const searchBar = <div style={
                                    {
                                        width:'100vw' , height:'100vh', margin:'-10px',
                                        background:'linear-gradient(to right, #fddb92, #d1fdff)',
                                    }
                                }> 
                                    <div>
                                        <input type='text' style={
                                            {
                                                width:'200px' , height:'30px' , 
                                                background:'transparent' , 
                                                borderTopColor:'transparent', borderLeftColor:'transparent',
                                                borderRightColor:'transparent', borderBottom:'5px solid black',
                                                margin:'100px 0px 0px 550px' , outline:'none'
                                            }
                                        }/>
                                        <HiSearch  style={
                                            {
                                                width:'30px' , height:'30px' ,background:'transparent' , marginBottom:'-10px'
                                            }
                                        } onClick={()=>setOpenSearch_Bar(false)}/>
                                    </div>
                                </div>
  return (
    <div>
        {!opensearch_bar ? (
            searchButton
        ):(
            searchBar
        )}
    </div>


  )
}

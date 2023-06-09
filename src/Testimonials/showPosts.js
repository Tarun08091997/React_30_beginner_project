import React from 'react'
import {useEffect , useState} from 'react'




export default function SPhowPosts({visible}) {

    const [items,setItems] = useState();

    const DISPLAY_STYLE = {
        display:'flex', 
        flexDirection:'column',
        alignItems:'stretch'
    }
    const ITEM_STYLE = {
        display:'flex',
        flexDirection:'column',
        margin:'20px 10px 10px 10px',
        backgroundColor:'#D8C4B6',
        border:'0px transparent',
        borderRadius:'10px',
        alignItems:'start',
        boxShadow:'0px -5px 10px 2px white',
        }
    useEffect(()=>{
        if(visible){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setItems(json))
        }
    },[visible]);


    if(!visible)  return null; 
  return (
    
    <div style={DISPLAY_STYLE}>
        { !items ? null : items.map((item,_) =>{
            return(
                <div
                style={ITEM_STYLE}>
                    <h3 style={{margin:'10px',marginBottom:'3px',paddingTop:'2px'}}>{item.title}</h3>
                    <div style={{marginTop:'3px',marginLeft:'15px',paddingBottom:'15px'}}>{item.body}</div>
                </div>  
            );        
        }) 
        }
    </div>
    )
}

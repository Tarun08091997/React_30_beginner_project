import React from 'react'
import { useEffect ,useState} from 'react';

export default function ShowUsers({visible}) {

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
        backgroundColor:'white',
        border:'0px transparent',
        borderRadius:'10px',
        alignItems:'start',
        boxShadow:'0px -5px 10px 2px #213555',
        color:'black'
    }

    const WRITING_STYLE={
        margin:'10px',
        marginBottom:'3px',
        paddingTop:'2px',
        display:'flex'
    }

    useEffect(()=>{
        if(visible){
            fetch('https://jsonplaceholder.typicode.com/users')
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
                      <div style={WRITING_STYLE}>Name : <div style={{color:'darkgreen',marginLeft:'4px'}}> {item.name}</div> </div>
                      <div style={WRITING_STYLE}>Email : <div style={{color:'red',marginLeft:'4px'}}>{item.email}</div></div>
                      <div style={WRITING_STYLE}>Phone : <div style={{color:'blue',marginLeft:'4px'}}>{item.phone}</div></div>
                      <div style={WRITING_STYLE}>Website : <div style={{color:'brown',marginLeft:'4px'}}>{item.website}</div></div>
                  </div>  
              );        
          }) 
          }
      </div>
      )
}

import { useEffect , useState } from "react";

export default function RandomColor(){
    const [hover,setHover] = useState(false);
    const [color,setColor] = useState('rgb(255,0,0)');
    const [prevColor,setPrevColor] = useState();

    const btn_style={
        backgroundColor : hover? color : 'rgb(255,255,255)'
    }


    const changeColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        // Create the RGB color string
        setPrevColor(color);
        setColor(`rgb(${red}, ${green}, ${blue})`);
        console.log(prevColor);
        console.log(color);
    }

    // It will be CALLED only once
    useEffect(()=>{
        changeColor();
    },[]);

    // It takes place when Ever color / prevColor changes
    useEffect(()=>{
        document.body.style.backgroundColor = prevColor;
    });

    return(
        <button 
            className="btn" 
            onClick={changeColor} 
            style={btn_style}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >Change color</button>
    );
}
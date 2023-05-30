import { useState } from "react";
import { useEffect } from "react";
export default function Signature(){
    const[name,setName] = useState('');
    const[date,setDate] = useState('');
    const[outText,setOuttext] = useState('')
    const[radioChecked , setradioChecked] = useState("Sentencecase")


    // Change states of function
    function changeName(event){
        setName(event.target.value)
    }

    function changeDate(event){
        const val = event.target.value;
        setDate(val)
    }

    function changeChecked(data){
        setradioChecked(data)
    }

    const convertTocamelCase = (text) => {
        const words = text.split(' ');
        const camelCaseWords = words.map((word, index) => {
          if (index === 0) {
            // Convert the first word to lowercase
            return word.toLowerCase();
          } else {
            // Convert the remaining words to title case
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }
        });
        return camelCaseWords.join('');
    };

    const convertToCAPITAL = (text)=>{
        return text.toUpperCase().replace(/\s/g, '');
    }

    const convertTosmall = (text) => {
        return text.toLowerCase().replace(/\s/g, '')
    }

    const convertToPascalCase = (text) =>{
    const words = text.split(' ');
    const pascalCaseWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return pascalCaseWords.join('');
    }

    const convertToSentencecase = (text) =>{
        return text.replace(/\s/g, '')
    }

    // Run only once in start whenever we load 
    useEffect(()=>{
        console.log('Start');
    },[])

    //Run everytijme any state changes
    useEffect(()=>{
        let result;
        switch (radioChecked) {
          case 'camelCase':
            result = convertTocamelCase(name);
            break;
          case 'CAPITAL':
            result = convertToCAPITAL(name);
            break;
          case 'small':
            result = convertTosmall(name);
            break;
          case 'PascalCase':
            result = convertToPascalCase(name);
            break;
          case 'SentenceCase':
            result = convertToSentencecase(name);
            break;
          default:
            result = convertToSentencecase(name);
        }
        setOuttext(result);
    },[radioChecked,name])



    return(
        <div className="form">
            <div className="input">
                <label className="NAME">Name</label>
                <input type="text" className="name"  onChange={changeName}/>
                <label className="DATE">Date</label>
                <input type="date" className="date" onChange={changeDate} />
            </div>
            <div className="radioButton">
                <input type="radio" value="Sentencecase" checked ={radioChecked === "Sentencecase"} onChange={()=>changeChecked("Sentencecase")}></input>
                <label>Sentence case</label>

                <input type="radio" value="CAPITAL" checked ={radioChecked === "CAPITAL" } onChange={()=>changeChecked("CAPITAL")}></input>
                <label>CAPITAL</label>

                <input type="radio" value="small" checked ={radioChecked === "small"} onChange={()=>changeChecked("small")}></input>
                <label>small</label>

                <input type="radio" value="camelCase" checked ={radioChecked === "camelCase"} onChange={()=>changeChecked("camelCase")}></input>
                <label>camelCase</label>

                <input type="radio" value="PascalCase" checked ={radioChecked === "PascalCase"} onChange={()=>changeChecked("PascalCase")}></input>
                <label>PascalCase</label>

            </div>

            <div className="output">
                <h1 className="SignName">{outText}</h1>
                <h3 className="SignDate">{date}</h3>
            </div>
        </div>
    )
}
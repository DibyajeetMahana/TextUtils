import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text,setText]=useState("");
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    
    if(wordCount()>0)
    {
      let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
    }
    else
    props.showAlert("Error","danger")
  }
  const handleLowClick=()=>{
    // console.log("Uppercase was clicked");
  
    if(wordCount()>0)
    {
      let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase","success")
    }
   else 
   props.showAlert("Error","danger")
  }
  const handleOnChange=(event)=>{
    // console.log("Onchange");   
    setText(event.target.value);
  }
  const handleClear=()=>{
    if(wordCount()>0)
    {
      setText("");
      props.showAlert("Cleared","success")
    }
    else
    props.showAlert("Error","danger")
    
  }
  const handleCamel=()=>{
    console.log(wordCount());
    if(wordCount()>0)
    {
    const arrayStrings = text.split(" ");
    for(let i=1;i<arrayStrings.length;i++)
    arrayStrings[i] = arrayStrings[i].charAt(0).toUpperCase() + arrayStrings[i].slice(1);
    const joinArray = arrayStrings.join("");
    setText(joinArray);
    props.showAlert("Converted to Camel","success")
    }
    else{
      props.showAlert("Error","danger")
    }
  }
    const handleRev=()=>{
      if(wordCount()>0)
      {
        const arrayStrings = text.split("");
        const reverseArray = arrayStrings.reverse();
        const joinArray = reverseArray.join("");
        setText(joinArray);
        props.showAlert("Reversed","success")
      }
      else
      {
        props.showAlert("Error","danger")
      }
  }
  const wordCount=()=>{
    const arrayStrings = text.split(/\s+/);
    let count=0;
    for(let i=0;i<arrayStrings.length;i++)
    {
      if(arrayStrings[i].length>0)
      count++;
    }
    return count;
  }
  const charCount=()=>{
    const arrayStrings = text.split(/\s+/);
    let count=0;
    for(let i=0;i<arrayStrings.length;i++)
    {
      if(arrayStrings[i].length>0)
      count+=arrayStrings[i].length;
    }
    // count+=arrayStrings.length;
    return count;
  }
  return (
    <>
  <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.title}</h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'#a2a1a1',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="10"></textarea>
</div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-1" onClick={handleCamel}>Convert to CamelCase</button>
  <button className="btn btn-primary mx-1" onClick={handleRev}>Reverse</button>
  <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
  </div>
  <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Summary</h2>
    <p>{wordCount()} words and {charCount()} characters</p>
    <p>{wordCount()*0.008} minutes taken to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
  )
}
TextForm.propType={
  title:PropTypes.string
}
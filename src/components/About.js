import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[btnkey,setKey]=useState("Enable Dark myStyle")
    // const toggleHandle=()=>{
    //     if(myStyle.color==='white')
    //     {
    //         setmyStyle({
    //             color:'black',
    //              backgroundColor:'white'
    //         })
    //         setKey('Enable Light myStyle')
    //     }
    //     else
    //     {
    //         setmyStyle({
    //             color:'white',
    //              backgroundColor:'black'
                
    //         })
    //         setKey('Enable Dark myStyle')
    //     }

    // }
    let myStyle={  
      color:props.mode==='light'?'grey':'white',
      backgroundColor:props.mode==='dark'?'grey':'white',


    }
  return (
    <div className='container my-3' style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count and all types of manipulation in text.
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" className="btn btn-primary my-3" onClick={toggleHandle}>{btnkey}</button> */}
    </div>
  )
}

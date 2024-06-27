import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log('Up clicked'+text)
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleLoclick = ()=>{
        // console.log('Up clicked'+text)
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handlecopy = ()=>{
        // console.log('Up clicked'+text)
        console.log('i am copy');
        var text=document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleClearclick = ()=>{
        // console.log('Up clicked'+text)
        let newtext="";
        setText(newtext)
    }
    const handleonchange=(event)=>{
        // console.log('on change')
        setText(event.target.value)
    }
   const handleExtraspace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
     const [text, setText] = useState("enter the text here!");
   return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear</button>
        < button class="btn btn-primary mx-2" onClick={handlecopy}>copy text</button> 
        < button class="btn btn-primary mx-2" onClick={handleExtraspace}>Extraspace</button> 
    </div>
    <div className="container my-3">
        <h3> Your Text Summary</h3>
        <h5>{text.split(" ").length} words and {text.length} characters</h5>
        <h5>{0.008 *text.split(" ").length} Minutes read</h5>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    </>
  )
}

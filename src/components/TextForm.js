import React, {useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState(""); //default value of text is enter text here
// text = "new text"; // wrong way to update text
// setText("new text");

const handleUpClick =() =>{
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
}

const handleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
}

const handleClearClick =() =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
}

const handleOnChange =(event) =>{
    // console.log("On change");

    //if the following line is not written, you won't be able to do any change 
    setText(event.target.value);
}

function wordCount(){
    

    //text.split gives an array of strings separated by space but it also gives an array consisting of empty string [""]

    // return text.split(" ").length;
    //so we have to filter out empty string from it
    return text.split(/\s+/).filter((element)=>{return element.length !==0}).length;
}

const removeExtraSpaces = () =>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
}   



return (
<>
<div className='container' style={{color: props.mode ==='dark'? 'white': 'black'}}>
<h1>{props.heading}</h1>

<div className="mb-3">
<textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode ==='dark'? '#05192a': 'white', color:props.mode ==='dark'? 'white': 'black' }}></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
</div>

<div className="container my-3" style={{color: props.mode ==='dark'? 'white': 'black'}}>
    <h2>Your Text Summary</h2>
    <p> {wordCount()} words, {text.length} characters</p>
    <p>{0.008* wordCount()} Minutes read</p>

    <h2>Preview</h2>
    <p>{text.length>0 ?text : "Nothing to preview"}</p>
</div>
</>
)
}

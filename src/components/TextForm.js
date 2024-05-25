import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your string has been converted to uppercase !", 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Your string has been converted to lowercase !", 'success');
    }

    const handleClearClick = () => {
      let clearText = '';
      setText(clearText);
      props.showAlert("Text Cleard !", 'success');
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied !", 'success');
    }

    const handleExtraSpacesClick = () => {
        // let newText = text.split(/[ ]+/);
        // setText(newText.join( " "));
        let newString = text.replace(/\s+/g,' ').trim();
        setText(newString);
    }

// Declare a new state variable, which we'll call "count"
const [text, setText] = useState('');
    // setText('new text');
  return (
    <>
      <div className="container" style={{color: props.textColor === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.textColor === 'dark' ? 'grey' : 'white', color: props.textColor === 'dark' ? 'white' : 'black'}}
        ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.textColor === 'dark' ? 'white' : 'black'}}>
      <h2>Your text summary</h2>
      {/* <p>{text.length > 0 ? text.match(/\S+/g).length : '0'} words {text.length} characters</p> */}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes need to read the above texts</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview."}</p>
    </div>
    </>
  );
}

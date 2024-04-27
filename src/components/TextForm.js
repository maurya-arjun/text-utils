import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleClearClick = () => {
      let clearText = '';
      setText(clearText);
    }

    const handleCopyClick = () => {
        let textArea = document.getElementById('myBox');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
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
      <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes need to read the above texts</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

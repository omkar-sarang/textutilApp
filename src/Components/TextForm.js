import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const pressedClearText =() =>{
    let newText ="";
     
    setText(newText)
  }
  const extractEmail = () =>{
    let emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
     return text.match(emailRegex)  
  }
  const pressedToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.updateAlert(" Text is being capitalized","success")
  };

  const pressedToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Calculate word count
  //const wordCount = text.length === 0 ? 0 : text.split(/\s/).length;
  // Calculate word count excluding whitespaces
const wordCount = text.split(/\s+/). lter(word => word.trim() !== "").length;

  //const charCount = text ===" " ? 0 : text.length;   
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{backgroundColor:props.mode === 'light' ? 'grey':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={pressedToUppercase}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={pressedToLowercase}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={pressedClearText}>
        Clear text
      </button>
      <button className="btn btn-primary mx-2" onClick={extractEmail}>
        Exactract mail
      </button>
      </div>
      <div className="container my" style={{color:props.mode === 'light' ? 'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>
          {wordCount} {wordCount === 1 ? "word" : "words"}, {text.length} characters
        </p>
        <p>{0.08 * wordCount} Minutes read</p>
        <p>Emails:</p>
        <ul>
          {extractEmail()?.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function texthtmlForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Cleared input text", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };
  const handleOnchange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container d-flex flex-column mb-3 my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#182d62" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <label htmlFor="myBox" className="htmlForm-label ">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="htmlForm-control my-3"
          id="myBox"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "rgb(35 63 135)" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handleOnchange}
          rows="8"
        ></textarea>
        <div>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#182d62" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Priview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to Preview it here"}
        </p>
      </div>
    </>
  );
}

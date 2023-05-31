import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper Case Clicked","success");

  };

  const handleOnChange = (event) => {
    console.log("Handle on Change");
    setText(event.target.value);
    

        // Code to Handle Unique Words
        let set=new Set();
        var arr=text.split(" ");
        for(let i=0;i<arr.length;i++)
           set.add(arr[i]);
     setUnique(set.size);  

     // End of code Handling Unique Words
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("ToLower  Clicked","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);

    props.showAlert("Cler Clicked","success");
  };

  const handleCopyClick=()=>{
    let val=document.getElementById("mybox");
val.select();
    navigator.clipboard.writeText(val.value);
    props.showAlert("Text Copied","success");
  }
  const handleRemoveSpaceClick = () =>
  {
    var newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space Removed","success");
  }


  const [unique,setUnique]=useState("3");
  const [text, setText] = useState("Enter Text Here");
  // text="New Text"    Wrong Way to update state
  // setText("New Text Here");
  return (
    <>
      <div className="container"  style={{color:props.Mode==='light'?'black':'white'}}>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h2> Enter Text to analyze below</h2>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{background:props.Mode==='light'?'white':'gray',color:props.Mode==='light'?'black':'white'}}
          ></textarea>
        </div>

        <button className={`btn btn-${props.Mode==='dark'?'secondary':'primary'} my-1 mx-2`} onClick={handleUpClick}>
          Convert Text to Upper Case
        </button>
        <button className={`btn btn-${props.Mode==='dark'?'secondary':'primary'} my-1 mx-2`} onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className={`btn btn-${props.Mode==='dark'?'secondary':'primary'} my-1 mx-2`} onClick={handleClearClick}>
          Clear
        </button>
        <button className={`btn btn-${props.Mode==='dark'?'secondary':'primary'} my-1 mx-2`} onClick={handleCopyClick}>
          Copy
        </button>
        <button className={`btn btn-${props.Mode==='dark'?'secondary':'primary'} my-1 mx-2`} onClick={handleRemoveSpaceClick}>
          Remove Extra Spaces
        </button>
      
      </div>

      <div className="container"    style={{color:props.Mode==='light'?'black':'white'}}>
        <h1> Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length>0;}).length} Words and {text.length} Character
        </p>
        <p>{text.split(/\s+/).length * 0.008} Minutes to Read</p>
         <p>Unique words: { unique}</p>
        <h3>Text Preview</h3>
        <p>{text.length>0?text:"Enter Something above to Preview Here!!"}</p>
       
      </div>
    </>
  );
}

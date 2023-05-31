// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Alert from "./Compenents/Alert";
import About from "./Compenents/About";
import Navbar from "./Compenents/Navbar";
import TextForm from "./Compenents/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode is Enabled", "success");

      // ***Changing tittle Dynamically***//
      //       setInterval(() => {
      //         document.title = "Download Text Util";
      //       }, 2000);
      // setInterval(() => {
      //   document.title = "Text Util is Amazing";

      // }, 1500);

      document.title = "Text Util- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = "Text Util-light Mode";
    }
  };

  const toggleModeBlue = () => {
    if (blueMode === "light") {
      setBlueMode("#f44336");
      document.body.style.backgroundColor = "#ff7961";
      setMode("danger");
    } else {
      setBlueMode("light");
      document.body.style.backgroundColor = "white";
      setMode("gray");
    }
  };

  const [blueMode, setBlueMode] = useState("light");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null); // here we are passing the Objectnot a variable

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtil"
          home="Home"
          about="About Us"
          toggleMode={toggleMode}
          Mode={mode}
          toggleModeBlue={toggleModeBlue}
          blueMode={blueMode}
        />

        
        <Alert alert={alert} />

        <Routes>
          <Route exat path="/about" element={<About mode={mode}  />}/>
         

          <Route exact path="/" 
            element={
             <TextForm
              heading="Enter a Text to analyze below"
              Mode={mode}
              showAlert={showAlert}
            />
             } 

             />
        
         </Routes> 
     </Router> 
    </>
  );
}

export default App;

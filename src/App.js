import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light"); // Whether dark mode is enabled or not.
  // const [redDarkMode, setRedDarkMode] = useState('light'); // Whether red dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // Following removeBodyClass method is used for color palate
  
  // const removeBodyClass = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-danger');
  // }

  const toggleMode = (cls) => {
    // removeBodyClass();
    // document.body.classList.add('bg-'+cls);
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled!", "success");
      //document.title = "TextUtils - Dark Mode"; // To dynamic update the page title.
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
    }
  };

  return (
    <>
    <Router>
    <Navbar
        title="TextUtils"
        aboutText="About us"
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
              <Route exact path="/about" element={<About mode={darkMode} />}>
                
              </Route>
              <Route exact path="/" element={<TextForm
                  showAlert={showAlert}
                  heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                  textColor={darkMode}
                />}>
                
              </Route>
        </Routes>
      </div>
    </Router>
      
    </>
  );
}

export default App;

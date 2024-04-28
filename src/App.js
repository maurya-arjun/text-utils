import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [darkMode, setDarkMode] = useState('light'); // Whether dark mode is enabled or not.

  const toggleMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={darkMode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" textColor={darkMode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

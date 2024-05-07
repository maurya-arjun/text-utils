import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [darkMode, setDarkMode] = useState('light'); // Whether dark mode is enabled or not.
  // const [redDarkMode, setRedDarkMode] = useState('light'); // Whether red dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
       msg: message,
       type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = (event) => {
    console.log(event.target.value);
    if (event.target.value === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled!', 'success');
      document.title = 'TextUtils - Dark Mode' // To dynamic update the page title.
    } else if (event.target.value === 'red') {
      setDarkMode('danger');
      document.body.style.backgroundColor = '#ae1e1e';
      showAlert('Red mode has been enabled!', 'success');
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!', 'success');
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={darkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" textColor={darkMode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

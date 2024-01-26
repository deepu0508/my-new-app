import TextForm from './Components/TextForm';
import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Alert from './Components/Alert';

// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
// import About from './Components/About';

function App() {
  const [alert, setAlert] = useState(null)

  // -------->>>>>>>Dark Mode
  const [mode, setMode] = useState('light')
  const [strmode, setStrMode] = useState("Enable Dark Mode")
  
  // Toggle Mode Button function
  // This fucntion set on checkbox botton by sending through props
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#6c757d'
      document.body.style.transition = '1s'
      
      setStrMode("Enable Light Mode") // set enabled light mode
      showAlert("Dark Mode has been enabled", 'success') //set alert for success

      // Disabled others checkbox bottons
      document.getElementById('blueMode').disabled = true
      document.getElementById('greenMode').disabled = true
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'whitesmoke'
      document.body.style.transition = '1s'
      
      setStrMode("Enable Dark Mode")//set enabled dark mode
      showAlert("Light Mode has been enabled", 'success') //set alert for success

      // Enabled Other Checkbox bottons
      document.getElementById('blueMode').disabled = false
      document.getElementById('greenMode').disabled = false
    }
  }
  
  // -------->>>>>>>Blue Dark Mode
  const [bluemode, setBlueMode] = useState("light")
  const [blueText,setBlueText] = useState("Enabled Blue Mode")
  // This fucntion set on checkbox botton by sending through props
  const showBlueMode = () => {
    if (bluemode === 'light') {
      setBlueMode('blue')
      document.body.style.background = '#052c65'
      setMode('dark')
      setBlueText("Enabled Light Mode")
      showAlert("Enabled Blue Dark Mode",'success')
      // Disabled others checkboxes bottons
      document.getElementById('greenMode').disabled = true
      document.getElementById('darkMode').disabled = true
    } else {
      setBlueMode('light')
      document.body.style.background = 'whitesmoke'
      setMode('light')
      setBlueText("Enabled Blue Mode");
      showAlert("Enabled Light Mode",'success');

      // Enabled Other Checkbox bottons
      document.getElementById('greenMode').disabled = false;
      document.getElementById('darkMode').disabled = false;
    }
  }
  
  // -------->>>>>>>Green Dark Mode
  const [greenmode, setGreenMode] = useState("light")
  const [greenText,setGreenText] = useState("Enabled Green Mode")

  // This fucntion set on checkbox botton by sending through props
  const showGreenMode = () => {
    if (greenmode === 'light') {
      setGreenMode('green')
      document.body.style.background = '#198754'
      setMode('dark')
      setGreenText("Enabled Light Mode")
      showAlert("Enabled Green Dark Mode",'success')
      // Disabled others checkboxes bottons
      document.getElementById('blueMode').disabled = true
      document.getElementById('darkMode').disabled = true
    } else {
      setGreenMode('light')
      document.body.style.background = 'whitesmoke'
      setMode('light')
      setGreenText("Enabled Green Mode")
      showAlert("Enabled Light Mode",'success')

      // Enabled Other Checkbox bottons
      document.getElementById('blueMode').disabled = false
      document.getElementById('darkMode').disabled = false
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      mess: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

      {/* <Navbar /> */}
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} textMode={strmode} blueText={blueText} blueMode={showBlueMode} greenText={greenText} greenMode={showGreenMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* Every Route is required every element : this is syntax Under Route element is component*/}
            {/* <Route exact path="/about" element={<About />} />  */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below " mode={mode} showAlert={showAlert} />} /> */}
            <TextForm heading="Enter the text to analyze below " mode={mode} showAlert={showAlert} />
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');

  //we are defining alert as an object which has a message and a type, intially it's null
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type: type

    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode ==="light"){
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } 
  }
  return (
    <>

<BrowserRouter>
<Navbar title="TextUtils" about ="About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert} />

    <div className="container my-3">

    <Routes>
    <Route exact path="/about" element={<About mode ={mode}/>}></Route>

    <Route exact path="/" element={    <TextForm heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>
    }></Route>
    </Routes>
    </div>

</BrowserRouter>
    
    </>
  );
}

export default App;
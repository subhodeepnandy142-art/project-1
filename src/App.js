import './App.css';
import Navbar from './components/Navbar';
import TextsForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      msgtype: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'React App - Dark Mode';
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "success");
      document.title = 'React App - Light Mode';
    }
  }
  return (
    <>
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleModes={toggleMode}/>
      <Alert toggleAlert={alert}/>
      <TextsForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      <About heading="About heading"/>
    </>
  );
}

export default App;

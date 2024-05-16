
import './App.css';
import Navbar from './Components/Navbar';
//import About from './Components/About';
import { useState } from 'react';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
function App() {
  const[mode,setMode]= useState('light')
  const[alert,setAlert]= useState(null);


  const updateAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)

  }
  const toggleMode=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white'
      updateAlert(" Light mode is set","success")
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor='#6c757d'
      updateAlert("Dark mode is set","success")
    }
  }
  return (
   <>
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}></Navbar>
   <Alert alert={alert}></Alert>
    <div className="container">
   <TextForm updateAlert={updateAlert} heading="Enter the text to analyze" mode={mode} ></TextForm>
   {/* <About></About>*/}
    
    </div>
  </>
  );
}

export default App;

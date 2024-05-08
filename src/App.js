
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { useState } from 'react';
//import Switch from './Components/Switch';
import TextForm from './Components/TextForm';
function App() {
  const[mode,setMode]= useState('light')

  const toggleMode=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white'
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor='#6c757d'
    }
  }
  return (
   <>
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}></Navbar>
    <div className="container">
   <TextForm heading="Enter the text to analyze" mode={mode} ></TextForm>
   {/* <About></About>*/}
    
    </div>
  </>
  );
}

export default App;

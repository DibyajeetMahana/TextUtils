import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [btnKey,setKey]=useState('Enable Dark Mode');
  const [alert,setAlert]=useState(null);
  const showAlert=(messege,type)=>
  {
     setAlert({
      msg:messege,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },3000)
  }
 const toggleMode=()=>{
   if(mode==='light')
   {
   setMode('dark')
   setKey('Disable Dark Mode')
   document.body.style.backgroundColor='grey'
   showAlert("Dark Mode is Enabled","success");
  //  document.title='TextUtils-DarkMode'
  // setTimeout(()=>{
  //    document.title='Hi Vicky!'
  // },1500)
  // setTimeout(()=>{
  //   document.title='Hi Dibyajeet!'
//  },3000)
   }
   else
   {
    setMode('light')
    setKey('Enable Dark Mode')
    document.body.style.backgroundColor='white'
    showAlert("Dark Mode is Disabled","success");
    // document.title='TextUtils-LightMode'
   }
}
 return (
    <>
    {/* sending the props to Navbar*/}
    <Router>
<Navbar title="TextUtils"  mode={mode} btn={btnKey} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className='container my-3'>
<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element = {<TextForm title="Enter the text" mode={mode} showAlert={showAlert}/>}>
          </Route>
</Routes>
</div>

</Router>
    </>
  );
}

export default App;
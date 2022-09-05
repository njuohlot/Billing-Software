import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Hero from "./pages/Hero";
import { auth } from "./firebase";
import { useEffect } from 'react';




function App() {
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log(authUser)
      if(authUser){
        localStorage.setItem('user', JSON.stringify(authUser))
      }
    })
  })


  
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>}/> 
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/create_invoice" element={<Home/>}/>
      </Routes>
    </Router>
     
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
const Auth = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 

  const handleLogin = (e) =>{
    e.preventDefault()
    if(!password || !email){
      alert('All form fields are required')

    }else{
      
        try {
          signInWithEmailAndPassword(auth,email, password).then((auth)=>{
            if(auth){
              navigate('/')

            }
           
        })
          
        } catch (error) {
          alert(error.message)
          
        }

      

    }
  }
  const handleRegister = (e) =>{
    e.preventDefault();
    if(!password || !email){
      alert('All form fields are required')

    }else{
      if(password.length < 6){
        alert('Password must be atleast 6 characters')

      }else{
        try {
          createUserWithEmailAndPassword(auth,email, password).then((auth)=>{
            if(auth){
              alert('Account created successfully')
              navigate('/')

            }
           
        })
          
        } catch (error) {
          alert(error.message)
          
        }

      }

    }
    
    

  }
  return (
    <div>
      <header>
        <div className="logo">
          <Link to="/">
            <h1>
              <span className="logo-start">EASY</span>BILL
            </h1>
          </Link>
        </div>
       
      </header>
      <div className="login">
        <div className="login_container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='example@gmail.com' required/>
            <h5>Password</h5>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='*****' required/>
            <button className="sign-in" onClick={handleLogin} type='submit'>Sign in</button>
          </form>
          <p>
            By Signing-in you agree to <span className="logo-start">EASY</span>
            BILL Terms and Conditions
          </p>
          <button className="register" onClick={handleRegister} type='submit'>Create your EASYBILL Account</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

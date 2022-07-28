import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./hero.css";
const Hero = () => {
  const navigate = useNavigate();

  const handleClick = (e) =>{
    e.preventDefault();
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <>
     <div className="hero">
      <header>
        <div className="logo">
          <Link to="/">
            <h1>
              <span className="logo-start">GO</span>-INVOICE
            </h1>
          </Link>
        </div>

        {JSON.parse(localStorage.getItem("user")) ? (
          <button onClick={handleClick}>Sign-Out</button>
        ) : (
          <Link to="/auth">
            <button>Sign-In</button>
          </Link>
        )}
      </header>
      <div className="text">
        <h1>We Help Business Get Paid Faster</h1>
        <p>
          Online Invoicing Made Easier With{" "}
          <span className="logo-start">GO</span>-INVOICE
        </p>

        <Link to="/create_invoice">
          <button>Get Started Free</button>
        </Link>
      </div>
    </div>
    
    </>
   
  );
};

export default Hero;

"use client";

import React, { useState } from "react";
import "./Credentials.css";

const Credentials = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  return (
    <div className="mx-32">
      <div className={`container ${isRegisterActive ? "active" : ""}`}>
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="string" placeholder="IRCTC Id" required />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <input type="password" placeholder="Password" required />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <input type="string" placeholder="IRCTC Id" required />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <input type="password" placeholder="Password" required />
            <a href="#">Forget your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1 className="font-extrabold text-xl"> Hello, Friend!</h1>
              <p className="font-extrabold text-xl">
                Register with your Personal details to use all site features
              </p>
              <button onClick={handleLoginClick}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className="font-extrabold text-xl">Welcome Back!</h1>
              <p className="font-extrabold text-xl">
                Enter your Personal details to use all site features
              </p>
              <button onClick={handleRegisterClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;

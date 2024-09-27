import React, { useState } from 'react';
import './Signup.css';

function Signup() {

  const [showSignUp, setShowSignUp] = useState(false);

  
  const [userName, setUserName] = useState('');


  const [nameInput, setNameInput] = useState('');


  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setUserName(nameInput);
    setShowSignUp(false); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Cryptoplace</h1>
        <div className="header-right">
          {userName ? (
            <span>Welcome, {userName}!</span>
          ) : (
            <button onClick={toggleSignUp}>Sign Up</button>
          )}
        </div>
      </header>
      
    
      {showSignUp && (
        <div className="sign-up-modal">
          <div className="sign-up-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <input
                type="text"
                placeholder="Enter your name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                required
              />
              <button type="submit">Sign Up</button>
            </form>
            <button className="close-button" onClick={toggleSignUp}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;

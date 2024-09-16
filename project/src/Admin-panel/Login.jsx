import React, { useState } from 'react';
import './Login.css';
// import './Admin/Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
      window.location.href = '/admin';  // Navigate to another page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="page-container">
      <header className="header1">
        <h1>Administration</h1>
      </header>
      <div className="login-container">
        
        <div className="login-box">
            
          <h2>🔒 Please enter your login details.</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username</label>
              <div className="input-wrapper">
                <span className="icon">👤</span>
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <span className="icon">🔒</span>
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="forgot-password">
              <a href="/forgot-password">Forgotten Password</a>
            </div>
            <button type="submit" className="login-button"
            //  onClick={()=>Navigate("/Admin-pannel")}
             >🔍 Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

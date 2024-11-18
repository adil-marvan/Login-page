import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;





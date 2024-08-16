import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../index.css';

function Register({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    setErrorMessage('');

    if (username.trim() === '') {
      setErrorMessage('Username is required.');
      return;
    }

    if (password.trim() === '') {
      setErrorMessage('Password is required.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Z][A-Za-z\d!@#$%^&*(),.?":{}|<>]{5,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must start with an uppercase letter and contain at least one special character.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost/project/ragistration.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
        console.log("Registration successful");
        navigate('/home');
      } else {
        setErrorMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred during registration.');
    }
  };

  return (
    <div className="register-container">
      <h3>| Registration |</h3>
      <form id="registerForm" onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errorMessage && <div id="error-message">{errorMessage}</div>}

        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

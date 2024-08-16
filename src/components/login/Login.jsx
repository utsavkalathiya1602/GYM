import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setErrorMessage('');

    // Validation
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
      setErrorMessage('Password is wrong');
      return;
    }

    try {
      const response = await fetch('http://localhost/project/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
        console.log("Login successful");
        navigate('/home');
      } else {
        setErrorMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <h3>| Login |</h3>
      <form id="loginForm" onSubmit={handleLogin}>
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
            className="toggle-password-button"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errorMessage && <div id="error-message">{errorMessage}</div>}

        <div className="register-link">
          <p>Don't have an account? <Link to="/Registration">Register here</Link></p>
        </div>

        <button type="submit">Log-In</button>
      </form>
    </div>
  );
}

export default Login;

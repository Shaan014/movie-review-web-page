
import React from 'react';
import './AuthForms.css';

function Signup() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;


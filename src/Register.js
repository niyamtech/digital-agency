import React from 'react';

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Email: <input type="email" name="email" /></label><br />
        <label>Password: <input type="password" name="password" /></label><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

import React from 'react';
import { useMsal } from '@azure/msal-react';

function Register() {
  const { instance } = useMsal();

  const handleRegister = (e) => {
    e.preventDefault();
    instance.loginPopup().catch(err => {
      console.error(err);
    });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Email: <input type="email" name="email" /></label><br />
        <label>Password: <input type="password" name="password" /></label><br />
        <button type="submit">Register with Microsoft</button>
      </form>
    </div>
  );
}

export default Register;


import React from 'react';
import { useMsal } from '@azure/msal-react';

const Login: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    instance.loginPopup().catch((err: any) => {
      console.error(err);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email: <input type="email" name="email" /></label><br />
        <label>Password: <input type="password" name="password" /></label><br />
        <button type="submit">Login with Microsoft</button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import { useMsal, useAccount } from '@azure/msal-react';

function Home() {
  const { accounts } = useMsal();
  const account = accounts && accounts[0];

  return (
    <div>
      <h2>Welcome Home!</h2>
      {account ? (
        <>
          <p>Signed in as: <strong>{account.name}</strong></p>
          <p>Email: {account.username}</p>
        </>
      ) : (
        <p>This is your dashboard placeholder.</p>
      )}
    </div>
  );
}

export default Home;

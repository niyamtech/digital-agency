
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import Login from './Login';
import Home from './Home';
import Blog from './components/blog/Blog';

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Blog/>} />
        </Routes>
      </Router>
    </MsalProvider>
  );
}

export default App;

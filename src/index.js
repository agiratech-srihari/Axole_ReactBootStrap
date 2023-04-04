import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from "./context/Auth/useAuth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <BrowserRouter>
    <AuthProvider>
          <App />
    </AuthProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Global CSS reset/defaults
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for client-side routing

//Leave file as is no change

// Create a root to render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode helps in identifying potential problems in an application
  <React.StrictMode>
    {/* BrowserRouter provides the routing context to the entire application */}
    <BrowserRouter>
      {/* The main App component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
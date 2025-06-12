import React from 'react';
// Import necessary components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Keep BrowserRouter for now, though it's wrapped in main.jsx
import SearchPage from './pages/SearchPage'; // Rename and modify TodoPage to SearchPage
import './App.css'; // Import global CSS for styling

function App() {
  return (
    // No AuthContext.Provider needed as there's no user authentication
    <>
      {/* Navigation bar (simpler now) */}
      <nav className="navbar">
        {/* Only a simple title or home link needed as there are no other "pages" */}
        <span className="nav-title">iTunes & Apple Books Search</span>
      </nav>

      {/* Main content container for pages */}
      <div className="container">
        {/* Define application routes */}
        <Routes>
          {/* The main search page will be the only route */}
          <Route path="/" element={<SearchPage />} />
          {/* for a single-page focus, '/' is enough */}
        </Routes>
      </div>
    </>
  );
}

export default App;
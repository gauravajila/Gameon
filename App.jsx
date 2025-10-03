// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courts from './pages/Courts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // placeholder for auth logic

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courts" element={<Courts />} />
      </Routes>
    </Router>
  );
}

export default App;

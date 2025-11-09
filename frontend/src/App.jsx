import React from 'react';
import NavBar from './components/NavBar';
import Whole from './components/Whole';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Whole />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App

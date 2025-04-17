import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MeditationPage from './pages/MeditationPage';
import IconsPage from './pages/IconsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MeditationPage />} />
        <Route path="/icons" element={<IconsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

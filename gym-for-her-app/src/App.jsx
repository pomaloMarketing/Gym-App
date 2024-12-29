import React from 'react';
import NavbarComponent from './NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // If you're using React Router
import HomePage from './pages/HomePage'; // Your other page components
import AboutUsPage from './pages/AboutUsPage';
import BookNowPage from './pages/BookNowPage';
import InstructorsPage from './pages/InstructorsPage';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/book-now" element={<BookNowPage />} />
        <Route path="/instructors" element={<InstructorsPage />} />
        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;

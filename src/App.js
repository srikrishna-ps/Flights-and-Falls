import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllPoemsPage from './pages/AllPoemsPage';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-blue-50 dark:bg-[#080d19] font-mono">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poems" element={<AllPoemsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

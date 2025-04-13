import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllPoemsPage from './pages/AllPoemsPage';
import NotAuthorized from './pages/NotAuthorized';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-blue-900 dark:bg-zinc-950 text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poems" element={<AllPoemsPage />} />
            <Route path="/not-authorized" element={<NotAuthorized />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

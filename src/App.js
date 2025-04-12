import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllPoemsPage from "./pages/AllPoemsPage";
import NotAuthorized from "./pages/NotAuthorized";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import PoemForm from "./components/PoemForm";
import { AuthProvider } from "./hooks/useAuth";
import { generateRSS } from "./utils/generateRSS";

function App() {
  const handleRSSDownload = async () => {
    const blob = await generateRSS();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "feed.xml");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-sky-50 text-blue-900 dark:bg-blue-950 dark:text-blue-200 transition-colors duration-300">
          <Header />
          <main className="flex-1 p-4 md:p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/poems" element={<AllPoemsPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/write" element={<PoemForm />} />
              <Route path="/edit/:id" element={<PoemForm />} />
              <Route path="/not-authorized" element={<NotAuthorized />} />
            </Routes>

            {/* RSS Feed Button */}
            <div className="text-center mt-8">
              <button
                onClick={handleRSSDownload}
                className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-200"
              >
                Download RSS Feed
              </button>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

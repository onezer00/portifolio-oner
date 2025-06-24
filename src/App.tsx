import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.tsx';
import Footer from './components/footer/Footer.tsx';
import Home from './pages/home/Home.tsx';
import Projects from './pages/projects/Projects.tsx';
import About from './pages/about/About.tsx';
import Contact from './pages/contact/Contact.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900 transition-colors">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

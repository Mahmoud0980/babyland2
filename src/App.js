import "./App.css";
import { Routes, Route } from 'react-router-dom'; // أزلي BrowserRouter من هنا
import EnhancedNavbar from './pages/EnhancedNavbar';
import "swiper/css";
import "swiper/css/pagination";
import Hero from "./components/hero/hero.js";
import ProductsFlipCard from './components/ProductsFlipCard';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import BoysPage from './pages/BoysPage/BoysPage.js';
import GirlsPage from './pages/GirlsPage/GirlsPage.js';
import BabyPage from './pages/BabyPage/BabyPage.js';
import ToolsPage from './pages/ToolsPage/ToolsPage.js';
import AboutPage from './pages/AboutUs/aboutUs.js';
import ContactPage from './pages/ContantUs/ContactPage.js';
import SearchResults from "./pages/SearchResults";
import Login from './pages/Login/Login.js';
import Register from "./pages/Register/Register.js";
function App() {
  useEffect(() => {
    const footer = document.querySelector('.footer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    });

    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <EnhancedNavbar />

      <Routes>
        <Route path="/" element={<ProductsFlipCard />} />
        <Route path="/boys" element={<BoysPage />} />
        <Route path="/girls" element={<GirlsPage />} />
        <Route path="/baby" element={<BabyPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" exact component={SearchResults} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
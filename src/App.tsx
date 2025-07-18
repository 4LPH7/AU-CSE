import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Programs from './components/Programs';
import Activities from './components/Activities';
import Facilities from './components/Facilities';
import TrainingPlacement from './components/TrainingPlacement';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Chatbot from './components/Chatbot';
import LoginPage from './components/LoginPage';
import ResetPassword from './components/ResetPassword';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import './styles/animations.css';

const Home = () => (
  <>
    <Hero />
    <About />
    <Vision />
    <Facilities />
    <TrainingPlacement />
    <Newsletter />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
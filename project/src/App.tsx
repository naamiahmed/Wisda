import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
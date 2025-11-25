import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProductGrid from './components/ProductGrid';
import ProductHighlight from './components/ProductHighlight';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <ProductGrid />
      <ProductHighlight />
      <Footer />
    </div>
  );
}

export default App;

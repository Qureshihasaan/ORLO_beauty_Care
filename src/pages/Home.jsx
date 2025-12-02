import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import ProductGrid from '../components/ProductGrid';
import ProductHighlight from '../components/ProductHighlight';
import Journal from '../components/Journal';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <ProductGrid />
            <Philosophy />
            <ProductHighlight />
            <Journal />
            <Footer />
        </div>
    );
};

export default Home;

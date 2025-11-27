import React from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const Shop = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <ProductGrid />
            </main>
            <Footer />
        </div>
    );
};

export default Shop;

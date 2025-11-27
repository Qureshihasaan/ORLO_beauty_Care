import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left Navigation */}
                    <div className="flex items-center space-x-8">
                        <Link to="/shop" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                            SHOP
                        </Link>
                        <Link to="/contact" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                            CONTACT
                        </Link>
                        <a href="#about" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                            ABOUT
                        </a>
                        <a href="#journal" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                            JOURNAL
                        </a>
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <Link to="/" className="font-serif text-2xl tracking-widest">
                            ORLO
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-6">
                        <button className="hover:opacity-70 transition-opacity" aria-label="Search">
                            <Search size={20} />
                        </button>
                        <button className="hover:opacity-70 transition-opacity" aria-label="Shopping Cart">
                            <ShoppingBag size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

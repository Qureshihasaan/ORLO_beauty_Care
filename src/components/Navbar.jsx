import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { cartCount, toggleCart } = useCart();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden hover:opacity-70 transition-opacity"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Left Navigation - Desktop */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/shop" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                                SHOP
                            </Link>
                            <Link to="/contact" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                                CONTACT
                            </Link>
                            <Link to="/about" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                                ABOUT
                            </Link>
                            <Link to="/journal" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                                JOURNAL
                            </Link>
                        </div>

                        {/* Center Logo */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <Link to="/" className="font-serif text-2xl tracking-widest">
                               <img src="/ORLO_logo.png"  height={44} width={80} />
                            </Link>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center space-x-6">
                            {isSearchOpen ? (
                                <form onSubmit={handleSearch} className="absolute top-full left-0 right-0 bg-white p-4 border-b border-gray-200 md:static md:p-0 md:border-none md:block">
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full md:w-48 pl-4 pr-10 py-1 border-b border-black focus:outline-none text-sm"
                                            autoFocus
                                        />
                                        <button type="submit" className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                            <Search size={16} />
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={() => setIsSearchOpen(false)}
                                            className="ml-2 md:hidden"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <button 
                                    className="hover:opacity-70 transition-opacity" 
                                    aria-label="Search"
                                    onClick={() => setIsSearchOpen(true)}
                                >
                                    <Search size={20} />
                                </button>
                            )}
                            
                            <button 
                                className="hover:opacity-70 transition-opacity relative" 
                                aria-label="Shopping Cart"
                                onClick={toggleCart}
                            >
                                <ShoppingBag size={20} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-4 px-6 flex flex-col space-y-4 shadow-lg">
                        <Link 
                            to="/shop" 
                            className="text-sm tracking-wider hover:opacity-70 transition-opacity"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            SHOP
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-sm tracking-wider hover:opacity-70 transition-opacity"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            CONTACT
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-sm tracking-wider hover:opacity-70 transition-opacity"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ABOUT
                        </Link>
                        <Link 
                            to="/journal" 
                            className="text-sm tracking-wider hover:opacity-70 transition-opacity"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            JOURNAL
                        </Link>
                    </div>
                )}
            </nav>
            <CartDrawer />
        </>
    );
};

export default Navbar;

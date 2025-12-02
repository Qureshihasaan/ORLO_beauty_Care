import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { cartCount, toggleCart } = useCart();
    const navigate = useNavigate();
    
    const navRef = useRef(null);
    const leftNavRef = useRef([]);
    const logoRef = useRef(null);
    const rightActionsRef = useRef([]);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Navbar slide down animation
            gsap.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            // Logo fade in
            gsap.from(logoRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                delay: 0.3,
                ease: 'back.out(1.7)'
            });

            // Left navigation stagger
            gsap.from(leftNavRef.current, {
                y: -20,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.4,
                ease: 'power3.out'
            });

            // Right actions stagger
            gsap.from(rightActionsRef.current, {
                y: -20,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.5,
                ease: 'power3.out'
            });

        }, navRef);

        return () => ctx.revert();
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (isMenuOpen && mobileMenuRef.current) {
            gsap.from(mobileMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }, [isMenuOpen]);

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
            <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
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
                            <Link ref={(el) => (leftNavRef.current[0] = el)} to="/shop" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                                SHOP
                            </Link>
                            <Link ref={(el) => (leftNavRef.current[1] = el)} to="/contact" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                                CONTACT
                            </Link>
                            <Link ref={(el) => (leftNavRef.current[2] = el)} to="/about" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                                ABOUT
                            </Link>
                            <Link ref={(el) => (leftNavRef.current[3] = el)} to="/journal" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                                JOURNAL
                            </Link>
                        </div>

                        {/* Center Logo */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <Link ref={logoRef} to="/" className="font-serif text-2xl tracking-widest">
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
                                    ref={(el) => (rightActionsRef.current[0] = el)}
                                    className="hover:opacity-70 transition-opacity" 
                                    aria-label="Search"
                                    onClick={() => setIsSearchOpen(true)}
                                >
                                    <Search size={20} />
                                </button>
                            )}
                            
                            <button 
                                ref={(el) => (rightActionsRef.current[1] = el)}
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
                    <div ref={mobileMenuRef} className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-4 px-6 flex flex-col space-y-4 shadow-lg">
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

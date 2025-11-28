import React from 'react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Newsletter Section */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl mb-4 tracking-widest flex item-center justify-center">
                        <img src='/logo-white.png' height={44} width={80} />
                    </h2>
                    <p className="text-xl mb-6 tracking-wide">JOIN THE ORLO LIST</p>
                    <p className="text-sm mb-6 opacity-80">
                        Get exclusive access to new products and special offers
                    </p>
                    <div className="flex flex-col md:flex-row max-w-md mx-auto gap-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 px-6 py-3 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        />
                        <button className="px-8 py-3 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors w-full md:w-auto">
                            SIGN UP
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-sm tracking-wider mb-4 font-semibold">SHOP</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><a href="#" className="hover:opacity-100">Shop</a></li>
                            <li><a href="#" className="hover:opacity-100">Contact Us</a></li>
                            <li><a href="#" className="hover:opacity-100">FAQ</a></li>
                            <li><a href="#" className="hover:opacity-100">Legal</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm tracking-wider mb-4 font-semibold">ABOUT</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><a href="#" className="hover:opacity-100">About Us</a></li>
                            <li><a href="#" className="hover:opacity-100">Accessibility</a></li>
                            <li><a href="#" className="hover:opacity-100">Careers</a></li>
                            <li><a href="#" className="hover:opacity-100">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm tracking-wider mb-4 font-semibold">LEGAL</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><a href="#" className="hover:opacity-100">Blog</a></li>
                            <li><a href="#" className="hover:opacity-100">FAQ</a></li>
                            <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
                            <li><a href="#" className="hover:opacity-100">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm tracking-wider mb-4 font-semibold">SOCIAL</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs opacity-60 border-t border-gray-800 pt-8">
                    <p>©2025 ORLO. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useEffect, useRef } from 'react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const newsletterRef = useRef(null);
    const columnsRef = useRef([]);
    const socialRef = useRef(null);
    const copyrightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Newsletter section from bottom
            gsap.from(newsletterRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Footer columns stagger
            gsap.from(columnsRef.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Social icons
            gsap.from(socialRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                delay: 0.5,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Copyright fade in
            gsap.from(copyrightRef.current, {
                opacity: 0,
                duration: 0.8,
                delay: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });

        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Newsletter Section */}
                <div ref={newsletterRef} className="text-center mb-16">
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
                    <div ref={(el) => (columnsRef.current[0] = el)}>
                        <h3 className="text-sm tracking-wider mb-4 font-semibold">SHOP</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link to="/shop" className="hover:opacity-100">Shop</Link></li>
                            <li><Link to="/contact" className="hover:opacity-100">Contact Us</Link></li>
                            <li><Link to="/contact" className="hover:opacity-100">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:opacity-100">Legal</Link></li>
                        </ul>
                    </div>
                    <div ref={(el) => (columnsRef.current[1] = el)}>
                        <h3 className="text-sm tracking-wider mb-4 font-semibold">ABOUT</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link to="/about" className="hover:opacity-100">About Us</Link></li>
                            <li><Link to="/contact" className="hover:opacity-100">Accessibility</Link></li>
                            <li><Link to="/about" className="hover:opacity-100">Careers</Link></li>
                            <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
                        </ul>
                    </div>
                    <div ref={(el) => (columnsRef.current[2] = el)}>
                        <h3 className="text-sm tracking-wider mb-4 font-semibold">LEGAL</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link to="/journal" className="hover:opacity-100">Blog</Link></li>
                            <li><Link to="/contact" className="hover:opacity-100">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:opacity-100">Privacy Policy</Link></li>
                            <li><Link to="/contact" className="hover:opacity-100">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div ref={(el) => (columnsRef.current[3] = el)}>
                        <h3 className="text-sm tracking-wider mb-4 font-semibold">SOCIAL</h3>
                        <div ref={socialRef} className="flex space-x-4">
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
                <div ref={copyrightRef} className="text-center text-xs opacity-60 border-t border-gray-800 pt-8">
                    <p>©2025 ORLO. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

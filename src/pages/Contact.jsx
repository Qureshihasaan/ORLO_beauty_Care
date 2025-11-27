import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20 px-6">
                <div className="max-w-3xl mx-auto py-16">
                    <h1 className="font-serif text-4xl mb-8 tracking-widest text-center">CONTACT US</h1>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-lg tracking-wider mb-6 font-semibold">GET IN TOUCH</h2>
                            <p className="mb-4 text-sm opacity-80 leading-relaxed">
                                We'd love to hear from you. Please fill out the form or reach out to us directly.
                            </p>
                            <div className="space-y-4 text-sm opacity-80">
                                <p>
                                    <span className="block font-semibold mb-1">Email</span>
                                    hello@orlo.com
                                </p>
                                <p>
                                    <span className="block font-semibold mb-1">Phone</span>
                                    +1 (555) 123-4567
                                </p>
                                <p>
                                    <span className="block font-semibold mb-1">Address</span>
                                    123 Beauty Lane<br />
                                    New York, NY 10012
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs tracking-wider mb-2 uppercase">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs tracking-wider mb-2 uppercase">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs tracking-wider mb-2 uppercase">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 text-sm tracking-wider hover:opacity-80 transition-opacity"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;

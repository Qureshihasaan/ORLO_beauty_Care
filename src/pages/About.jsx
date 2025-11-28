import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h1 className="font-serif text-5xl md:text-6xl tracking-wide">OUR STORY</h1>
                    
                    <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                        <p>
                            ORLO was born from a desire to return to simplicity. In a world of complex routines and endless choices, we believe in the power of essentialism. Our name, derived from the Italian word for "edge" or "border," represents the boundary between nature and science, where we find our balance.
                        </p>
                        <p>
                            We source the finest natural ingredients from around the world and combine them with clinical-grade actives to create products that are both gentle and effective. Every formula is crafted with intention, ensuring that it delivers visible results without compromising on purity.
                        </p>
                        <p>
                            Sustainability is at the core of everything we do. From our responsibly sourced ingredients to our recyclable packaging, we are committed to minimizing our footprint and protecting the planet that provides for us.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        <img src="/picture1.png" alt="About ORLO" className="w-full h-auto object-cover" />
                        <img src="/picture2.png" alt="About ORLO" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;

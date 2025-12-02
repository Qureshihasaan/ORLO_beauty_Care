import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphsRef = useRef([]);
    const imagesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.from(headingRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Paragraphs stagger
            gsap.from(paragraphsRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Images stagger
            gsap.from(imagesRef.current, {
                x: -80,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imagesRef.current[0],
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main ref={containerRef} className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h1 ref={headingRef} className="font-serif text-5xl md:text-6xl tracking-wide">OUR STORY</h1>
                    
                    <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                        <p ref={(el) => (paragraphsRef.current[0] = el)}>
                            ORLO was born from a desire to return to simplicity. In a world of complex routines and endless choices, we believe in the power of essentialism. Our name, derived from the Italian word for "edge" or "border," represents the boundary between nature and science, where we find our balance.
                        </p>
                        <p ref={(el) => (paragraphsRef.current[1] = el)}>
                            We source the finest natural ingredients from around the world and combine them with clinical-grade actives to create products that are both gentle and effective. Every formula is crafted with intention, ensuring that it delivers visible results without compromising on purity.
                        </p>
                        <p ref={(el) => (paragraphsRef.current[2] = el)}>
                            Sustainability is at the core of everything we do. From our responsibly sourced ingredients to our recyclable packaging, we are committed to minimizing our footprint and protecting the planet that provides for us.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        <img ref={(el) => (imagesRef.current[0] = el)} src="/picture1.png" alt="About ORLO" className="w-full h-auto object-cover" />
                        <img ref={(el) => (imagesRef.current[1] = el)} src="/picture2.png" alt="About ORLO" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;

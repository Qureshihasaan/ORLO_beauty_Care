import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Journal from '../components/Journal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JournalPage = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero section animations
            gsap.from(titleRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

            gsap.from(subtitleRef.current, {
                y: -30,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-20">
                <div ref={heroRef} className="bg-gray-50 py-20 text-center">
                    <h1 ref={titleRef} className="font-serif text-5xl tracking-wide mb-4">THE JOURNAL</h1>
                    <p ref={subtitleRef} className="text-sm tracking-widest text-gray-500">STORIES OF BEAUTY, WELLNESS, AND LIFE</p>
                </div>
                <Journal />
            </main>
            <Footer />
        </div>
    );
};

export default JournalPage;

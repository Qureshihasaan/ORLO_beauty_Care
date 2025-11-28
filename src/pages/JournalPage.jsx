import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Journal from '../components/Journal';

const JournalPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="bg-gray-50 py-20 text-center">
                    <h1 className="font-serif text-5xl tracking-wide mb-4">THE JOURNAL</h1>
                    <p className="text-sm tracking-widest text-gray-500">STORIES OF BEAUTY, WELLNESS, AND LIFE</p>
                </div>
                <Journal />
            </main>
            <Footer />
        </div>
    );
};

export default JournalPage;

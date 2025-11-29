import React from 'react';
import { Link } from 'react-router-dom';

const JournalItem = ({ date, title, category, description }) => {
    return (
        <div className="group cursor-pointer border-b border-gray-200 py-8 first:pt-0 last:border-0">
            <p className="text-xs tracking-widest text-gray-500 mb-2 uppercase">{category} — {date}</p>
            <h3 className="font-serif text-2xl mb-4 tracking-wide group-hover:opacity-70 transition-opacity">{title}</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-md">{description}</p>
            <Link to="/journal" className="inline-block text-xs tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">
                READ MORE
            </Link>
        </div>
    );
};

const Journal = () => {
    const articles = [
        {
            id: 1,
            category: 'LIFESTYLE',
            date: 'OCTOBER 12, 2025',
            title: 'THE ART OF SLOW LIVING',
            description: `Discover the beauty of slowing down and finding peace in the everyday moments. A guide to mindful living in a fast-paced world.

In a world that never stops, choosing to pause is revolutionary. Mindful living isn’t another thing to add to your list; it’s learning to be present for the life you already have. Feel the warmth of your cup, notice your breath, really taste your food. These tiny acts reclaim what rushing steals.

At first, your mind will fight it—pulling you to tomorrow’s worries or yesterday’s regrets. Gently bring it back. Again and again. That simple return is the whole practice.

Soon, peace stops feeling like something you chase and starts feeling like something you already are. The days don’t get slower; you just stop missing them.

Slow down. The present has been waiting.`
        }
    ];

    return (
        <section className="bg-white py-24 px-6" id="journal">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl mb-4 tracking-widest">THE JOURNAL</h2>
                    <p className="text-sm tracking-wide opacity-60">STORIES OF BEAUTY AND WELLNESS</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Featured Image */}
                    <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                        <div className="w-full h-full bg-gray-200 hover:scale-105 transition-transform duration-700">
                            <img src="/jounral-image.png" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-gray-400 text-xs tracking-widest">

                            </span>
                        </div>
                    </div>

                    {/* Right Column - Article List */}
                    <div className="flex flex-col justify-center">
                        {articles.map((article) => (
                            <JournalItem key={article.id} {...article} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journal;

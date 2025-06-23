// app/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import Header from './components/Header';
import SectionA from './components/SectionA';

export default function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        // Mock userId for demonstration
        setUserId(crypto.randomUUID());
      } catch (error) {
        console.error('Error initializing:', error);
      }
    };

    initialize();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
     

      <Header />
      <SectionA />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 md:py-16">
        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-8 md:p-16 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Play. Create. Explore.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Welcome to the playful world of Fire Divine, where imagination knows no bounds.
          </p>
          <button className="bg-white text-indigo-600 hover:bg-indigo-50 transition-colors duration-300 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105">
            Discover Our Games
          </button>
        </section>

        {/* Games */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Our Award-Winning Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fire Divine World',
                img: 'https://placehold.co/600x400/805ad5/ffffff?text=Toca+Boca+World',
                desc: 'Create your own stories and explore an expansive world filled with endless possibilities.',
              },
              {
                title: 'Fire Divine Jr.',
                img: 'https://placehold.co/600x400/4299e1/ffffff?text=Toca+Boca+Jr.',
                desc: 'A bundle of our most-loved games for younger kids, fostering imagination and problem-solving.',
              },
              {
                title: 'Fire Divine Days',
                img: 'https://placehold.co/600x400/f6ad55/ffffff?text=Toca+Boca+Days',
                desc: 'Our first multiplayer experience, inviting kids to explore a 3D world together.',
              },
            ].map((game) => (
              <div key={game.title} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* <img
                  src={game.img}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/600x400/999999/ffffff?text=Image+Not+Found';
                  }}
                /> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{game.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{game.desc}</p>
                  <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Our Philosophy: The Power of Play
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
            <p className="mb-4">
              At Fire Divine, we believe in the power of play to spark imagination, creativity, and self-expression.
            </p>
            <p className="mb-4">
              With millions of players worldwide, we are committed to providing unique and engaging experiences that encourage curiosity and storytelling.
            </p>
            <p>
              Join us on a journey where every tap, swipe, and decision opens up a new adventure. Let&apos;s play!
            </p>
          </div>
        </section>

        {/* User ID */}
        {userId && (
          <section className="bg-gray-100 rounded-lg p-6 text-center text-sm text-gray-600 shadow-inner">
            <p>
              Your User ID:{' '}
              <span className="font-mono bg-gray-200 px-2 py-1 rounded-md">{userId}</span>
            </p>
            <p className="mt-2">This ID is used for potential data storage in a multi-user app context.</p>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6 md:px-10 rounded-t-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold mb-2">Fire Divine</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Fire Divine AB. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

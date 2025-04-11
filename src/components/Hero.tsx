import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const Hero = () => {
  const componentRef = useGSAPAnimation();

  return (
    <div ref={componentRef} className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover parallax"
          data-speed="0.5"
          src="https://images.unsplash.com/photo-1562516155-e0c1ee44059b?auto=format&fit=crop&q=80&w=2000"
          alt="Campus"
        />
        <div className="absolute inset-0 gradient-animation" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl split-text">
          Department of Computer Science & Engineering
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300 reveal_fromLeft reveal">
          Established in 1984, we are committed to academic excellence and technological innovation,
          developing versatile professionals ready for the challenges of tomorrow.
        </p>
        <div className="mt-10 flex space-x-4 reveal_fromRight reveal">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 hover-effect"
          >
            Contact Us
          </a>
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 hover-effect"
          >
            <MessageCircle className="mr-2" size={20} />
            Chat with Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
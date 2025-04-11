import React from 'react';
import { Target, Flag } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const Vision = () => {
  const componentRef = useGSAPAnimation();

  return (
    <div ref={componentRef} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl split-text">
            Vision & Mission
          </h2>
        </div>
        <div className="mt-16">
          <div className="space-y-12">
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="relative reveal reveal_fromLeft">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl flex items-center">
                    <Target className="mr-4 text-blue-600" size={32} />
                    Vision
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    To provide a congenial ambience for individuals to develop and blossom as
                    academically superior, socially conscious and nationally responsible citizens.
                  </p>
                </div>
                <div className="mt-10 -mx-4 relative lg:mt-0 reveal reveal_fromRight">
                  <img
                    className="relative mx-auto rounded-lg shadow-lg hover-effect"
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
                    alt="Vision"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="relative order-2 lg:order-1 reveal reveal_fromLeft">
                  <img
                    className="relative mx-auto rounded-lg shadow-lg hover-effect"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                    alt="Mission"
                  />
                </div>
                <div className="relative order-1 lg:order-2 reveal reveal_fromRight">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl flex items-center">
                    <Flag className="mr-4 text-blue-600" size={32} />
                    Mission
                  </h3>
                  <div className="mt-3 text-lg text-gray-500">
                    <ul className="space-y-4">
                      <li>• Impart high-quality computer knowledge through a dynamic scholastic environment.</li>
                      <li>• Develop technical, communication, and leadership skills for versatile professional growth.</li>
                      <li>• Foster life-long learning to adapt to changes in career, society, technology, and environment.</li>
                      <li>• Build a community with high ethical standards for innovative research and development.</li>
                      <li>• Expose students to emerging technological advancements meeting industry demands.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
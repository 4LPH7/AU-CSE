import React from 'react';
import { Monitor, Library, Users, Laptop } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const Facilities = () => {
  const componentRef = useGSAPAnimation();

  const facilities = [
    {
      title: 'Laboratory Facilities',
      description: 'Sixteen specialized laboratories including Network, DBMS, Computer Graphics, Web Technology, and Research labs providing hands-on experience.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000',
    },
    {
      title: 'Library',
      description: 'Over 7,500 books covering various Computer Science areas, along with E-resources and Internet facilities for accessing journals and magazines.',
      icon: Library,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000',
    },
    {
      title: 'Placement Cell',
      description: 'Dedicated placement assistance with training programs, technical talks, and successful placement of over 300 students in various companies.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2000',
    },
    {
      title: 'Associations & Clubs',
      description: 'CSEA and CSI chapter promoting leadership and organizational skills through various academic events throughout the year.',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000',
    },
  ];

  return (
    <div ref={componentRef} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl split-text">
            Our Facilities
          </h2>
          <p className="mt-4 text-xl text-gray-500 reveal">
            State-of-the-art facilities supporting academic excellence and research innovation
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className={`flex flex-col lg:flex-row gap-8 items-center reveal ${
                index % 2 === 0 ? 'reveal_fromLeft' : 'reveal_fromRight'
              }`}
            >
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-xl shadow-lg hover-effect">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center space-x-4 mb-4">
                  <facility.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{facility.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
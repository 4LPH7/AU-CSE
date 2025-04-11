import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const About = () => {
  const componentRef = useGSAPAnimation();
  const [isExpanded, setIsExpanded] = useState(false);

  const shortContent = `The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. The department follows a Student Centric Teaching Methodology with a Flexible Choice based Credit System. Various Associations and Clubs promote leadership and organizational skills through academic events throughout the year.`;

  const fullContent = [
    `The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. Flexible Choice based Credit System. Student Centric Teaching Methodology is adopted. The various Associations and Clubs promote the leadership and organisational skills of the students by conducting various academic events throughout the year. Apart from academics, students also involve themselves in activities that inculcate service and team spirit. The department library has more than 7500 books.`,
    `The department has two research laboratories having high-end systems with NVIDIA GeForce RTX 3080 Graphics Card to carry out research in the areas of Speech, Image/Video Processing and Data Analytics. There are six Computer Laboratories having 300 systems, an IoT Laboratory, and three seminar halls with necessary ICT facilities to conduct conferences/seminars and placement activities.`
  ];

  return (
    <div ref={componentRef} className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 split-text">
          About the Department
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8 reveal">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-5">
            {isExpanded
              ? fullContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              : <p>{shortContent}</p>
            }
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
            <ChevronDown
              className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

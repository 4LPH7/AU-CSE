// components/Newsletter.tsx
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const Newsletter = () => {
  const componentRef = useGSAPAnimation();

  const newsletters = [
    {
      issue: 'Volume-1, Issue-1',
      url: 'https://annamalaiuniversity.ac.in/download/2024/CSE_NEWSLETTER_1st_Issue.pdf'
    },
    {
      issue: 'Volume-1, Issue-2',
      url: 'https://annamalaiuniversity.ac.in/download/2024/CSE_NEWSLETTER_2nd_Issue.pdf'
    },
    {
      issue: 'Volume-1, Issue-3',
      url: 'https://annamalaiuniversity.ac.in/download/2024/CSE_NEWSLETTER_Issue3.pdf'
    },
    {
      issue: 'Volume-1, Issue-4',
      url: 'https://annamalaiuniversity.ac.in/download/2024/CSE_NEWSLETTER_Issue4.pdf'
    }
  ];

  return (
    <div ref={componentRef} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl split-text">
            Department Newsletter
          </h2>
          <p className="mt-4 text-xl text-gray-500 reveal-subtitle">
            Stay updated with our latest news, achievements, and events
          </p>
        </div>

        {/* Updated grid section with proper animation classes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 newsletter-grid">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.issue}
              className="bg-white rounded-xl shadow-lg overflow-hidden newsletter-item reveal_fromLeft"
            >
              <div className="p-6">
                <div className="flex justify-center mb-6 icon-container">
                  <FileText className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                  {newsletter.issue}
                </h3>
                <div className="flex justify-center">
                  <a
                    href={newsletter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
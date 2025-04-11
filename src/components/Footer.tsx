import React from 'react';
import { Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <MapPin className="mr-2" size={20} />
                Department of Computer Science & Engineering,
                <br />Annamalai University, Annamalai Nagar-608002
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                04144-239733 & 239738 (Ext: 517 & 481)
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={20} />
                aucse2012@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Admissions</a></li>
              <li><a href="#" className="hover:text-white">Student Portal</a></li>
              <li><a href="#" className="hover:text-white">Staff Portal</a></li>
              <li><a href="#" className="hover:text-white">Alumni</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Annamalai-University/61567033867186/" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://www.linkedin.com/school/annamalai-university/posts/?feedView=all" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UCxOHQifsx6t4wRk79r1ISPQ" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2022 - 26 Annamalai University | Design By: Data Science Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
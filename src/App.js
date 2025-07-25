import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone, Mail, Building } from 'lucide-react';

import Navbar from './com/Navbar';
import About from './com/About';
import Contact from './com/Contact';
import Home from './com/Home';
import Services from './com/Services';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Footer Columns */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">ALRAYAN ALTHAHBY</h3>
                <p className="text-gray-600">
                  Professional Motorcycle Delivery Services L.L.C
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
                <div className="space-y-3">
                  <a 
                    href="mailto:alrayyandeliveryservices@gmail.com" 
                    className="flex items-center text-gray-600 hover:text-[#3c859e] transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3 text-[#3c859e]" />
                    alrayyandeliveryservices@gmail.com
                  </a>
                  <a 
                    href="tel:+971561837606" 
                    className="flex items-center text-gray-600 hover:text-[#3c859e] transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3 text-[#3c859e]" />
                    +971 56 183 7606
                  </a>
                </div>
              </div>

              {/* Location Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                <div className="flex items-start text-gray-600">
                  <Building className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-[#3c859e]" />
                  <span>
                    Motor City, Detroit House,<br />
                    Office 304, 3rd Floor,<br />
                    Dubai, UAE
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p className="mb-4 md:mb-0">
                  © {new Date().getFullYear()} ALRAYAN ALTHAHBY. All rights reserved.
                </p>
                <p>
                  Developed by{' '}
                  <a
                    href="https://hidmsolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3c859e] hover:underline"
                  >
                    HIDM Solutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow border-b border-gray-200'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
           <div>
  <div className="text-base font-semibold text-gray-900">ALRAYAN ALTHAHBY</div>
  <div className="text-xs text-gray-500">Delivery Services L.L.C</div>
</div>


            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-black transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact + CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+971561837606" className="flex items-center text-sm text-gray-600 hover:text-black">
                <Phone className="w-4 h-4 mr-1" />
                +971 56 183 7606
              </a>
              <a
                href="/contact"
                className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-black"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-gray-700 hover:text-black"
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t pt-4 text-sm space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +971 56 183 7606
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                 alrayandelivery.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <a
                    href="https://maps.app.goo.gl/uz56ogqpPnVEyPpw8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Dubai, UAE
                  </a>
                </div>
                <a
                  href="/contact"
                  className="block w-full text-center mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  Get Quote Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;

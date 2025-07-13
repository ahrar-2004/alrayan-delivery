import React from 'react';

const logos = [
  { src: '/android-chrome-192x192.png', alt: 'Android Logo' },
  { src: '/favicon-32x32.png', alt: 'Favicon 32' },
  { src: '/favicon-16x16.png', alt: 'Favicon 16' },
  { src: '/logo.png', alt: 'Logo' },
  { src: '/logo white.png', alt: 'White Logo' },
  { src: '/b1af0daf-5669-49e4-ae63-d7b3ebf39dd5.png', alt: 'Uploaded Icon' }
];

const LogoShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Branding</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;

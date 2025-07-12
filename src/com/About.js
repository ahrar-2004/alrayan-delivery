import React from 'react';
import { Clock, Shield, Users, Map } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Punctual Delivery",
      description: "Timely deliveries across all UAE emirates"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Trusted Service",
      description: "Reliable motorcycle delivery solutions"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Professional Riders",
      description: "100+ skilled motorcycle drivers"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About ALRAYAN ALTHAHBY
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional motorcycle delivery services serving Dubai and all UAE emirates
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Delivery Services</h2>
            <p className="text-gray-600 mb-8">
              ALRAYAN ALTHAHBY DELIVERY SERVICES L.L.C provides reliable and professional motorcycle 
              delivery solutions across the UAE. We partner with major delivery platforms to ensure 
              fast and efficient service.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {['TALABAT', 'NOON', 'CAREEM'].map((partner) => (
                <div key={partner} className="bg-white p-3 rounded shadow-sm">
                  <span className="font-medium text-gray-700">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Area */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Coverage</h2>
              <p className="text-gray-600 mb-4">
                We operate across all emirates of the UAE with our base in Dubai.
              </p>
              <div className="flex items-start">
                <Map className="h-5 w-5 mt-1 mr-3 text-blue-600" />
                <p className="text-gray-600">
                  Motor City, Detroit House, Office 304, 3rd Floor, Dubai, UAE
                </p>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded shadow-sm">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-12 w-12 mx-auto text-blue-600 mb-3" />
                  <p className="font-medium text-gray-700">UAE Wide Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">100+</p>
              <p className="text-gray-600">Professional Riders</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">5000+</p>
              <p className="text-gray-600">Monthly Deliveries</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">99%</p>
              <p className="text-gray-600">On-Time Rate</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">24/7</p>
              <p className="text-gray-600">Service Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { Clock, Shield, Users, Map } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Clock className="h-6 w-6 text-[#3c859e]" />,
      title: "Punctual Delivery",
      description: "Timely deliveries across all UAE emirates.",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#3c859e]" />,
      title: "Trusted Service",
      description: "Reliable and secure delivery solutions.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#3c859e]" />,
      title: "Professional Riders",
      description: "100+ skilled motorcycle drivers ready to serve.",
    },
  ];

  return (
    <div className="bg-white text-[#1f1f1f]">
      {/* Hero */}
      <section className="py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">About ALRAYAN ALTHAHBY</h1>
        <p className="text-[#4a4a4a] max-w-2xl mx-auto text-lg">
          Professional motorcycle delivery services covering Dubai and all UAE emirates.
        </p>
      </section>

      {/* Overview */}
      <section className="py-12 bg-[#deeaef]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Delivery Services</h2>
          <p className="text-[#4a4a4a] mb-8">
            We offer reliable, efficient delivery backed by partnerships with leading platforms.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {['TALABAT', 'NOON', 'CAREEM'].map((partner) => (
              <div
                key={partner}
                className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition"
              >
                <span className="font-medium text-[#3c859e]">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div key={index} className="p-6 rounded-md text-center bg-[#f9f9f9]">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[#4a4a4a] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-[#deeaef]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Service Coverage</h2>
            <p className="text-[#4a4a4a] mb-4">
              We operate across all emirates with headquarters in Dubai.
            </p>
            <div className="flex gap-3 items-start">
              <Map className="h-5 w-5 mt-1 text-[#3c859e]" />
              <p className="text-[#4a4a4a] text-sm">
                Motor City, Detroit House, Office 304, 3rd Floor, Dubai, UAE
              </p>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded shadow-sm flex items-center justify-center">
            <div className="text-center">
              <Map className="h-10 w-10 mx-auto text-[#3c859e] mb-2" />
              <p className="text-[#4a4a4a] font-medium">UAE Wide Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Professional Riders', value: '100+' },
            { label: 'Monthly Deliveries', value: '5000+' },
            { label: 'On-Time Rate', value: '99%' },
            { label: 'Service Available', value: '24/7' },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-[#845ec2] mb-2">{stat.value}</p>
              <p className="text-[#4a4a4a] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

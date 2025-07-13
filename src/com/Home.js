import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Clock, Shield, Package, Star,
  Users, Bike, Phone, Mail, Zap, Globe
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "100+", label: "Professional Riders", icon: <Bike className="w-6 h-6" /> },
    { number: "5000+", label: "Monthly Deliveries", icon: <Package className="w-6 h-6" /> },
    { number: "99%", label: "On-Time Rate", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Service Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const features = [
    { icon: <Clock className="w-8 h-8" />, title: "Punctual Delivery", description: "Timely deliveries across all UAE emirates" },
    { icon: <Shield className="w-8 h-8" />, title: "Trusted Service", description: "Reliable motorcycle delivery solutions" },
    { icon: <Zap className="w-8 h-8" />, title: "Professional Riders", description: "100+ skilled motorcycle drivers" },
    { icon: <Globe className="w-8 h-8" />, title: "UAE Coverage", description: "Service available across all emirates" }
  ];

  const partners = [
    { name: 'Talabat', color: 'bg-orange-500' },
    { name: 'Noon', color: 'bg-yellow-400' },
    { name: 'Deliveroo', color: 'bg-blue-500' },
    { name: 'Careem', color: 'bg-green-500' },
    { name: 'Smiles', color: 'bg-purple-500' },
    { name: 'Aramex', color: 'bg-red-500' }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Dubai Restaurant Group",
      text: "ALRAYAN ALTHAHBY has revolutionized our food delivery. Their reliability is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "E-commerce Startup",
      text: "Professional service that grows with our business. Highly recommended!",
      rating: 5
    },
    {
      name: "Mohamed Hassan",
      company: "Local Business Owner",
      text: "Fast, reliable, and trustworthy. They deliver much more than promised.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white text-[#1f1f1f]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-[#f8fbfc]">
        <div className={`max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                <span className="block text-[#3c859e]">ALRAYAN ALTHAHBY</span>
                Motorcycle Delivery You Can Trust
              </h1>
              <p className="text-lg text-[#4a4a4a] italic">
                "We deliver much more than we promised, one ride at a time"
              </p>
              <p className="text-[#4a4a4a]">
                Reliable motorcycle delivery services across Dubai and the UAE
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="/contact" className="bg-[#3c859e] hover:bg-[#2b677e] text-white px-8 py-3 rounded-md inline-flex items-center font-medium transition">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+971561837606" className="border border-gray-300 text-[#1f1f1f] hover:bg-gray-100 px-8 py-3 rounded-md inline-flex items-center font-medium transition">
                  <Phone className="mr-2 h-5 w-5" />
                  +971 56 183 7606
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200">
                <Bike className="w-28 h-28 mx-auto text-[#3c859e] mb-4" />
                <h3 className="text-xl font-medium text-center">24/7 Delivery Services</h3>
                <p className="text-[#4a4a4a] text-center mt-2">Across all UAE emirates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#f4f9fa] p-6 rounded-md text-center border border-gray-200">
                <div className="text-[#3c859e] flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold mb-2">{stat.number}</p>
                <p className="text-[#4a4a4a]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f8fbfc]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-[#4a4a4a]">Professional motorcycle delivery solutions</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                <div className="text-[#3c859e] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#4a4a4a]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#3c859e] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-lg opacity-90">Trusted by leading delivery platforms</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className={`${partner.color} p-5 rounded-md text-center font-medium shadow-md hover:shadow-lg transition-shadow`}>
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-[#4a4a4a]">What our customers say about our services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f4f9fa] p-6 rounded-md border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[#4a4a4a] italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-[#4a4a4a]">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f8fbfc]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-[#4a4a4a] mb-8">
            Contact ALRAYAN ALTHAHBY for reliable motorcycle delivery services in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#3c859e] hover:bg-[#2b677e] text-white px-8 py-3 rounded-md inline-flex items-center justify-center font-medium transition">
              Get Quote <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="mailto:alrayyandeliveryservices@gmail.com" className="bg-white border border-gray-300 text-[#1f1f1f] hover:bg-gray-100 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium transition">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

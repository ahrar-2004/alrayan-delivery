import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Clock, Shield, ChevronRight, 
  Package, Star, Users, CheckCircle, 
  Bike, Phone, Mail, Zap, Globe 
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Data sections
  const stats = [
    { number: "100+", label: "Professional Riders", icon: <Bike className="w-6 h-6" /> },
    { number: "5000+", label: "Monthly Deliveries", icon: <Package className="w-6 h-6" /> },
    { number: "99%", label: "On-Time Rate", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Service Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const features = [
    { 
      icon: <Clock className="w-8 h-8" />,
      title: "Punctual Delivery", 
      description: "Timely deliveries across all UAE emirates" 
    },
    { 
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Service", 
      description: "Reliable motorcycle delivery solutions" 
    },
    { 
      icon: <Zap className="w-8 h-8" />,
      title: "Professional Riders", 
      description: "100+ skilled motorcycle drivers" 
    },
    { 
      icon: <Globe className="w-8 h-8" />,
      title: "UAE Coverage", 
      description: "Service available across all emirates" 
    }
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className={`max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                <span className="block text-blue-600">ALRAYAN ALTHAHBY</span>
                Professional Motorcycle Delivery
              </h1>
              
              <p className="text-xl text-gray-600 italic">
                "We deliver much more than we promised, one ride at a time"
              </p>
              
              <p className="text-lg text-gray-600">
                Reliable motorcycle delivery services across Dubai and the UAE
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="tel:+971561837606" 
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +971 56 183 7606
                </a>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <Bike className="w-32 h-32 mx-auto text-blue-600 mb-6" />
                <h3 className="text-xl font-medium text-center text-gray-800">24/7 Delivery Services</h3>
                <p className="text-gray-600 text-center mt-2">Across all UAE emirates</p>
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
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Professional motorcycle delivery solutions</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl opacity-90">Trusted by leading delivery platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`${partner.color} p-6 rounded-lg text-center font-bold text-white shadow-md hover:shadow-lg transition-shadow`}
              >
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our customers say about our services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact ALRAYAN ALTHAHBY for reliable motorcycle delivery services in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors"
            >
              Get Quote <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="mailto:alrayyandeliveryservices@gmail.com" 
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors"
            >
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
import React from 'react';
import { 
  Bike, Clock, Shield, Package, 
  Users, Zap, Globe, CheckCircle, 
  ArrowRight, Phone, Mail
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Bike className="w-10 h-10" />,
      title: "Motorcycle Delivery",
      description: "Fast and reliable delivery across Dubai",
      features: [
        "Same-day delivery available",
        "Professional riders",
        "Real-time tracking",
        "Secure handling"
      ],
      popular: true
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Business Solutions",
      description: "Custom delivery services for companies",
      features: [
        "Dedicated account managers",
        "Volume discounts",
        "API integration",
        "24/7 support"
      ],
      popular: false
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "UAE Coverage",
      description: "Nationwide delivery services",
      features: [
        "All 7 emirates covered",
        "Inter-city deliveries",
        "Scheduled pickups",
        "Corporate accounts"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Food Delivery",
      description: "Temperature-controlled food transport"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Document Courier",
      description: "Secure document handling"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Scheduled Services",
      description: "Regular pickup/delivery schedules"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Express Delivery",
      description: "Urgent same-hour services"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Delivery Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional motorcycle delivery solutions across the UAE
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">Comprehensive delivery solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-xl border ${
                  service.popular 
                    ? 'border-blue-200 bg-white shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-blue-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600">Tailored solutions for specific needs</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg bg-white border border-gray-200 hover:border-blue-200 transition-colors"
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact ALRAYAN ALTHAHBY for reliable motorcycle delivery services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center justify-center font-medium"
            >
              Get Quote <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+971561837606"
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full inline-flex items-center justify-center font-medium"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
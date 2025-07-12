import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with ALRAYAN ALTHAHBY Delivery Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Details</h2>

          <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
            <div className="bg-blue-50 p-3 rounded-full mr-4">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Phone</h3>
              <a href="tel:+971561837606" className="text-blue-600 hover:underline">
                +971 56 183 7606
              </a>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
            <div className="bg-blue-50 p-3 rounded-full mr-4">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <a href="mailto:alrayyandeliveryservices@gmail.com" className="text-blue-600 hover:underline">
               alrayandelivery.com
              </a>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
            <div className="bg-blue-50 p-3 rounded-full mr-4">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Address</h3>
              <p className="text-gray-600">
                Motor City, Detroit House,<br />
                Office 304, 3rd Floor,<br />
                Dubai, UAE
              </p>
            </div>
          </div>

          {/* Fixed Google Map Embed */}
          <div className="rounded-lg overflow-hidden border border-gray-200">
        <iframe
  title="ALRAYAN ALTHAHBY Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6533189043095!2d55.31351627526427!3d25.282245277665288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d00061d1249%3A0x5b4aff3ecd7a31dd!2sALRAYAN%20ALTHAHBY!5e0!3m2!1sen!2sae!4v1752345971991!5m2!1sen!2sae"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


   


          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-1">Service Hours</h3>
            <p className="text-gray-700">24/7 delivery service across all UAE emirates</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number (Optional)"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition flex items-center justify-center"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center p-3 bg-green-50 text-green-700 rounded-md border border-green-200">
                <CheckCircle className="w-5 h-5 mr-2" />
                Message sent successfully! We'll contact you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                <AlertCircle className="w-5 h-5 mr-2" />
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

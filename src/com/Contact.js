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
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-[#deeaef] py-16 border-b border-[#c8d6db] text-center">
        <h1 className="text-4xl font-bold text-[#1f1f1f] mb-2">Contact Us</h1>
        <p className="text-[#4a4a4a] text-lg">
          Get in touch with ALRAYAN ALTHAHBY Delivery Services
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1f1f1f]">Our Details</h2>

          {[
            {
              icon: <Phone className="w-5 h-5 text-[#3c859e]" />,
              title: 'Phone',
              content: (
                <a href="tel:+971561837606" className="text-[#3c859e] hover:underline">
                  +971 56 183 7606
                </a>
              )
            },
            {
              icon: <Mail className="w-5 h-5 text-[#3c859e]" />,
              title: 'Email',
              content: (
                <a href="mailto:alrayyandeliveryservices@gmail.com" className="text-[#3c859e] hover:underline">
                  alrayandelivery.com
                </a>
              )
            },
            {
              icon: <MapPin className="w-5 h-5 text-[#3c859e]" />,
              title: 'Address',
              content: (
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Motor City, Detroit House,<br />
                  Office 304, 3rd Floor,<br />
                  Dubai, UAE
                </p>
              )
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start p-4 bg-white border border-[#deeaef] rounded-md">
              <div className="bg-[#deeaef] p-3 rounded-full mr-4">{item.icon}</div>
              <div>
                <h3 className="font-medium text-[#1f1f1f] mb-1">{item.title}</h3>
                {item.content}
              </div>
            </div>
          ))}

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-[#deeaef]">
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

          {/* Service Hours */}
          <div className="p-4 bg-[#deeaef] rounded-md border border-[#cbdde3]">
            <h3 className="font-medium text-[#845ec2] mb-1">Service Hours</h3>
            <p className="text-[#4a4a4a] text-sm">24/7 delivery service across all UAE emirates</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white p-6 rounded-lg border border-[#deeaef] shadow-sm">
          <h2 className="text-2xl font-semibold text-[#1f1f1f] mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: 'name', type: 'text', placeholder: 'Your Name', required: true },
              { name: 'email', type: 'email', placeholder: 'Your Email', required: true },
              { name: 'phone', type: 'tel', placeholder: 'Phone Number (Optional)', required: false },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full p-3 border border-[#ccc] rounded-md focus:ring-[#3c859e] focus:border-[#3c859e] text-sm"
              />
            ))}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 border border-[#ccc] rounded-md focus:ring-[#3c859e] focus:border-[#3c859e] text-sm"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#3c859e] hover:bg-[#2b677e] text-white font-medium py-3 px-4 rounded-md transition flex items-center justify-center"
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
              <div className="flex items-center p-3 bg-green-50 text-green-700 rounded-md border border-green-200 text-sm">
                <CheckCircle className="w-5 h-5 mr-2" />
                Message sent successfully! We'll contact you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center p-3 bg-red-50 text-red-700 rounded-md border border-red-200 text-sm">
                <AlertCircle className="w-5 h-5 mr-2" />
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;

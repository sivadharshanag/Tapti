import React, { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'
import FastPaperRockets from '../components/FastPaperRockets'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the following with your EmailJS credentials
    const SERVICE_ID = 'service_ex37rfd';
    const TEMPLATE_ID = 'template_kvgkhqj';
    const PUBLIC_KEY = 'ewTbNH5PtzkJABLWF';

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    )
    .then((result) => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
    }, (error) => {
        alert('Failed to send message, please try again.');
    });
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Address",
      details: "15, Main Road, Near JP Hospital, Pudupalayam, Gobichettipalayam.",
      link: "https://maps.google.com/?q=Gobichettipalayam,Tamil+Nadu"
    },
    {
      icon: FiPhone,
      title: "Phone",
      details: "98427 67814",
      link: "tel:+919842767814"
    },
    {
      icon: FiMail,
      title: "Email",
      details: "taptiultimateshop@gmail.com",
      link: "mailto:taptiultimateshop@gmail.com"
    },
    {
      icon: FiClock,
      title: "Business Hours",
      details: "Monday - Saturday: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 6:00 PM"
    }
  ]

  const services = [
    "Printing & Xerox",
    "Document Services",
    "Government Services",
    "Astrology Services",
    "Project Work",
    "Online Certificates"
  ]

  return (
    <div className="pt-20 relative overflow-hidden">
      <FastPaperRockets />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're here to help with all your printing and service needs. 
              Visit us or get in touch for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Visit our shop or reach out to us for any inquiries about our services.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 whitespace-pre-line"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                            {info.details}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Services Offered */}
              <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Services We Offer
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8" data-aos="fade-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Have a question or need assistance? Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
                  <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <FiSend className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit our shop located in the heart of Gobichettipalayam, easily accessible from all parts of the city.
            </p>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.45678901234!2d77.4!3d11.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f4b4b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sGobichettipalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tapti Ultimate Shop Location"
              ></iframe>
            </div>
            
            {/* Map Overlay with Shop Info */}
            <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg max-w-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tapti Ultimate Shop
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                15, Main Road, Near JP Hospital<br />
                Pudupalayam, Gobichettipalayam
              </p>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <FiPhone className="w-4 h-4 mr-2" />
                <span>98427 67814</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Visit our shop today and experience the best in printing and services. 
              Our expert team is ready to assist you with all your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919842767814"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FiPhone className="mr-2" />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=Gobichettipalayam,Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <FiMapPin className="mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 
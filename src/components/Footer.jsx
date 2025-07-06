import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiPrinter, FiFileText, FiStar, FiGlobe, FiSettings } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const serviceCategories = [
    { name: 'Printing & Stationery', icon: FiPrinter, path: '/services' },
    { name: 'Document Services', icon: FiFileText, path: '/services' },
    { name: 'Government Services', icon: FiGlobe, path: '/services' },
    { name: 'Astrology Services', icon: FiStar, path: '/services' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <FiPrinter className="text-white text-xl" />
              </div>
              <div>
                <span className="text-xl font-bold">TAPTI ULTIMATE SHOP</span>
                <div className="text-xs text-gray-400">Your Complete Printing & Services Solution</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Serving the community with excellence in printing, document services, and government solutions for over a decade. 
              Your trusted partner for all printing and service needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+919842767814"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Call Us"
              >
                <FiPhone className="w-5 h-5" />
              </a>
              <a
                href="mailto:taptiultimateshop@gmail.com"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Email Us"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a
                href="https://maps.google.com/?q=Gobichettipalayam,Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Visit Us"
              >
                <FiMapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {serviceCategories.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FiMapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    15, Main Road, Near JP Hospital,<br />
                    Pudupalayam, Gobichettipalayam
                  </span>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FiPhone className="w-4 h-4 text-white" />
                </div>
                <a
                  href="tel:+919842767814"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  98427 67814
                </a>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FiMail className="w-4 h-4 text-white" />
                </div>
                <a
                  href="mailto:taptiultimateshop@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  taptiultimateshop@gmail.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
              <h4 className="text-sm font-semibold text-white mb-2">Business Hours</h4>
              <div className="text-xs text-gray-300 space-y-1">
                <div>Monday - Saturday: 9:00 AM - 8:00 PM</div>
                <div>Sunday: 10:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tapti Ultimate Shop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPrint, FaFileAlt, FaPenNib, FaKeyboard, FaBaby, FaIdCard, FaGlobe,
  FaArrowRight, FaRocket
} from 'react-icons/fa';
import PaperRocket from '../components/PaperRocket';

const Services = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    // Create multiple paper rockets for background animation
    const createRockets = () => {
      const rocketElements = [];
      for (let i = 0; i < 12; i++) {
        rocketElements.push(<PaperRocket key={i} />);
      }
      setRockets(rocketElements);
    };

    createRockets();
  }, []);

  const serviceCategories = [
    {
      id: 'printing-xerox',
      title: 'Printing & Xerox',
      icon: FaPrint,
      description: 'High-quality black & color xerox and photo prints',
      color: 'from-blue-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'print-binding',
      title: 'Printout & Binding',
      icon: FaFileAlt,
      description: 'Fast printouts, lamination and professional document binding',
      color: 'from-green-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'stationery-design',
      title: 'Stationery & Design',
      icon: FaPenNib,
      description: 'Stationery sales, brochures, letter pads & bill books',
      color: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'typing-documents',
      title: 'Typing & Projects',
      icon: FaKeyboard,
      description: 'Typing in Tamil/English, project preparation & submission',
      color: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'astrology-services',
      title: 'Astrology & Baby Names',
      icon: FaBaby,
      description: 'Horoscope generation, baby name suggestions',
      color: 'from-yellow-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'pan-id-services',
      title: 'PAN & ID Services',
      icon: FaIdCard,
      description: 'PAN card creation/correction and Aadhaar help',
      color: 'from-indigo-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'online-govt-services',
      title: 'Online Govt Services',
      icon: FaGlobe,
      description: 'Patta/Chitta, Family Card, Hall Ticket, PF & more',
      color: 'from-teal-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Paper Rockets */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {rockets}
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions for all your printing, document, and service needs. 
              From basic printing to complex government services, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              
              return (
                <div
                  key={category.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-200 dark:border-gray-700"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* View More Button */}
                    <Link
                      to={`/${category.id}`}
                      className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:from-blue-700 group-hover:to-purple-700 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        View More
                        <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help Choosing a Service?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our expert team is here to help you find the perfect solution for your needs. 
              Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaGlobe className="mr-2" />
                Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <FaIdCard className="mr-2" />
                Visit Our Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 
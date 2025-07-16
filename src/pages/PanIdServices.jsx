import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaIdCard, FaPlus, FaEdit, FaSearch, FaUserEdit, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaCheckCircle, FaRocket, FaCreditCard
} from 'react-icons/fa';
import FastPaperRockets from '../components/FastPaperRockets';

const PanIdServices = () => {


  const subcategories = [
    {
      id: 'new-pan-card',
      title: 'New PAN Card',
      description: 'Fresh PAN card application with complete document assistance',
      
      features: ['Online Application', 'Document Assistance', 'Quick Processing', 'Status Tracking'],
      icon: FaPlus,
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'correction-pan',
      title: 'Correction PAN',
      description: 'Fix errors in your existing PAN card details',
     
      features: ['Name Correction', 'Address Update', 'Photo Update', 'Quick Processing'],
      icon: FaEdit,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'missing-pan',
      title: 'Missing PAN',
      description: 'Reissue of lost or damaged PAN card',
      
      features: ['Duplicate Application', 'Document Verification', 'Quick Processing', 'Tracking'],
      icon: FaSearch,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'aadhaar-card',
      title: 'Aadhaar Card',
      description: 'Aadhaar card services including updates and corrections',
      
      features: ['Updates', 'Corrections', 'Assistance', 'Document Help'],
      icon: FaUserEdit,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Paper Rockets */}
      <FastPaperRockets />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="flex items-center space-x-4">
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <FaArrowLeft className="w-5 h-5" />
                  <span>Back to Services</span>
                </Link>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <FaIdCard className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                      PAN & ID Services
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                      Professional PAN card and ID assistance
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Complete PAN card and Aadhaar services with expert assistance. 
                  From new applications to corrections and updates, we handle 
                  all your ID document needs efficiently and securely.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Expert Assistance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Quick Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Status Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Secure Handling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="PAN & ID Services"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="w-full px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our range of PAN card and ID services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {subcategories.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {service.cost}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:from-indigo-700 group-hover:to-blue-700">
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="w-full px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Contact us today for your PAN card and ID service needs. 
                We provide expert assistance with quick processing times.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">98427 67814</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">taptiultimateshop@gmail.com</span>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">
                    #15, Main Road, Near JP Hospital, Pudupalayam, Gobichettipalayam
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Service Pricing
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">New PAN Card</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Correction PAN</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Missing PAN</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Aadhaar Services</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹100</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Express Service</span>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">+₹50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PanIdServices; 
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FiArrowLeft, FiPrinter, FiFileText, FiStar, FiGlobe, FiSettings, 
  FiMail, FiMapPin, FiPhone, FiCopy, FiBookOpen, FiEdit3, FiUserCheck,
  FiCreditCard, FiShield, FiCalendar, FiDownload, FiSearch, FiAward,
  FiZap, FiLayers, FiPackage, FiMonitor, FiSmartphone, FiDatabase,
  FiCheckCircle, FiClock, FiUsers, FiStar as FiStarFilled
} from 'react-icons/fi';
import PaperRocket from '../components/PaperRocket';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [rockets, setRockets] = useState([]);
  const [service, setService] = useState(null);

  useEffect(() => {
    // Create multiple paper rockets for background animation
    const createRockets = () => {
      const rocketElements = [];
      for (let i = 0; i < 6; i++) {
        rocketElements.push(<PaperRocket key={i} />);
      }
      setRockets(rocketElements);
    };

    createRockets();
  }, []);

  // Service data - this would typically come from an API
  const servicesData = {
    'lazer-xerox': {
      name: 'Lazer Xerox',
      icon: FiCopy,
      description: 'High-quality laser xerox services for all document types with crisp, clear output.',
      longDescription: 'Our professional laser xerox services provide exceptional quality for all your document needs. We use state-of-the-art equipment to ensure crisp, clear output every time.',
      features: ['Black & White', 'High Volume', 'Quick Turnaround', 'Multiple Sizes'],
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      categories: [
        {
          name: 'Black & White Xerox',
          icon: FiCopy,
          description: 'High-quality black and white xerox services',
          features: ['A4 Size', 'A3 Size', 'Bulk Printing', 'Quick Service']
        },
        {
          name: 'High Volume Printing',
          icon: FiPrinter,
          description: 'Large volume printing for businesses and organizations',
          features: ['Bulk Orders', 'Discount Rates', 'Fast Processing', 'Quality Assurance']
        },
        {
          name: 'Quick Turnaround',
          icon: FiClock,
          description: 'Express printing services for urgent requirements',
          features: ['Same Day Service', 'Priority Processing', 'Quality Guarantee', 'Express Rates']
        },
        {
          name: 'Multiple Sizes',
          icon: FiLayers,
          description: 'Printing in various paper sizes and formats',
          features: ['A4 Standard', 'A3 Large', 'Custom Sizes', 'Different Papers']
        }
      ],
      pricing: [
        { type: 'A4 Black & White', price: '₹1 per page' },
        { type: 'A3 Black & White', price: '₹2 per page' },
        { type: 'Bulk Orders (100+ pages)', price: '₹0.80 per page' },
        { type: 'Express Service', price: '₹1.50 per page' }
      ]
    },
    'color-xerox': {
      name: 'Color Xerox',
      icon: FiPrinter,
      description: 'Vibrant color xerox for presentations and marketing materials with accurate color reproduction.',
      longDescription: 'Transform your documents with our premium color xerox services. Perfect for presentations, marketing materials, and any project that requires vibrant, accurate colors.',
      features: ['Full Color', 'Photo Quality', 'Glossy Paper', 'Large Format'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      categories: [
        {
          name: 'Full Color Printing',
          icon: FiZap,
          description: 'Complete color printing with accurate reproduction',
          features: ['CMYK Colors', 'High Resolution', 'Color Matching', 'Professional Quality']
        },
        {
          name: 'Photo Quality',
          icon: FiStarFilled,
          description: 'Photo-quality printing for images and graphics',
          features: ['High DPI', 'Smooth Gradients', 'Sharp Details', 'Vibrant Colors']
        },
        {
          name: 'Glossy Paper',
          icon: FiShield,
          description: 'Premium glossy paper for enhanced appearance',
          features: ['Glossy Finish', 'Enhanced Colors', 'Professional Look', 'Durable']
        },
        {
          name: 'Large Format',
          icon: FiLayers,
          description: 'Large format printing for posters and banners',
          features: ['A3 Size', 'Custom Sizes', 'Poster Printing', 'Banner Printing']
        }
      ],
      pricing: [
        { type: 'A4 Color', price: '₹5 per page' },
        { type: 'A3 Color', price: '₹10 per page' },
        { type: 'Glossy Paper', price: '₹8 per page' },
        { type: 'Photo Quality', price: '₹12 per page' }
      ]
    },
    'spiral-binding': {
      name: 'Spiral Binding',
      icon: FiBookOpen,
      description: 'Professional spiral binding for documents and reports with durable finish.',
      longDescription: 'Give your documents a professional finish with our spiral binding services. Perfect for reports, manuals, presentations, and any document that needs to lay flat.',
      features: ['Plastic Spiral', 'Metal Spiral', 'Custom Covers', 'Multiple Sizes'],
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      categories: [
        {
          name: 'Plastic Spiral',
          icon: FiPackage,
          description: 'Durable plastic spiral binding',
          features: ['Multiple Colors', 'Durable', 'Cost Effective', 'Professional Look']
        },
        {
          name: 'Metal Spiral',
          icon: FiShield,
          description: 'Premium metal spiral binding',
          features: ['Premium Quality', 'Long Lasting', 'Professional Finish', 'Heavy Duty']
        },
        {
          name: 'Custom Covers',
          icon: FiEdit3,
          description: 'Custom designed covers for your documents',
          features: ['Custom Design', 'Company Logo', 'Professional Layout', 'High Quality']
        },
        {
          name: 'Multiple Sizes',
          icon: FiLayers,
          description: 'Binding available in various sizes',
          features: ['A4 Size', 'A3 Size', 'Custom Sizes', 'Different Thickness']
        }
      ],
      pricing: [
        { type: 'A4 Plastic Spiral', price: '₹30 per book' },
        { type: 'A4 Metal Spiral', price: '₹50 per book' },
        { type: 'A3 Plastic Spiral', price: '₹45 per book' },
        { type: 'Custom Cover', price: '₹20 extra' }
      ]
    },
    'project-work': {
      name: 'Project Work',
      icon: FiBookOpen,
      description: 'Complete project work services including typing, formatting, and binding.',
      longDescription: 'From concept to completion, we handle all aspects of your project work. Our comprehensive services include typing, formatting, printing, and professional binding.',
      features: ['Typing', 'Formatting', 'Printing', 'Binding'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      categories: [
        {
          name: 'Project Typing',
          icon: FiFileText,
          description: 'Professional typing services for projects',
          features: ['English Typing', 'Tamil Typing', 'Fast Service', 'Error Free']
        },
        {
          name: 'Project Formatting',
          icon: FiEdit3,
          description: 'Professional formatting and layout design',
          features: ['Professional Layout', 'Consistent Formatting', 'Table of Contents', 'Index Creation']
        },
        {
          name: 'Project Printing',
          icon: FiPrinter,
          description: 'High-quality printing for projects',
          features: ['Color Printing', 'Black & White', 'Multiple Copies', 'Quality Paper']
        },
        {
          name: 'Project Binding',
          icon: FiBookOpen,
          description: 'Professional binding for completed projects',
          features: ['Spiral Binding', 'Hard Cover', 'Soft Cover', 'Custom Covers']
        }
      ],
      pricing: [
        { type: 'Typing (per page)', price: '₹10' },
        { type: 'Formatting', price: '₹50 per project' },
        { type: 'Printing (per page)', price: '₹2' },
        { type: 'Binding', price: '₹30 per book' }
      ]
    },
    'computer-jathagam': {
      name: 'Computer Jathagam',
      icon: FiStar,
      description: 'Professional computerized horoscope generation with detailed analysis.',
      longDescription: 'Get your computerized horoscope with detailed astrological analysis. Our professional services provide comprehensive birth charts and astrological insights.',
      features: ['Birth Chart', 'Detailed Analysis', 'Printing', 'Professional Report'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      categories: [
        {
          name: 'Birth Chart Generation',
          icon: FiStarFilled,
          description: 'Computerized birth chart creation',
          features: ['Accurate Calculations', 'Professional Software', 'Detailed Charts', 'Multiple Formats']
        },
        {
          name: 'Astrological Analysis',
          icon: FiSearch,
          description: 'Detailed astrological interpretation',
          features: ['Planet Positions', 'House Analysis', 'Aspect Analysis', 'Remedial Measures']
        },
        {
          name: 'Professional Printing',
          icon: FiPrinter,
          description: 'High-quality printing of horoscope',
          features: ['Color Printing', 'Quality Paper', 'Professional Layout', 'Multiple Copies']
        },
        {
          name: 'Detailed Report',
          icon: FiFileText,
          description: 'Comprehensive astrological report',
          features: ['Life Predictions', 'Career Guidance', 'Health Analysis', 'Relationship Insights']
        }
      ],
      pricing: [
        { type: 'Basic Jathagam', price: '₹200' },
        { type: 'Detailed Analysis', price: '₹500' },
        { type: 'Professional Report', price: '₹800' },
        { type: 'Consultation', price: '₹300 per hour' }
      ]
    },
    'new-pan': {
      name: 'New PAN',
      icon: FiCreditCard,
      description: 'Complete PAN card application services for new applications.',
      longDescription: 'Get your PAN card hassle-free with our professional application services. We handle the entire process from document collection to application submission.',
      features: ['Online Application', 'Document Assistance', 'Tracking', 'Quick Processing'],
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      categories: [
        {
          name: 'Online Application',
          icon: FiGlobe,
          description: 'Complete online PAN application process',
          features: ['Form Filling', 'Document Upload', 'Payment Processing', 'Application Tracking']
        },
        {
          name: 'Document Assistance',
          icon: FiFileText,
          description: 'Help with required documents',
          features: ['Document Verification', 'Photo Requirements', 'Address Proof', 'Identity Proof']
        },
        {
          name: 'Application Tracking',
          icon: FiSearch,
          description: 'Track your PAN application status',
          features: ['Real-time Updates', 'Status Checking', 'Delivery Tracking', 'SMS Alerts']
        },
        {
          name: 'Quick Processing',
          icon: FiClock,
          description: 'Fast processing and delivery',
          features: ['Express Service', 'Priority Processing', 'Quick Delivery', 'Status Updates']
        }
      ],
      pricing: [
        { type: 'Basic Application', price: '₹150' },
        { type: 'Express Service', price: '₹300' },
        { type: 'Document Assistance', price: '₹100' },
        { type: 'Tracking Service', price: '₹50' }
      ]
    }
  };

  useEffect(() => {
    if (serviceId && servicesData[serviceId]) {
      setService(servicesData[serviceId]);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h2>
          <Link to="/services" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Paper Rockets */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {rockets}
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="flex items-center space-x-4">
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <FiArrowLeft className="w-5 h-5" />
                  <span>Back to Services</span>
                </Link>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                      {service.name}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Professional {service.name.toLowerCase()} services
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative" data-aos="fade-left">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore the different aspects of our {service.name.toLowerCase()} services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.categories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparent and competitive pricing for all our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.pricing.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FiAward className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.type}
                </h3>
                
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {item.price}
                </div>
              </div>
            ))}
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
              Contact us today to learn more about our {service.name.toLowerCase()} services 
              and get a personalized quote for your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FiPhone className="mr-2" />
                Contact Us
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <FiArrowLeft className="mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail; 
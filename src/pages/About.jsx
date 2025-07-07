import React from 'react';
import { FiAward, FiUsers, FiClock, FiCheckCircle, FiStar, FiMessageSquare } from 'react-icons/fi';
import FastPaperRockets from '../components/FastPaperRockets';

const About = () => {
  const stats = [
    { icon: FiUsers, number: "5000+", label: "Happy Customers" },
    { icon: FiClock, number: "10+", label: "Years Experience" },
    { icon: FiCheckCircle, number: "100+", label: "Services Offered" },
    { icon: FiAward, number: "99%", label: "Satisfaction Rate" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "Tapti Ultimate Shop has been my go-to place for all printing needs. Their quality and service are exceptional. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Student",
      content: "The best place for project binding and printing. They always deliver on time and the quality is amazing. Thank you Tapti Ultimate Shop!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const values = [
    {
      icon: FiCheckCircle,
      title: "Quality First",
      description: "We never compromise on quality. Every service we provide meets the highest standards."
    },
    {
      icon: FiClock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and always deliver on time."
    },
    {
      icon: FiUsers,
      title: "Customer Focus",
      description: "Our customers are our priority. We go above and beyond to ensure satisfaction."
    },
    {
      icon: FiAward,
      title: "Trust & Reliability",
      description: "Building trust through consistent, reliable service for over a decade."
    }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      <FastPaperRockets />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tapti Ultimate Shop
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Serving the community with excellence in printing, document services, and government solutions for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2013, Tapti Ultimate Shop began as a small printing center in Gobichettipalayam with a simple mission: 
                  to provide high-quality printing and document services to our local community.
                </p>
                <p>
                  Over the years, we have grown from a basic printing shop to a comprehensive service center, offering everything 
                  from laser printing to government document services, astrology services, and much more.
                </p>
                <p>
                  Our commitment to quality, customer satisfaction, and continuous improvement has made us the trusted choice 
                  for thousands of customers in and around Gobichettipalayam.
                </p>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Tapti Ultimate Shop"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center text-white"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <FiMessageSquare className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  To provide comprehensive, high-quality printing and document services that meet the diverse needs 
                  of our community while maintaining the highest standards of customer service and satisfaction.
                </p>
                <p>
                  We strive to be the most trusted and reliable service provider in Gobichettipalayam, offering 
                  innovative solutions and maintaining long-term relationships with our customers.
                </p>
                <p>
                  Our commitment extends beyond just providing services - we aim to be a valuable partner in 
                  our customers' success, whether they're students, professionals, or businesses.
                </p>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    Professional and experienced team
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    State-of-the-art equipment
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    Competitive pricing
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    Quick turnaround times
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    Comprehensive service range
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    Excellent customer support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
import React, { useEffect, useState } from 'react';
import FastPaperRockets from '../components/FastPaperRockets';
import { useNavigate } from 'react-router-dom';
const ServiceCategoryDetail = ({
  title,
  tagline,
  subcategories = []
}) => {
  const navigate = useNavigate();


  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Animated Paper Rockets Background */}
      <FastPaperRockets />

      {/* Title & Tagline */}
      <section className="relative pt-32 pb-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full px-4 text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          {tagline && (
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2 max-w-2xl mx-auto">
              {tagline}
            </p>
          )}
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="w-full px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((item, idx) => {
              // Use item.imageUrl for the image. Provide a relevant image URL for each subcategory.
              return (
                <div
                  key={item.name}
                  className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden relative"
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <div className="flex flex-col items-center p-8">
                    <div className="mb-4">
                      <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-xl"
                          />
                        ) : item.icon ? (
                          <item.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                        ) : (
                          // Fallback if neither imageUrl nor icon is provided
                          <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-xl text-gray-400">
                            No Image
                          </div>
                        )}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-3">
                      {item.description}
                    </p>
                    {item.cost && (
                      <div className="text-base font-semibold text-green-600 dark:text-green-400 mb-4">
                        {item.cost}
                      </div>
                    )}
                    {item.button && (
                      <button
                        className="mt-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        onClick={() => {
                          if (item.button.toLowerCase() === 'enquire' && item.name === 'Jathagam Matching') {
                            navigate('/matrimony');
                          } else if (
                            item.button.toLowerCase() === 'enquire' ||
                            item.button.toLowerCase() === 'enquire now' ||
                            item.button.toLowerCase() === 'order now'
                          ) {
                            navigate('/contact');
                          }
                        }}
                      >
                        {item.button}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCategoryDetail; 
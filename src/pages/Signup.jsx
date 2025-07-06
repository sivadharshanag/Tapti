import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Sign Up
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          This is a placeholder signup page. The actual signup functionality would be implemented here.
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default Signup; 
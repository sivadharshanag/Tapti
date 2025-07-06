import React from 'react';
import { FaKeyboard, FaBookOpen, FaFileAlt, FaFileSignature } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Tamil Typing',
    icon: FaKeyboard,
    description: 'Tamil language typing support',
    button: 'Enquire'
  },
  {
    name: 'English Typing',
    icon: FaKeyboard,
    description: 'Professional English typing',
    button: 'Enquire'
  },
  {
    name: 'Project Work',
    icon: FaBookOpen,
    description: 'College/school projects',
    button: 'Order Now'
  },
  {
    name: 'Project Binding',
    icon: FaFileSignature,
    description: 'Bind your reports professionally',
    button: 'Order Now'
  }
];

export default function TypingProjects() {
  return (
    <ServiceCategoryDetail
      title="Typing & Projects"
      tagline="Typing in Tamil/English, project preparation & submission."
      subcategories={subcategories}
    />
  );
} 
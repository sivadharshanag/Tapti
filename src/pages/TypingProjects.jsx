import React from 'react';
import { FaKeyboard, FaBookOpen, FaFileAlt, FaFileSignature } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Tamil Typing',
    icon: FaKeyboard,
    description: 'Tamil language typing support',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'English Typing',
    icon: FaKeyboard,
    description: 'Professional English typing',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Project Allignment',
    icon: FaBookOpen,
    description: 'Ug,Pg,Phd Project',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Project Binding',
    icon: FaFileSignature,
    description: 'Soft,Hard,Calico',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80'
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
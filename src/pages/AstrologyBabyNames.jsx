import React from 'react';
import { FaBaby, FaStar, FaUserFriends, FaFileAlt } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Computer Jathagam',
    icon: FaStar,
    description: 'Digital astrology charts',
    
  },
  {
    name: 'Jathagam Matching',
    icon: FaUserFriends,
    description: 'Match horoscopes',
    button: 'Enquire',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeX15UHxTt62KNRHKuM5Pi03kkazSToOnT3O8ggXrnbcp7bVQ/viewform?usp=header'
  },
  {
    name: 'Baby Names',
    icon: FaBaby,
    description: 'Name suggestions based on astrology',
    
  },
  {
    name: 'One Page Jathagam',
    icon: FaFileAlt,
    description: 'Quick printable format',
    
  }
];

export default function AstrologyBabyNames() {
  return (
    <ServiceCategoryDetail
      title="Astrology & Baby Names"
      tagline="Horoscope generation, baby name suggestions."
      subcategories={subcategories}
    />
  );
}

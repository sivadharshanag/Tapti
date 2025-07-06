import React from 'react';
import { FaBaby, FaStar, FaUserFriends, FaFileAlt } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Computer Jathagam',
    icon: FaStar,
    description: 'Digital astrology charts',
    button: 'Enquire'
  },
  {
    name: 'Jathagam Matching',
    icon: FaUserFriends,
    description: 'Match horoscopes',
    button: 'Enquire'
  },
  {
    name: 'Baby Names',
    icon: FaBaby,
    description: 'Name suggestions based on astrology',
    button: 'Enquire'
  },
  {
    name: 'One Page Jathagam',
    icon: FaFileAlt,
    description: 'Quick printable format',
    button: 'Order Now'
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
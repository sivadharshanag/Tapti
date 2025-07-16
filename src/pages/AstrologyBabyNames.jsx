import React from 'react';
import { FaBaby, FaStar, FaUserFriends, FaFileAlt } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Computer Jathagam',
    icon: FaStar,
    description: 'Digital astrology charts',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Horoscope-astrology.jpg'
  },
  {
    name: 'Jathagam Matching',
    icon: FaUserFriends,
    description: 'Match horoscopes',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Baby Names',
    icon: FaBaby,
    description: 'Name suggestions based on astrology',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'One Page Jathagam',
    icon: FaFileAlt,
    description: 'Quick printable format',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
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

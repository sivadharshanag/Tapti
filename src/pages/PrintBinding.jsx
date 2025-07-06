import React from 'react';
import { FaFileAlt, FaPrint, FaPalette, FaBookOpen, FaLayerGroup } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Lazer Printout',
    icon: FaPrint,
    description: 'High-quality black & white printing',
    button: 'Enquire'
  },
  {
    name: 'Color Printout',
    icon: FaPalette,
    description: 'Sharp, colorful documents',
    button: 'Enquire'
  },
  {
    name: 'Lamination A3',
    icon: FaLayerGroup,
    description: 'Durable lamination for documents',
    button: 'Order Now'
  },
  {
    name: 'Spiral Binding',
    icon: FaBookOpen,
    description: 'Neat and sturdy document binding',
    button: 'Order Now'
  },
  {
    name: 'Stationeries',
    icon: FaFileAlt,
    description: 'All your stationery needs',
    button: 'Enquire'
  }
];

export default function PrintBinding() {
  return (
    <ServiceCategoryDetail
      title="Printout & Binding Services"
      tagline="Fast printouts, lamination, and professional document binding."
      subcategories={subcategories}
    />
  );
} 
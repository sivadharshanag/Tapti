import React from 'react';
import { FaFileAlt, FaPrint, FaPalette, FaBookOpen, FaLayerGroup } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Lazer Printout',
    icon: FaPrint,
    description: 'High-quality black & white printing',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Color Printout',
    icon: FaPalette,
    description: 'Sharp, colorful documents',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Lamination A3',
    icon: FaLayerGroup,
    description: 'Durable lamination for documents',
    button: 'Order Now',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Spiral Binding',
    icon: FaBookOpen,
    description: 'Neat and sturdy document binding',
    button: 'Order Now',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Stationeries',
    icon: FaFileAlt,
    description: 'All your stationery needs',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
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
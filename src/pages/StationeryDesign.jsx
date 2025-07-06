import React from 'react';
import { FaPenNib, FaFileInvoice, FaFileSignature, FaFileAlt, FaBook } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Letter Pad',
    icon: FaFileSignature,
    description: 'Personalized letter pads',
    button: 'Order Now'
  },
  {
    name: 'Bill Book',
    icon: FaFileInvoice,
    description: 'Branded invoice books',
    button: 'Order Now'
  },
  {
    name: 'Brochure Designing',
    icon: FaPenNib,
    description: 'Elegant flyer & brochure design',
    button: 'Enquire'
  },
  {
    name: 'Stationery Items',
    icon: FaBook,
    description: 'Pens, papers, and more',
    button: 'Enquire'
  }
];

export default function StationeryDesign() {
  return (
    <ServiceCategoryDetail
      title="Stationery & Design"
      tagline="Stationery sales, brochures, letter pads & bill books."
      subcategories={subcategories}
    />
  );
} 
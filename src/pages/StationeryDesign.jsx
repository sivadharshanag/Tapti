import React from 'react';
import { FaPenNib, FaFileInvoice, FaFileSignature, FaFileAlt, FaBook } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Letter Pad',
    icon: FaFileSignature,
    description: 'Personalized letter pads',
    button: 'Order Now',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Bill Book',
    icon: FaFileInvoice,
    description: 'Branded invoice books',
    button: 'Order Now',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Brochure Designing',
    icon: FaPenNib,
    description: 'Elegant flyer & brochure design',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Stationery Items',
    icon: FaBook,
    description: 'Pens, papers, and more',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
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
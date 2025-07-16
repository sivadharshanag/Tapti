import React from 'react';
import { FaGlobe, FaFileAlt, FaIdCard, FaTicketAlt, FaUsers, FaSyringe } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Patta/Chitta',
    icon: FaFileAlt,
    description: 'Land document services',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'EC/FMD',
    icon: FaFileAlt,
    description: 'Encumbrance Certificate and Field Measurement',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Family Card',
    icon: FaIdCard,
    description: 'Digital ration card service',
    button: 'Order Now',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Hall Ticket',
    icon: FaTicketAlt,
    description: 'Exam ticket download',
    button: 'Order Now',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'PF/Employment',
    icon: FaUsers,
    description: 'PF check, employment renewal',
    button: 'Enquire',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Covid Certificate',
    icon: FaSyringe,
    description: 'Vaccine certificate download',
    button: 'Order Now',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80'
  }
];

export default function OnlineGovtServices() {
  return (
    <ServiceCategoryDetail
      title="Online Government Services"
      tagline="Patta/Chitta, Family Card, Hall Ticket, PF & more."
      subcategories={subcategories}
    />
  );
} 
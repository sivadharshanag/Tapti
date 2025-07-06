import React from 'react';
import { FaGlobe, FaFileAlt, FaIdCard, FaTicketAlt, FaUsers, FaSyringe } from 'react-icons/fa';
import ServiceCategoryDetail from './ServiceCategoryDetail';

const subcategories = [
  {
    name: 'Patta/Chitta',
    icon: FaFileAlt,
    description: 'Land document services',
    button: 'Enquire'
  },
  {
    name: 'EC/FMD',
    icon: FaFileAlt,
    description: 'Encumbrance Certificate and Field Measurement',
    button: 'Enquire'
  },
  {
    name: 'Family Card',
    icon: FaIdCard,
    description: 'Digital ration card service',
    button: 'Order Now'
  },
  {
    name: 'Hall Ticket',
    icon: FaTicketAlt,
    description: 'Exam ticket download',
    button: 'Order Now'
  },
  {
    name: 'PF/Employment',
    icon: FaUsers,
    description: 'PF check, employment renewal',
    button: 'Enquire'
  },
  {
    name: 'Covid Certificate',
    icon: FaSyringe,
    description: 'Vaccine certificate download',
    button: 'Order Now'
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
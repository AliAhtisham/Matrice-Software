/**
 * Contact Information Configuration
 * Update these details with your actual business contact information
 */

export const contactConfig = {
  // Business Name
  businessName: 'Matrice',
  
  // Contact Details
  email: 'nazarenterprises2021@gmail.com',
  phone: '+91 8319185319',
  phoneDisplay: '+91 83191 85319', // Formatted for display
  
  // Address
  address: {
    street: 'Kakadeo',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    pincode: '208025',
    country: 'India',
    full: 'Kakadeo, Kanpur, Uttar Pradesh 208025', // For single-line display
  },
  
  // Social Media Links (optional - add your actual profiles)
  social: {
    twitter: '#',
    linkedin: '#',
    github: '#',
    facebook: '#',
    instagram: '#',
  },
  
  // Office Hours (optional)
  officeHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
  
  // WhatsApp (optional - if you want WhatsApp contact)
  whatsapp: '+91 8319185319',
  
  // Copyright
  copyrightText: 'All rights reserved.',
} as const;

export default contactConfig;

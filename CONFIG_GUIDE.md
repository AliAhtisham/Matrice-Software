# Contact Configuration Guide

## Overview
All contact information is centralized in `src/config/contact.ts` for easy management.

## How to Update Your Contact Information

Edit the file `src/config/contact.ts` and update the following fields:

### Business Name
```typescript
businessName: 'Matrice Software',
```
This will automatically update in:
- Navigation bar
- Footer
- Copyright text

### Email & Phone
```typescript
email: 'contact@matricesoftware.com',
phone: '+91 9876543210',              // Used for tel: links
phoneDisplay: '+91 98765 43210',      // How it's displayed (formatted)
```

### Address
```typescript
address: {
  street: 'Swaroop Nagar',
  city: 'Kanpur',
  state: 'Uttar Pradesh',
  pincode: '208002',
  country: 'India',
  full: 'Swaroop Nagar, Kanpur, Uttar Pradesh 208002',
},
```
- `full`: Used for single-line display in footer
- Other fields: Available for future use (schema markup, maps, etc.)

### Social Media Links
```typescript
social: {
  twitter: 'https://twitter.com/yourhandle',
  linkedin: 'https://linkedin.com/company/yourcompany',
  github: 'https://github.com/yourorg',
  facebook: 'https://facebook.com/yourpage',
  instagram: 'https://instagram.com/yourhandle',
},
```
Update with your actual social media profiles, or leave as `#` to disable.

### Optional Fields

#### Office Hours
```typescript
officeHours: {
  weekdays: '9:00 AM - 6:00 PM',
  saturday: '10:00 AM - 4:00 PM',
  sunday: 'Closed',
},
```

#### WhatsApp
```typescript
whatsapp: '+91 9876543210',
```
Can be used to add a WhatsApp contact button in the future.

## What Gets Updated Automatically

When you change the config file, these components automatically reflect the changes:

- **Navigation Bar**: Business name
- **Footer**: Business name, email, phone, address, copyright
- All contact links are clickable (email opens mail client, phone opens dialer)

## Need Help?

If you need to add the contact information to other components:

```typescript
import { contactConfig } from '../config/contact';

// Use anywhere in your component
<p>{contactConfig.email}</p>
<p>{contactConfig.phone}</p>
```

---

**Last Updated**: April 20, 2026

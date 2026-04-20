# Matrice Software Landing Page

A cutting-edge, Stripe-inspired landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Dark Mode Design**: Professional palette with Deep Navy (#0A2540) and Slate (#020617)
- **Glassmorphism Effects**: Modern UI with backdrop-blur and transparent borders
- **Animated Mesh Gradients**: Dynamic background with shifting indigo, violet, and cyan hues
- **Bento Grid Layout**: Modern card-based services section
- **Framer Motion Animations**: Smooth fade-ins, stagger effects, and magnetic interactions
- **Tech Stack Marquee**: Infinite scrolling showcase of technologies
- **Fully Responsive**: Mobile-first design that looks great on all devices

## 📦 Tech Stack

- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Production-ready animations
- **Inter Font** - Professional typography

## 🛠️ Installation

1. **Install dependencies:**
   ```powershell
   npm install
   ```

2. **Start development server:**
   ```powershell
   npm run dev
   ```

3. **Build for production:**
   ```powershell
   npm run build
   ```

4. **Preview production build:**
   ```powershell
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Hero section with glow effects
│   ├── Features.tsx       # Bento Grid services section
│   ├── SuccessStories.tsx # Local business case studies
│   ├── TechStack.tsx      # Marquee with tech logos
│   ├── Footer.tsx         # Footer with CTA
│   ├── ContactModal.tsx   # Contact form modal
│   └── Icons.tsx          # SVG icon components
├── config/
│   └── contact.ts         # ⚙️ Contact information config
├── utils/
│   └── scroll.ts          # Smooth scroll utilities
├── App.tsx                # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles & utilities
```

## 🎨 Design Elements

### Color Palette
- **Primary**: Indigo/Purple gradients
- **Background**: Deep Navy (#0A2540) / Slate (#020617)
- **Accents**: Cyan, Violet, Pink

### Custom Utilities
- `.text-glow` - Text shadow effect
- `.glass` - Glassmorphism card style
- `.dot-pattern` - Dot matrix background
- `.grid-pattern` - Grid lines background
- `.mesh-gradient-bg` - Animated gradient

## 🚀 Deployment

### Vercel
```powershell
npm i -g vercel
vercel
```

### Netlify
```powershell
npm run build
# Deploy the 'dist' folder
```

## 📝 Customization

### Update Contact Information
All contact details (email, phone, address) are centralized in one place:

1. **Edit the config file**: `src/config/contact.ts`
2. **Update your details**:
   ```typescript
   export const contactConfig = {
     businessName: 'Your Business Name',
     email: 'your@email.com',
     phone: '+91 1234567890',
     address: {
       full: 'Your Address Here',
       // ... other fields
     },
   };
   ```
3. **Changes auto-update** in navigation, footer, and copyright

📖 See [CONFIG_GUIDE.md](CONFIG_GUIDE.md) for detailed instructions.

### Other Customizations
1. **Update Content**: Edit component files in `src/components/`
2. **Change Colors**: Modify `tailwind.config.js`
3. **Add Sections**: Create new components and import in `App.tsx`
4. **Adjust Animations**: Tweak Framer Motion props in components

## ⚡ Performance

- Optimized animations with Framer Motion
- Lazy loading for images
- Minimal bundle size with Vite
- Production-ready build optimization

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ for premium B2B agencies

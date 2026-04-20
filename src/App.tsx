import { motion } from 'framer-motion';
import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SuccessStories from './components/SuccessStories';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { smoothScrollToWithOffset } from './utils/scroll';
import { contactConfig } from './config/contact';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToWithOffset(targetId);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 mesh-gradient-bg" />
        <div className="absolute inset-0 dot-pattern" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 glass"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {contactConfig.businessName}
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Who We Help
              </a>
              <a 
                href="#stories" 
                onClick={(e) => handleNavClick(e, 'stories')}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Success Stories
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Contact
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 transition-all"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Main Content */}
      <main className="pt-20">
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <Features onOpenContact={() => setIsContactModalOpen(true)} />
        <SuccessStories onOpenContact={() => setIsContactModalOpen(true)} />
        <TechStack />
        <Footer onOpenContact={() => setIsContactModalOpen(true)} />
      </main>
    </div>
  );
}

export default App;

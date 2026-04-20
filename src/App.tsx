import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToWithOffset(targetId);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
            
            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-indigo-400 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 bottom-0 z-40 md:hidden glass border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-lg hover:text-indigo-400 transition-colors cursor-pointer py-2"
              >
                Who We Help
              </a>
              <a 
                href="#stories" 
                onClick={(e) => handleNavClick(e, 'stories')}
                className="text-lg hover:text-indigo-400 transition-colors cursor-pointer py-2"
              >
                Success Stories
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-lg hover:text-indigo-400 transition-colors cursor-pointer py-2"
              >
                Contact
              </a>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 transition-all text-center"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

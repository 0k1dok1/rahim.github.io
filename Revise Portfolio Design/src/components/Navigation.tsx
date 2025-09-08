import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'hero', label: 'HAQQIMDA' },
    { id: 'experience', label: 'TƏCRÜBƏ' },
    { id: 'showcase', label: 'SHOWCASE' },
    { id: 'contact', label: 'ƏLAQƏ' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-pink-500/30">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"
          style={{
            boxShadow: `
              0 0 20px rgba(255, 0, 110, 0.3),
              0 0 40px rgba(131, 56, 236, 0.2)
            `
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 py-4 relative">
          <div className="flex justify-between items-center">
            <div 
              className="text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:400%_400%] animate-pulse"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              RAHIM.AZ
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-pink-500 transition-colors font-bold text-lg tracking-wider"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-pink-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 border-l border-pink-500/30 pt-20">
            <div className="flex flex-col space-y-6 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left hover:text-pink-500 transition-colors font-bold text-lg tracking-wider"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
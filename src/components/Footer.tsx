import React from 'react';
import { Mail, Linkedin, Phone, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:rhmazizli@gmail.com',
      color: 'pink'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/rahim-azizli',
      color: 'blue'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      href: 'tel:+994706258545',
      color: 'green'
    }
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-md py-12 border-t border-pink-500/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo and Title */}
        <div className="mb-6">
          <h3 
            className="text-4xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:400%_400%] animate-pulse mb-2"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            RAHIM.AZ
          </h3>
          <p 
            className="text-gray-400 font-semibold text-lg"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Digital Marketing Visionary
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              target={link.href.includes('linkedin') ? '_blank' : undefined}
              rel={link.href.includes('linkedin') ? 'noopener noreferrer' : undefined}
              className={`w-14 h-14 backdrop-blur-md bg-black/50 border border-${link.color}-500/30 rounded-2xl flex items-center justify-center hover:bg-${link.color}-500/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
              style={{
                boxShadow: `0 0 15px rgba(${link.color === 'pink' ? '255, 0, 110' : link.color === 'blue' ? '58, 134, 255' : '6, 255, 165'}, 0.3)`
              }}
            >
              <div className={`text-${link.color}-500 group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>
            </a>
          ))}
        </div>
        
        {/* Copyright and Location */}
        <div className="border-t border-gray-800 pt-6">
          <p 
            className="text-gray-500 font-bold mb-2"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            © 2024 RAHIM AZIZLI. BÜTÜN HÜQUQLAR QORUNUR.
          </p>
          <p 
            className="text-gray-600 text-sm flex items-center justify-center space-x-2"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            <span>AZƏRBAYCANDA</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>İLƏ YARADILDI</span>
          </p>
        </div>
        
        {/* Animated Line */}
        <div className="mt-6">
          <div 
            className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full opacity-50"
            style={{
              animation: 'pulse 2s infinite'
            }}
          />
        </div>
      </div>
    </footer>
  );
}
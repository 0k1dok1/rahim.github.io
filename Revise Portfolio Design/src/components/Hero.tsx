import React from 'react';

export function Hero() {
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
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 bg-[length:400%_400%]"
        style={{
          animation: 'gradient-shift 6s ease infinite',
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shape 1 */}
        <div 
          className="absolute top-20 left-10 opacity-30 animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        >
          <div className="w-20 h-20 border-2 border-pink-500 rounded-lg rotate-45 bg-pink-500/10" />
        </div>
        
        {/* Floating Shape 2 */}
        <div 
          className="absolute top-40 right-20 opacity-25 animate-bounce"
          style={{ animationDelay: '-2s', animationDuration: '10s' }}
        >
          <div className="w-16 h-16 border-2 border-cyan-400 rounded-full bg-cyan-400/10" />
        </div>
        
        {/* Floating Shape 3 */}
        <div 
          className="absolute bottom-40 left-20 opacity-20 animate-bounce"
          style={{ animationDelay: '-4s', animationDuration: '12s' }}
        >
          <div className="w-24 h-24 border-2 border-purple-400 rounded-xl rotate-12 bg-purple-400/10" />
        </div>
      </div>
      
      <div className="text-center px-6 z-10 max-w-6xl">
        {/* Avatar */}
        <div className="mb-12">
          <div 
            className="w-40 h-40 mx-auto mb-8 rounded-[60%_40%_30%_70%] bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center relative"
            style={{
              animation: 'morph-shape 8s ease-in-out infinite, pulse-glow 3s infinite',
              boxShadow: '0 0 30px rgba(255, 0, 110, 0.6)'
            }}
          >
            <div className="w-20 h-20 rounded-full border-4 border-white bg-white/20 flex items-center justify-center">
              <div className="text-white text-2xl font-bold">R</div>
            </div>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 relative"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          <span 
            className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 30px rgba(255, 0, 110, 0.5)'
            }}
          >
            RAHIM AZIZLI
          </span>
        </h1>
        
        {/* Subtitle */}
        <div 
          className="text-2xl md:text-4xl lg:text-5xl mb-8 font-bold"
          style={{ fontFamily: 'Rajdhani, sans-serif' }}
        >
          <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:400%_400%] animate-pulse">
            DIGITAL MARKETING VISIONARY
          </span>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          Brendlərin <span className="text-pink-500 font-bold">rəqəmsal transformasiyasında</span> 
          {' '}innovativ strategiyalar yaradan, 
          <span className="text-cyan-400 font-bold"> data-driven</span> həllər təqdim edən və 
          <span className="text-purple-400 font-bold"> yaradıcı kampaniyalar</span> hazırlayan mütəxəssisəm.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('experience')}
            className="bg-gray-800/50 border border-pink-500/30 backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            <span className="text-pink-500">→</span> TƏCRÜBƏLƏRİMİ GÖRƏ KEÇƏK
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            BİRLİKDƏ İŞLƏYƏK
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes morph-shape {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 40% 60% 30% / 40% 50% 60% 50%; }
          75% { border-radius: 40% 70% 30% 60% / 70% 40% 50% 30%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(255, 0, 110, 0.6);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 60px rgba(255, 0, 110, 0.9), 0 0 90px rgba(131, 56, 236, 0.5);
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
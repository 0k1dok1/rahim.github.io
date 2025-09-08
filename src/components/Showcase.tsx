import React from 'react';
import { Play, BarChart3, Target, Palette, TrendingUp, Image } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'social-media',
    title: 'SOSIAL MEDIA',
    subtitle: '35K-dan 57K-ya artım',
    icon: <Image className="w-12 h-12" />,
    color: 'pink',
    description: 'Ege Hospital followers 63% artımı - 6 ay ərzində'
  },
  {
    id: 'video-content',
    title: 'VİDEO KONTENT',
    subtitle: 'Əməliyyat otağı çəkilişləri',
    icon: <Play className="w-12 h-12" />,
    color: 'purple',
    description: 'Professional həkim müsahibələri və hospital dokumentasiyası'
  },
  {
    id: 'analytics',
    title: 'SEO OPTİMİZASİYA',
    subtitle: 'Web sayt performansı',
    icon: <BarChart3 className="w-12 h-12" />,
    color: 'cyan',
    description: 'Pentakod müştəriləri üçün axtarış nəticələrində irəliləmə'
  },
  {
    id: 'brand-design',
    title: 'REKLAM KAMPANİYALARI',
    subtitle: 'CleanArt CPA: $0.50',
    icon: <Palette className="w-12 h-12" />,
    color: 'green',
    description: 'CTR 2-3%, Reach 25K, Engagement 5-7% nəticələri'
  },
  {
    id: 'campaigns',
    title: 'DIGITAL MARKETİNG',
    subtitle: 'Multi-platform idarəetmə',
    icon: <TrendingUp className="w-12 h-12" />,
    color: 'yellow',
    description: 'Instagram, Telegram, Website və SEO strategiyaları'
  },
  {
    id: 'creative-assets',
    title: 'DATA ANALİZ',
    subtitle: 'Remote data research',
    icon: <Target className="w-12 h-12" />,
    color: 'red',
    description: 'Infuse üçün data quality təmin etmə və insight çıxarma'
  }
];

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  const colorClasses = {
    pink: 'border-pink-500/30 from-pink-500/10 to-purple-500/10 text-pink-500',
    purple: 'border-purple-500/30 from-purple-500/10 to-blue-500/10 text-purple-400',
    cyan: 'border-cyan-500/30 from-cyan-500/10 to-blue-500/10 text-cyan-400',
    green: 'border-green-500/30 from-green-500/10 to-teal-500/10 text-green-400',
    yellow: 'border-yellow-500/30 from-yellow-500/10 to-orange-500/10 text-yellow-400',
    red: 'border-red-500/30 from-red-500/10 to-pink-500/10 text-red-400'
  };

  return (
    <div className="fade-in-up group">
      <div 
        className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[1]} border ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]} backdrop-blur-md p-6 rounded-3xl h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
      >
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        <div className="relative z-10">
          <h3 
            className={`text-2xl font-black mb-6 ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]}`}
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            {item.title}
          </h3>
          
          <div className="space-y-4">
            {/* Main Preview */}
            <div 
              className={`h-48 rounded-2xl overflow-hidden border ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]} shadow-lg bg-gray-900/50 flex items-center justify-center group/preview transition-all duration-300 hover:scale-105`}
            >
              <div className={`text-center ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]}`}>
                <div className="group-hover/preview:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="font-bold mt-2">{item.subtitle}</p>
                <p className="text-sm opacity-70 mt-1">{item.description}</p>
              </div>
            </div>
            
            {/* Secondary Preview */}
            <div 
              className={`h-32 rounded-2xl overflow-hidden border ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0].replace('500', '400')} shadow-lg bg-gray-900/30 flex items-center justify-center group/secondary transition-all duration-300 hover:scale-105`}
            >
              <div className={`text-center ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]}`}>
                <div className="w-8 h-8 mx-auto mb-1 opacity-60 group-hover/secondary:scale-110 transition-transform duration-300">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <p className="font-bold text-sm">Interactive Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 fade-in-up">
          <h2 
            className="text-6xl md:text-8xl font-black mb-8"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:400%_400%] animate-pulse">
              VİZUAL SHOWCASE
            </span>
          </h2>
          <p 
            className="text-2xl text-gray-400 font-semibold"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Ölçülən Nəticələr və Professional Təcrübə
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <ShowcaseCard key={item.id} item={item} />
          ))}
        </div>
        
        {/* Animated Stats Section */}
        <div className="mt-20 fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div 
                className="text-4xl font-black bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                +63%
              </div>
              <p className="text-gray-400 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Follower Artımı
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                $0.50
              </div>
              <p className="text-gray-400 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Cost Per Action
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                25K
              </div>
              <p className="text-gray-400 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Campaign Reach
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="text-4xl font-black bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                5-7%
              </div>
              <p className="text-gray-400 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Engagement Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
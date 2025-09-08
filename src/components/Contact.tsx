import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

interface FormData {
  project_type: string;
  budget: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    project_type: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    setTimeout(() => {
      alert('Təşəkkürlər! Mesajınız uğurla göndərildi. 24 saat ərzində sizinlə əlaqə saxlayacağıq.');
      setFormData({
        project_type: '',
        budget: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'EMAIL',
      value: 'rhmazizli@gmail.com',
      href: 'mailto:rhmazizli@gmail.com',
      color: 'pink'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: 'TELEFON',
      value: '+994 70 625 85 45',
      href: 'tel:+994706258545',
      color: 'green'
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/rahim-azizli',
      href: 'https://linkedin.com/in/rahim-azizli',
      color: 'blue'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 bg-[length:400%_400%]"
        style={{
          animation: 'gradient-shift 6s ease infinite',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 
            className="text-6xl md:text-8xl font-black mb-8 relative"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span 
              className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(255, 0, 110, 0.5)'
              }}
            >
              ƏLAQƏ
            </span>
          </h2>
          
          <h3 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:400%_400%] animate-pulse">
              GƏLİN BİRLİKDƏ YARADAQ
            </span>
          </h3>
          
          <p 
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Brendinizi rəqəmsal dünyada fərqləndirməyə hazırsınız? 
            Gəlin birlikdə <span className="text-pink-500 font-bold">innovativ strategiyalar</span> hazırlayaq!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in-up">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 backdrop-blur-md p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <h3 
                className="text-3xl font-black mb-8 text-pink-500 relative z-10"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                ƏLAQƏ MƏLUMATLARİ
              </h3>
              
              <div className="space-y-6 relative z-10">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div 
                      className={`w-16 h-16 backdrop-blur-md bg-black/50 border border-${contact.color}-500/30 rounded-2xl flex items-center justify-center`}
                      style={{
                        boxShadow: `0 0 20px rgba(${contact.color === 'pink' ? '255, 0, 110' : contact.color === 'green' ? '6, 255, 165' : '58, 134, 255'}, 0.3)`
                      }}
                    >
                      <div className={`text-${contact.color}-500`}>
                        {contact.icon}
                      </div>
                    </div>
                    <div>
                      <p 
                        className="text-gray-400 text-sm font-bold"
                        style={{ fontFamily: 'Orbitron, monospace' }}
                      >
                        {contact.label}
                      </p>
                      <a 
                        href={contact.href}
                        target={contact.label === 'LINKEDIN' ? '_blank' : undefined}
                        rel={contact.label === 'LINKEDIN' ? 'noopener noreferrer' : undefined}
                        className={`text-white hover:text-${contact.color}-500 transition-colors text-lg font-bold`}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="fade-in-up">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-md p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <h3 
                className="text-3xl font-black mb-8 text-cyan-400 relative z-10"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                LAYİHƏ BAŞLAT
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label 
                    className="block text-gray-400 text-sm font-bold mb-2"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    LAYİHƏ NÖVÜ
                  </label>
                  <select 
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleInputChange}
                    required 
                    className="w-full bg-gray-800/80 border border-pink-500/30 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:outline-none transition-colors font-semibold backdrop-blur-md"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    <option value="">Layihə növünü seçin...</option>
                    <option value="smm">SMM Strategy</option>
                    <option value="brand">Brand Development</option>
                    <option value="campaign">Digital Campaign</option>
                    <option value="full">Full Marketing Package</option>
                  </select>
                </div>
                
                <div>
                  <label 
                    className="block text-gray-400 text-sm font-bold mb-2"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    BÜDCƏ ARALIĞI
                  </label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required 
                    className="w-full bg-gray-800/80 border border-pink-500/30 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:outline-none transition-colors font-semibold backdrop-blur-md"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    <option value="">Büdcə aralığını seçin...</option>
                    <option value="1k-5k">$1K - $5K</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k+">$25K+</option>
                  </select>
                </div>
                
                <div>
                  <label 
                    className="block text-gray-400 text-sm font-bold mb-2"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    MESAJ
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    required 
                    className="w-full bg-gray-800/80 border border-pink-500/30 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:outline-none resize-none transition-colors backdrop-blur-md"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    placeholder="Layihəniz haqqında ətraflı məlumat verin..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-xl font-black text-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:scale-100 flex items-center justify-center space-x-2"
                  style={{ 
                    fontFamily: 'Orbitron, monospace',
                    boxShadow: '0 0 30px rgba(255, 0, 110, 0.6)'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
                      <span>GÖNDƏRILIR...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>LAYİHƏNİ BAŞLAT →</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div className="text-center mt-16 fade-in-up">
          <div 
            className="inline-flex items-center space-x-4 backdrop-blur-md bg-black/50 border border-green-500/30 px-8 py-4 rounded-full"
            style={{
              boxShadow: '0 0 20px rgba(6, 255, 165, 0.3)'
            }}
          >
            <div 
              className="w-4 h-4 bg-green-500 rounded-full animate-pulse"
              style={{
                boxShadow: '0 0 10px rgba(6, 255, 165, 0.8)'
              }}
            />
            <span 
              className="text-green-400 font-bold"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              YENİ LAYİHƏLƏR ÜÇÜN AÇIQ
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
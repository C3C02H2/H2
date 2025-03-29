import React from 'react';
import { Atom, Battery, Zap, Droplets, Leaf, Shield, Gauge, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import BackgroundWrapper from '../components/BackgroundWrapper';

const HomePage = () => {
  const { t } = useLanguage();

  // Base features
  const features = [
    {
      icon: Atom,
      title: t('home.features.tech.title'),
      description: t('home.features.tech.desc'),
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Battery,
      title: t('home.features.storage.title'),
      description: t('home.features.storage.desc'),
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Zap,
      title: t('home.features.power.title'),
      description: t('home.features.power.desc'),
      color: 'from-purple-400 to-purple-600'
    }
  ];

  // Additional features
  const additionalFeatures = [
    {
      icon: Leaf,
      title: t('home.features.sustainable.title'),
      description: t('home.features.sustainable.desc'),
    },
    {
      icon: Gauge,
      title: t('home.features.versatile.title'),
      description: t('home.features.versatile.desc'),
    },
    {
      icon: Shield,
      title: t('home.features.efficient.title'),
      description: t('home.features.efficient.desc'),
    },
  ];

  // Info cards
  const infoCards = [
    {
      icon: Atom,
      title: t('home.info.molecular.title'),
      description: t('home.info.molecular.desc'),
    },
    {
      icon: Lightbulb,
      title: t('home.info.future.title'),
      description: t('home.info.future.desc'),
    },
    {
      icon: Users,
      title: t('home.info.about.title'),
      description: t('home.info.about.desc'),
    },
    {
      icon: Droplets,
      title: t('home.info.benefits.title'),
      description: t('home.info.benefits.desc'),
    }
  ];

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="min-h-screen flex flex-col">
            <div className="flex-1 pt-32 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl">
                  <h1 className="text-6xl font-bold mb-6 leading-tight">
                    <span className="text-white">{t('home.title')}</span>{' '}
                    <span className="relative">
                      <span className="text-blue-300 font-extrabold">
                        {t('home.element')}
                      </span>
                      <span className="absolute -inset-1 bg-blue-400/20 blur-lg"></span>
                    </span>
                  </h1>
                  
                  <div className="mb-10">
                    <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300 leading-relaxed mb-2">
                      {t('home.title')} {t('home.element')}
                    </h2>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300 leading-relaxed">
                      {t('home.description')}
                    </p>
                  </div>
                  
                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300 mb-12">
                    {t('home.mission')}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/properties" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full font-medium text-white hover:from-emerald-600 hover:to-blue-600 transition-all transform hover:scale-105">
                      {t('home.explore')}
                    </Link>
                    <Link to="/applications" className="px-6 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full font-medium text-white hover:bg-black/40 hover:border-white/40 transition-all transform hover:scale-105">
                      {t('home.see')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Features Section */}
          <div className="relative py-24 bg-gradient-to-b from-transparent to-black/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[30px] blur-xl transition-all group-hover:blur-2xl"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-[30px] p-8 border border-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="w-16 h-16 mb-6 relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                        <div className="relative bg-black/40 rounded-full w-full h-full flex items-center justify-center">
                          <feature.icon className="w-8 h-8 text-cyan-300" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/90">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Cooperative Section */}
          <div className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-[30px] p-8 md:p-12 bg-black/30 backdrop-blur-sm border border-white/10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">{t('home.info.about.title')}</h2>
                    <p className="text-xl text-white/90 mb-8">{t('home.info.about.desc')}</p>
                    <Link to="/who-we-are" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full font-medium text-white hover:from-emerald-600 hover:to-blue-600 transition-all transform hover:scale-105">
                      {t('home.learnMore')}
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">{t('home.info.benefits.title')}</h3>
                    <div className="space-y-4">
                      {additionalFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-black/40 rounded-full p-2 mr-4 flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-emerald-400" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                            <p className="text-white/90">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Information Grid */}
          <div className="pb-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {infoCards.map((card, index) => (
                  <div key={index} className="bg-black/20 backdrop-blur-sm rounded-[20px] p-6 border border-white/10 hover:border-white/20 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                        <card.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    </div>
                    <p className="text-white/90">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="pb-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-[30px] p-8 md:p-12 bg-gradient-to-r from-blue-600/30 to-emerald-600/30 backdrop-blur-sm border border-white/20">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-emerald-500/30 rounded-full blur-2xl"></div>
                
                <div className="max-w-3xl mx-auto text-center relative">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                    {t('home.info.future.title')}
                  </h2>
                  <p className="text-lg sm:text-xl text-white mb-8">
                    {t('home.info.future.desc')}
                  </p>
                  <Link to="/who-we-are" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full font-medium text-lg text-white hover:from-emerald-700 hover:to-blue-700 transition-all transform hover:scale-105">
                    {t('home.join')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default HomePage;

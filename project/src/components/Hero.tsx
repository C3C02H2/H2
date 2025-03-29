import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 md:mb-8 drop-shadow-xl">
          {t('home.title')} <span className="text-blue-300">{t('home.element')}</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-xl">
          {t('home.description')}
        </p>

        <div className="bg-emerald-900/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-8 md:mb-10 max-w-3xl mx-auto border-2 border-emerald-400/50">
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold drop-shadow-lg">
            {t('home.mission')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          <Link
            to="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-400 text-lg font-bold rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            {t('home.explore')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/applications"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-lg font-bold rounded-md text-white bg-gray-700/80 hover:bg-gray-600/80 transition-colors"
          >
            {t('home.see')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
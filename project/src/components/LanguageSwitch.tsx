import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'bg', label: 'Български' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
      >
        <span className="text-sm text-blue-300">
          {language === 'en' ? 'English' : 'Български'}
        </span>
        <ChevronDown className={`w-4 h-4 text-blue-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 w-32 rounded-[20px] bg-black/40 backdrop-blur-sm shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'bg');
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors ${
                language === lang.code ? 'text-emerald-300' : 'text-blue-300'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
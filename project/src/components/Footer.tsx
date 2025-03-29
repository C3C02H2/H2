import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.company')}</h3>
            <p className="text-white/90 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/H2-Energy-COOP-61569314020906/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/cooph2channel?s=11" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-white/90 hover:text-blue-300 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-300" />
                  {t('footer.properties')}
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-white/90 hover:text-blue-300 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-300" />
                  {t('footer.applications')}
                </Link>
              </li>
              <li>
                <Link to="/who-we-are" className="text-white/90 hover:text-blue-300 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-300" />
                  {t('footer.whoWeAre')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.contacts')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-white/90">
                <Phone className="w-5 h-5 mr-3 text-blue-300" />
                <span>0876133810</span>
              </li>
              <li className="flex items-center text-white/90">
                <Mail className="w-5 h-5 mr-3 text-blue-300" />
                <a href="mailto:h2encoop@gmail.com" className="hover:text-blue-300 transition-colors">
                  h2encoop@gmail.com
                </a>
              </li>
              <li className="flex items-start text-white/90">
                <MapPin className="w-5 h-5 mr-3 text-blue-300 mt-1" />
                <span>Гр. София<br />Жк Гео Милев<br />Бул. Шипченски проход 51<br />ПК: 1111</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-white/80">
            <p>&copy; {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
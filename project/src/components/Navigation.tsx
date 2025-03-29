import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Factory, Battery, Users, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: t('nav.applications'),
      icon: <Factory className="w-5 h-5" />,
      href: '/applications',
      dropdownItems: [
        { title: t('nav.transport'), href: '/applications#transport' },
        { title: t('nav.power'), href: '/applications#power' },
        { title: t('nav.industrial'), href: '/applications#industrial' },
      ]
    },
    {
      title: t('nav.properties'),
      icon: <Battery className="w-5 h-5" />,
      href: '/properties',
      dropdownItems: [
        { title: t('nav.physical'), href: '/properties#physical' },
        { title: t('nav.chemical'), href: '/properties#chemical' },
      ]
    },
    {
      title: t('nav.whoWeAre'),
      icon: <Users className="w-5 h-5" />,
      href: '/who-we-are',
      dropdownItems: [
        { title: t('nav.vision'), href: '/who-we-are#vision' },
        { title: t('nav.team'), href: '/who-we-are#team' },
      ]
    }
  ];

  return (
    <div className="fixed w-full z-50 px-8 pt-6">
      <nav 
        className={`
          max-w-7xl mx-auto rounded-[30px] transition-all duration-300 backdrop-blur-sm
          ${isScrolled 
            ? 'bg-white/70 shadow-lg shadow-black/5' 
            : 'bg-black/20'
          }
        `}
      >
        <div className="px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3">
                <svg width="40" height="40" viewBox="0 0 500 500" className="transition-colors">
                  <defs>
                    <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#7dd3fc' }} />
                      <stop offset="100%" style={{ stopColor: '#60a5fa' }} />
                    </linearGradient>
                    <linearGradient id="darkBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                      <stop offset="100%" style={{ stopColor: '#1d4ed8' }} />
                    </linearGradient>
                  </defs>
                  <g transform="translate(50, 50) scale(0.8)">
                    <path
                      d="M250,0 
                         C388.071,0 500,111.929 500,250 
                         C500,388.071 388.071,500 250,500 
                         C111.929,500 0,388.071 0,250 
                         C0,111.929 111.929,0 250,0 
                         L250,250 Z"
                      fill="url(#lightBlueGradient)"
                    />
                    <path
                      d="M250,0 
                         C388.071,0 500,111.929 500,250 
                         C500,388.071 388.071,500 250,500 
                         C111.929,500 0,388.071 0,250 
                         C0,111.929 111.929,0 250,0 
                         L250,250 Z"
                      fill="url(#darkBlueGradient)"
                      transform="rotate(180 250 250)"
                    />
                    <circle cx="250" cy="125" r="50" fill="url(#darkBlueGradient)" />
                    <circle cx="250" cy="375" r="50" fill="url(#lightBlueGradient)" />
                  </g>
                </svg>
                <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                  {t('footer.company')}
                </span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`
                      flex items-center space-x-1 transition-colors rounded-full px-4 py-2
                      ${isScrolled 
                        ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-blue-300 hover:bg-white/10'
                      }
                    `}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    {item.dropdownItems && (
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                  
                  {item.dropdownItems && activeDropdown === item.title && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                      <div className={`
                        rounded-[20px] p-2 min-w-[200px]
                        backdrop-blur-sm shadow-lg
                        ${isScrolled ? 'bg-white/90' : 'bg-black/40'}
                        transition-all duration-200 origin-top
                      `}>
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            to={dropdownItem.href}
                            className={`
                              block px-4 py-2 rounded-[15px]
                              ${isScrolled
                                ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                : 'text-white hover:text-blue-300 hover:bg-white/10'
                              }
                            `}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <LanguageSwitch />
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitch />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-full p-2 ${isScrolled 
                  ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-1 rounded-b-[30px] bg-black/40 backdrop-blur-sm">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.href}
                    className="flex items-center justify-between px-4 py-3 rounded-[20px] text-white hover:text-emerald-300 hover:bg-white/10"
                    onClick={() => {
                      if (!item.dropdownItems) setIsOpen(false);
                      setActiveDropdown(activeDropdown === item.title ? null : item.title);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {item.dropdownItems && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                  {item.dropdownItems && activeDropdown === item.title && (
                    <div className="pl-12 pr-4 space-y-1 mt-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          to={dropdownItem.href}
                          className="block px-4 py-2 rounded-[15px] text-white hover:text-emerald-300 hover:bg-white/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
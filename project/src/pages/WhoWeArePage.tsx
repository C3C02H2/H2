import React from 'react';
import { Users, Target, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BackgroundWrapper from '../components/BackgroundWrapper';

const WhoWeArePage = () => {
  const { t } = useLanguage();
  
  // Management Board members
  const managementBoard = [
    { name: 'Васимир Радулов', position: t('team.management') },
    { name: 'Инж. хим. д-р Стоян Събев', position: t('team.management') },
    { name: 'Ивайло Тасков', position: t('team.management') },
    { name: 'Тони Гарушев', position: t('team.management') },
    { name: 'Петко Коджейков', position: t('team.management') },
    { name: 'Петър Христов', position: t('team.management') }
  ];
  
  // Supervisory Board members
  const supervisoryBoard = [
    { name: 'Боян Бонев', position: t('team.supervisory') },
    { name: 'Стайко Топалов', position: t('team.supervisory') },
    { name: 'Иван Миланов', position: t('team.supervisory') },
    { name: 'Румен Чавдаров', position: t('team.supervisory') }
  ];

  return (
    <BackgroundWrapper>
      <div className="relative z-10 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Section */}
          <div id="vision" className="mb-16">
            <div className="flex items-center mb-8">
              <div className="relative">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-blue-300 relative z-10" />
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg animate-pulse"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white ml-4">
                {t('nav.vision')}
              </h1>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-[30px] p-6 sm:p-8 border border-white/20">
              <p className="text-xl text-white mb-8">{t('who.vision.description')}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[1, 2, 3].map((value) => (
                  <div key={value} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-[20px] blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative bg-black/40 rounded-[20px] p-6 border border-white/20 hover:border-emerald-500/50 transition-colors">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Award className="w-8 h-8 text-blue-300" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white text-center">
                        {t(`who.vision.value${value}.title`)}
                      </h3>
                      <p className="text-white/90 text-center">
                        {t(`who.vision.value${value}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div id="team" className="mt-16">
            <div className="flex items-center mb-8">
              <div className="relative">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-300 relative z-10" />
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg animate-pulse"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white ml-4">
                {t('nav.team')}
              </h2>
            </div>

            {/* Management Board */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">{t('team.management')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {managementBoard.map((member, index) => (
                  <div key={index} className="bg-black/30 rounded-[20px] p-6 border border-white/20 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                    <p className="text-blue-300">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Supervisory Board */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">{t('team.supervisory')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {supervisoryBoard.map((member, index) => (
                  <div key={index} className="bg-black/30 rounded-[20px] p-6 border border-white/20 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                    <p className="text-blue-300">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default WhoWeArePage;

import React from 'react';
import { Factory, Zap, Microscope, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BackgroundWrapper from '../components/BackgroundWrapper';

const ApplicationsPage = () => {
  const { t } = useLanguage();

  return (
    <BackgroundWrapper>
      <div className="relative z-10 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">
            {t('applications.title')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div id="industrial" className="bg-black/30 backdrop-blur-sm rounded-[30px] p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mr-4">
                  <Factory className="w-6 h-6 text-blue-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t('applications.industrial')}</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold text-white">{t('applications.refining')}</h3>
                  <p className="text-white/90">{t('applications.refiningDesc')}</p>
                </li>
                <li>
                  <h3 className="font-semibold text-white">{t('applications.ammonia')}</h3>
                  <p className="text-white/90">{t('applications.ammoniaDesc')}</p>
                </li>
                <li>
                  <h3 className="font-semibold text-white">{t('applications.metal')}</h3>
                  <p className="text-white/90">{t('applications.metalDesc')}</p>
                </li>
              </ul>
            </div>

            <div id="power" className="bg-black/30 backdrop-blur-sm rounded-[30px] p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-blue-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t('applications.energy')}</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold text-white">{t('applications.fuelCells')}</h3>
                  <p className="text-white/90">{t('applications.fuelCellsDesc')}</p>
                </li>
                <li>
                  <h3 className="font-semibold text-white">{t('applications.storage')}</h3>
                  <p className="text-white/90">{t('applications.storageDesc')}</p>
                </li>
                <li>
                  <h3 className="font-semibold text-white">{t('applications.rocket')}</h3>
                  <p className="text-white/90">{t('applications.rocketDesc')}</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-[30px] p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mr-4">
                  <Microscope className="w-6 h-6 text-blue-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t('applications.research')}</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold text-white">{t('applications.physics')}</h3>
                  <p className="text-white/90">{t('applications.physicsDesc')}</p>
                </li>
                <li>
                  <h3 className="font-semibold text-white">{t('applications.cryogenics')}</h3>
                  <p className="text-white/90">{t('applications.cryogenicsDesc')}</p>
                </li>
                <li>
                  <h3 className="font-semibold text-white">{t('applications.spectroscopy')}</h3>
                  <p className="text-white/90">{t('applications.spectroscopyDesc')}</p>
                </li>
              </ul>
            </div>

            <div id="transport" className="bg-black/30 backdrop-blur-sm rounded-[30px] p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mr-4">
                  <Truck className="w-6 h-6 text-blue-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t('applications.transport')}</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold text-white">{t('applications.fuelVehicles')}</h3>
                  <p className="text-white/90">{t('applications.fuelVehiclesDesc')}</p>
                </li>
                <li>
                  <h3 className="font-semibold text-white">{t('applications.heavyTransport')}</h3>
                  <p className="text-white/90">{t('applications.heavyTransportDesc')}</p>
                </li>
                <li>
                  <h3 className="font-semibold text-white">{t('applications.maritime')}</h3>
                  <p className="text-white/90">{t('applications.maritimeDesc')}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default ApplicationsPage;

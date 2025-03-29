import React from 'react';
import { Atom, Thermometer, Scale, Droplets, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BackgroundWrapper from '../components/BackgroundWrapper';

const PropertiesPage = () => {
  const { t } = useLanguage();

  return (
    <BackgroundWrapper>
     <div className="relative z-10 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">
            {t('properties.title')}
        </h1>

        {/* Green Hydrogen Section */}
        <div className="bg-black/30 backdrop-blur-sm rounded-[30px] p-8 mb-12 border border-white/20">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center mr-4">
              <Leaf className="w-6 h-6 text-green-300" />
            </div>
            <h2 className="text-2xl font-bold text-white">{t('properties.green.hydrogen')}</h2>
          </div>
          <div className="space-y-4 text-white/90">
            <p>{t('properties.green.description')}</p>
            <p>{t('properties.green.description2')}</p>
            <p>{t('properties.green.description3')}</p>
          </div>
        </div>

        {/* Basic Properties Card */}
        <div className="bg-black/30 backdrop-blur-sm rounded-[30px] p-8 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-4">
                <Atom className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('properties.atomicNumber')}</h3>
              <p className="text-3xl font-bold text-blue-300">1</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-4">
                <Scale className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('properties.atomicMass')}</h3>
              <p className="text-3xl font-bold text-blue-300">1.008 u</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-4">
                <Thermometer className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('properties.meltingPoint')}</h3>
              <p className="text-3xl font-bold text-blue-300">-259.16°C</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('properties.boilingPoint')}</h3>
              <p className="text-3xl font-bold text-blue-300">-252.87°C</p>
            </div>
          </div>
        </div>

        {/* Detailed Properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="physical" className="bg-black/30 backdrop-blur-sm rounded-[30px] p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">{t('properties.physicalProps')}</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-white">{t('properties.stateRT')}:</span>
                <p className="text-white/90">{t('properties.stateDesc')}</p>
              </li>
              <li>
                <span className="font-semibold text-white">{t('properties.density')}:</span>
                <p className="text-white/90">{t('properties.densityValue')}</p>
              </li>
              <li>
                <span className="font-semibold text-white">{t('properties.crystal')}:</span>
                <p className="text-white/90">{t('properties.crystalValue')}</p>
              </li>
              <li>
                <span className="font-semibold text-white">{t('properties.thermal')}:</span>
                <p className="text-white/90">{t('properties.thermalValue')}</p>
              </li>
            </ul>
          </div>

          <div id="chemical" className="bg-black/30 backdrop-blur-sm rounded-[30px] p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">{t('properties.chemicalProps')}</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-white">{t('properties.oxidation')}:</span>
                <p className="text-white/90">{t('properties.oxidationValue')}</p>
              </li>
              <li>
                <span className="font-semibold text-white">{t('properties.electronegativity')}:</span>
                <p className="text-white/90">{t('properties.electroValue')}</p>
              </li>
              <li>
                <span className="font-semibold text-white">{t('properties.ionization')}:</span>
                <p className="text-white/90">{t('properties.ionizationValue')}</p>
              </li>
              <li>
                <span className="font-semibold text-white">{t('properties.covalent')}:</span>
                <p className="text-white/90">{t('properties.covalentValue')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </div>
    </BackgroundWrapper>
  );
};

export default PropertiesPage;
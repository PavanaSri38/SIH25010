import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import WeatherAlerts from '../components/WeatherAlerts';

const WeatherPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="card p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-display">{t('weather.title')}</h1>
            <p className="text-gray-600 mt-1">Real-time weather information and agricultural advisories</p>
          </div>
        </div>
      </div>

      {/* Weather Component */}
      <WeatherAlerts />
    </div>
  );
};

export default WeatherPage;

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PestDetection from '../components/PestDetection';

const PestDetectionPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="card p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-display">{t('pest.title')}</h1>
            <p className="text-gray-600 mt-1">Upload images to detect pests and diseases in your crops</p>
          </div>
        </div>
      </div>

      {/* Pest Detection Component */}
      <PestDetection />
    </div>
  );
};

export default PestDetectionPage;

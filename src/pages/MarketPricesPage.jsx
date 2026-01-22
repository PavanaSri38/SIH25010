import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import MarketPrices from '../components/MarketPrices';

const MarketPricesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="card p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-display">{t('market.title')}</h1>
            <p className="text-gray-600 mt-1">Current market prices for agricultural commodities</p>
          </div>
        </div>
      </div>

      {/* Market Prices Component */}
      <MarketPrices />
    </div>
  );
};

export default MarketPricesPage;

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useFarm } from '../context/FarmContext';
import SoilForm from '../components/SoilForm';
import CropRecommendation from '../components/CropRecommendation';

const FarmSetupPage = () => {
  const { t } = useLanguage();
  const { cropRecommendations, soilResult, handleSoilResult } = useFarm();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="card p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-earth-700 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-display">{t('soil.title')}</h1>
            <p className="text-gray-600 mt-1">Analyze your soil and get personalized recommendations</p>
          </div>
        </div>
      </div>

      {/* Soil Analysis Form */}
      <SoilForm onResult={handleSoilResult} />

      {/* Crop Recommendations */}
      {cropRecommendations.length > 0 && (
        <div className="animate-slide-up">
          <CropRecommendation recommendations={cropRecommendations} />
        </div>
      )}

      {/* Soil Analysis Results */}
      {soilResult && soilResult.soilAnalysis && (
        <div className="card p-6 md:p-8 animate-scale-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 font-display">{t('soil.analysis')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                pH Status
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">
                {soilResult.soilAnalysis.soil_analysis.ph.value} - 
                <span className="text-primary-700 ml-2">{soilResult.soilAnalysis.soil_analysis.ph.status}</span>
              </p>
              {soilResult.soilAnalysis.soil_analysis.ph.recommendation && (
                <p className="text-sm text-blue-700 mt-2 bg-blue-50 p-2 rounded-lg">
                  {soilResult.soilAnalysis.soil_analysis.ph.recommendation}
                </p>
              )}
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-5 border border-green-200">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Nutrient Status
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-white/60 rounded-lg p-2">
                  <span className="text-gray-600">Nitrogen:</span>
                  <span className="font-semibold text-gray-800">{soilResult.soilAnalysis.soil_analysis.nutrients.nitrogen}</span>
                </div>
                <div className="flex justify-between items-center bg-white/60 rounded-lg p-2">
                  <span className="text-gray-600">Phosphorus:</span>
                  <span className="font-semibold text-gray-800">{soilResult.soilAnalysis.soil_analysis.nutrients.phosphorus}</span>
                </div>
                <div className="flex justify-between items-center bg-white/60 rounded-lg p-2">
                  <span className="text-gray-600">Potassium:</span>
                  <span className="font-semibold text-gray-800">{soilResult.soilAnalysis.soil_analysis.nutrients.potassium}</span>
                </div>
                <div className="flex justify-between items-center bg-white/60 rounded-lg p-2">
                  <span className="text-gray-600">Moisture:</span>
                  <span className="font-semibold text-gray-800">{soilResult.soilAnalysis.soil_analysis.nutrients.moisture}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-primary-600 rounded-xl shadow-md">
            <p className="font-bold text-white text-lg flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Overall Health: {soilResult.soilAnalysis.overall_health}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmSetupPage;

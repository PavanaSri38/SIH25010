import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="px-3 py-1.5 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <option value="en">English</option>
        <option value="te">తెలుగు</option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
  );
};

export default LanguageSelector;


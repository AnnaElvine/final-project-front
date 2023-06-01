import React, { useState } from 'react';



const LanguageButton = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'sv' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <button id='LangueBtn' onClick={toggleLanguage}>
      {language === 'en' ? 'English' : 'Svenska'}
    </button>
  );
};

export default LanguageButton;

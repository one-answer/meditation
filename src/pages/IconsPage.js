import React from 'react';
import { Link } from 'react-router-dom';
import IconsDisplay from '../components/icons/IconsDisplay';
import { useLanguage } from '../context/LanguageContext';
import Quote from '../components/Quote';
import { MeditationLogo } from '../components/icons/MeditationIcons';

const IconsPage = () => {
  const { texts } = useLanguage();

  return (
    <div className="icons-page">
      <header className="app-header">
        <div className="logo-container">
          <MeditationLogo width={40} height={40} />
          <h1>冥想 {texts.appTitle}</h1>
        </div>
        <p>{texts.iconGallery}</p>
        <Link to="/" className="back-button">
          <MeditationLogo width={20} height={20} />
          <span>{texts.backToMeditation}</span>
        </Link>
      </header>

      <main className="icons-container">
        <IconsDisplay />
      </main>

      <footer className="app-footer">
        <Quote showRefreshButton={true} />
      </footer>
    </div>
  );
};

export default IconsPage;

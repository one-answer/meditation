import React from 'react';
import { 
  MeditationLogo, 
  BreathingIcon, 
  SoundIcon, 
  TimerIcon, 
  PatternIcon,
  LanguageIcon
} from './MeditationIcons';
import { useLanguage } from '../../context/LanguageContext';

const IconsDisplay = () => {
  const { texts } = useLanguage();
  
  const iconStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '150px',
    height: '150px',
    justifyContent: 'center'
  };
  
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    padding: '2rem'
  };
  
  const titleStyle = {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#4a5568',
    textAlign: 'center'
  };
  
  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '2rem 0', color: '#2d3748' }}>
        {texts.iconGallery || '图标展示'}
      </h2>
      <div style={containerStyle}>
        <div style={iconStyle}>
          <MeditationLogo width={80} height={80} />
          <p style={titleStyle}>{texts.meditationLogo || '冥想标志'}</p>
        </div>
        
        <div style={iconStyle}>
          <BreathingIcon width={80} height={80} phase="inhale" progress={0.5} />
          <p style={titleStyle}>{texts.breathingIcon || '呼吸图标'}</p>
        </div>
        
        <div style={iconStyle}>
          <SoundIcon width={80} height={80} playing={true} />
          <p style={titleStyle}>{texts.soundIcon || '声音图标'}</p>
        </div>
        
        <div style={iconStyle}>
          <TimerIcon width={80} height={80} />
          <p style={titleStyle}>{texts.timerIcon || '计时器图标'}</p>
        </div>
        
        <div style={iconStyle}>
          <PatternIcon width={80} height={80} />
          <p style={titleStyle}>{texts.patternIcon || '模式图标'}</p>
        </div>
        
        <div style={iconStyle}>
          <LanguageIcon width={80} height={80} />
          <p style={titleStyle}>{texts.languageIcon || '语言图标'}</p>
        </div>
      </div>
    </div>
  );
};

export default IconsDisplay;

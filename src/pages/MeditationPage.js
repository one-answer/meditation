import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from '../components/audio/AudioPlayer';
import { useLanguage } from '../context/LanguageContext';
import {
  MeditationLogo,
  BreathingIcon,
  SoundIcon,
  TimerIcon,
  PatternIcon,
  LanguageIcon
} from '../components/icons/MeditationIcons';

function MeditationPage() {
  // Get language context
  const { texts, language, toggleLanguage } = useLanguage();

  // State for breathing pattern
  const [breathingPattern, setBreathingPattern] = useState({
    inhale: 4,
    hold: 4,
    exhale: 6,
    name: 'Basic Relaxation'
  });

  // State for meditation duration in seconds
  const [duration, setDuration] = useState(60); // Default 1 minute

  // State for background sound
  const [sound, setSound] = useState({
    playing: false,
    volume: 0.5,
    source: 'ocean'
  });

  // State for meditation session
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(duration);

  // State for current breathing phase
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [phaseProgress, setPhaseProgress] = useState(0);

  // Refs for timers
  const breathingTimerRef = useRef(null);
  const sessionTimerRef = useRef(null);
  const audioRef = useRef(null);

  // Effect for breathing animation cycle
  useEffect(() => {
    if (isActive) {
      let phaseDuration;
      let nextPhase;

      // Determine current phase duration and next phase
      switch (breathingPhase) {
        case 'inhale':
          phaseDuration = breathingPattern.inhale * 1000;
          nextPhase = 'hold';
          break;
        case 'hold':
          phaseDuration = breathingPattern.hold * 1000;
          nextPhase = 'exhale';
          break;
        case 'exhale':
          phaseDuration = breathingPattern.exhale * 1000;
          nextPhase = 'inhale';
          break;
        default:
          phaseDuration = 1000;
          nextPhase = 'inhale';
      }

      // Clear any existing timer
      if (breathingTimerRef.current) {
        clearInterval(breathingTimerRef.current);
      }

      // Set up progress updates (10 updates per phase)
      const interval = 100;
      const steps = phaseDuration / interval;
      let currentStep = 0;

      breathingTimerRef.current = setInterval(() => {
        currentStep++;
        setPhaseProgress(currentStep / steps);

        // Move to next phase when current phase completes
        if (currentStep >= steps) {
          setBreathingPhase(nextPhase);
          setPhaseProgress(0);
          clearInterval(breathingTimerRef.current);
        }
      }, interval);
    } else {
      // Clear timer when not active
      if (breathingTimerRef.current) {
        clearInterval(breathingTimerRef.current);
      }
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      if (breathingTimerRef.current) {
        clearInterval(breathingTimerRef.current);
      }
    };
  }, [breathingPhase, isActive, breathingPattern]);

  // Effect for session timer
  useEffect(() => {
    if (isActive) {
      sessionTimerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // End session when time is up
            clearInterval(sessionTimerRef.current);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      // Clear timer when not active
      if (sessionTimerRef.current) {
        clearInterval(sessionTimerRef.current);
      }
    }

    // Cleanup on unmount
    return () => {
      if (sessionTimerRef.current) {
        clearInterval(sessionTimerRef.current);
      }
    };
  }, [isActive]);

  // Effect for audio control
  useEffect(() => {
    // In a real app, you would load an actual audio file
    // For this example, we'll simulate audio control
    if (sound.playing) {
      // Play audio logic would go here
      console.log('Playing ocean sounds at volume:', sound.volume);
    } else {
      // Pause audio logic would go here
      console.log('Ocean sounds paused');
    }
  }, [sound.playing, sound.volume]);

  // Handle start/stop meditation
  const toggleMeditation = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setTimeRemaining(duration);
      setBreathingPhase('inhale');
      setPhaseProgress(0);
    }
  };

  // Change breathing pattern
  const changeBreathingPattern = (pattern) => {
    setBreathingPattern(pattern);
    // Reset breathing phase when pattern changes
    if (isActive) {
      setBreathingPhase('inhale');
      setPhaseProgress(0);
    }
  };

  // Change duration
  const changeDuration = (newDuration) => {
    setDuration(newDuration);
    setTimeRemaining(newDuration);
  };

  // Toggle sound
  const toggleSound = () => {
    setSound({...sound, playing: !sound.playing});
  };

  // Adjust volume
  const adjustVolume = (newVolume) => {
    setSound({...sound, volume: newVolume});
  };

  // Format time remaining as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="meditation-app">
      {/* Audio player component */}
      <AudioPlayer
        playing={sound.playing}
        volume={sound.volume}
        source={sound.source}
      />

      <header className="app-header">
        <div className="logo-container">
          <MeditationLogo width={40} height={40} />
          <h1>冥想 {texts.appTitle}</h1>
        </div>
        <p>{texts.appSubtitle}</p>

        {/* Navigation links */}
        <div className="nav-links">
          <Link to="/icons" className="nav-link">
            <span>{texts.viewIcons}</span>
          </Link>

          {/* Language toggle button */}
          <button className="language-toggle" onClick={toggleLanguage}>
            <LanguageIcon width={20} height={20} />
            <span>{language === 'zh' ? 'English' : '中文'}</span>
          </button>
        </div>
      </header>

      <main className="meditation-container">
        {/* Timer display */}
        <div className="timer-display">
          <h2>{formatTime(timeRemaining)}</h2>
          <p>{isActive ? texts.meditationInProgress : texts.readyToBegin}</p>
        </div>

        {/* Breathing animation */}
        <div className="breathing-circle-container">
          <div
            className={`breathing-circle ${breathingPhase}`}
            style={{
              transform: `scale(${breathingPhase === 'inhale' ? 1 + phaseProgress * 0.5 :
                              breathingPhase === 'exhale' ? 1.5 - phaseProgress * 0.5 : 1.5})`
            }}
          >
            <BreathingIcon
              width={100}
              height={100}
              phase={breathingPhase}
              progress={phaseProgress}
            />
          </div>
          <div className="breathing-text">{texts[breathingPhase]}</div>
          {isActive && (
            <div className="breathing-instruction">
              {breathingPhase === 'inhale' && texts.inhaleInstruction}
              {breathingPhase === 'hold' && texts.holdInstruction}
              {breathingPhase === 'exhale' && texts.exhaleInstruction}
            </div>
          )}
        </div>

        {/* Controls panel */}
        <div className="controls-panel">
          <div className="breathing-patterns">
            <h3 className="section-title">
              <PatternIcon width={24} height={24} />
              <span>{texts.breathingPatternTitle}</span>
            </h3>
            <div className="pattern-buttons">
              <button
                className={breathingPattern.name === 'Basic Relaxation' ? 'active' : ''}
                onClick={() => changeBreathingPattern({inhale: 4, hold: 4, exhale: 6, name: 'Basic Relaxation'})}
                disabled={isActive}
              >
                {texts.basicPattern}
              </button>
              <button
                className={breathingPattern.name === 'Mindful Breathing' ? 'active' : ''}
                onClick={() => changeBreathingPattern({inhale: 4, hold: 7, exhale: 8, name: 'Mindful Breathing'})}
                disabled={isActive}
              >
                {texts.mindfulPattern}
              </button>
              <button
                className={breathingPattern.name === 'Deep Meditation' ? 'active' : ''}
                onClick={() => changeBreathingPattern({inhale: 5, hold: 5, exhale: 5, name: 'Deep Meditation'})}
                disabled={isActive}
              >
                {texts.deepPattern}
              </button>
            </div>
          </div>

          <div className="duration-control">
            <h3 className="section-title">
              <TimerIcon width={24} height={24} />
              <span>{texts.durationTitle}</span>
            </h3>
            <div className="duration-buttons">
              <button
                className={duration === 60 ? 'active' : ''}
                onClick={() => changeDuration(60)}
                disabled={isActive}
              >
                {texts.oneMin}
              </button>
              <button
                className={duration === 300 ? 'active' : ''}
                onClick={() => changeDuration(300)}
                disabled={isActive}
              >
                {texts.fiveMin}
              </button>
              <button
                className={duration === 600 ? 'active' : ''}
                onClick={() => changeDuration(600)}
                disabled={isActive}
              >
                {texts.tenMin}
              </button>
            </div>
          </div>

          <div className="sound-control">
            <h3 className="section-title">
              <SoundIcon width={24} height={24} playing={sound.playing} />
              <span>{texts.soundTitle}</span>
            </h3>
            <button onClick={toggleSound} className="sound-button">
              <SoundIcon width={20} height={20} playing={sound.playing} />
              <span>{sound.playing ? texts.muteSound : texts.playSound}</span>
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={sound.volume}
              onChange={(e) => adjustVolume(parseFloat(e.target.value))}
              disabled={!sound.playing}
            />
          </div>

          <div className="start-button">
            <button
              className={`start-meditation ${isActive ? 'active' : ''}`}
              onClick={toggleMeditation}
            >
              <BreathingIcon
                width={24}
                height={24}
                phase={breathingPhase}
                progress={phaseProgress}
              />
              <span>{isActive ? texts.stopMeditation : texts.startMeditation}</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>{texts.dailyQuote}</p>
      </footer>
    </div>
  );
}

export default MeditationPage;

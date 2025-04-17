import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ playing, volume, source }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // In a real app, you would load actual audio files
    // For this example, we'll just log the actions
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <audio 
      ref={audioRef}
      src={`/sounds/${source}.mp3`} 
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default AudioPlayer;

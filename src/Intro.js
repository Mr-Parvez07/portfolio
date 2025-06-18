import React, { useEffect, useRef } from 'react';
import './Intro.css';
import bgVideo from './Welcome1.mp4';

function Intro({ onFinish }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Skip intro if already shown in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro === 'true') {
      if (typeof onFinish === 'function') {
        onFinish();
      }
    }
  }, [onFinish]);

  const handleVideoEnd = () => {
    // Mark as seen for this session
    sessionStorage.setItem('hasSeenIntro', 'true');

    // Navigate to home
    if (typeof onFinish === 'function') {
      onFinish();
    }
  };

  return (
    <div className="intro-screen">
      <video
        ref={videoRef}
        className="intro-video"
        src={bgVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      ></video>
      <div className="overlay"></div>
    </div>
  );
}

export default Intro;


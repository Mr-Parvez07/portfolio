import React, { useRef } from 'react';
import './Intro.css';
import bgVideo from './Welcome1.mp4';

function Intro({ onFinish }) {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (typeof onFinish === 'function') {
      onFinish(); // Navigate to Home page
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
      />
      <div className="overlay"></div>
    </div>
  );
}

export default Intro;



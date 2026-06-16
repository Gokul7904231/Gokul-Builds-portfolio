import React from 'react';
import VideoBackground from './VideoBackground';

const SectionTransition: React.FC = () => {
  return (
    <div className="relative w-full h-32 md:h-48 overflow-hidden my-0">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#2e3141] via-transparent to-[#2e3141]" />
      <VideoBackground src="landed.mp4" className="opacity-60" />
    </div>
  );
};

export default SectionTransition;

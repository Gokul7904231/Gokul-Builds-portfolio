import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  isFixed?: boolean;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, className = '', isFixed = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className={`absolute top-0 left-0 w-full h-full overflow-hidden ${isFixed ? 'fixed z-[-1]' : 'z-0'} ${className}`}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 z-10" />
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoBackground;

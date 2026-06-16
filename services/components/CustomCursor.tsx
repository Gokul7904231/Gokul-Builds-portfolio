import React from 'react';
// @ts-ignore
import AnimatedCursor from 'react-animated-cursor';

export const CustomCursor: React.FC = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={0}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: '#D4AF37'
      }}
      outerStyle={{
        border: '2px solid rgba(212, 175, 55, 0.7)',
        mixBlendMode: 'normal'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.cursor-pointer',
        '[role="button"]'
      ]}
    />
  );
};

export default CustomCursor;

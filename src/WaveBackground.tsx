import React from 'react';

const WaveBackground: React.FC = () => (
  <svg
    viewBox="0 0 1440 320"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 320,
      zIndex: 1
    }}
  >
    <defs>
      <linearGradient id="swave-blue" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#38bdf8" offset="0%" />
        <stop stopColor="#2563eb" offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#swave-blue)"
      fillOpacity="0.4"
      d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,240C672,245,768,203,864,197.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    />
  </svg>
);

export default WaveBackground;

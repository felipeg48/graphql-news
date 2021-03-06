import React from 'react';

export default ({ className, fill }) => (
  <div className={className} style={{ transform: `rotate(180deg)` }}>
    <svg width="8px" height="7px" viewBox="0 0 8 7" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M4.89442719,0.788854382 L7.2763932,5.5527864 C7.52338245,6.0467649 7.3231581,6.64743794 6.82917961,6.89442719 C6.69032417,6.96385491 6.53721111,7 6.38196601,7 L1.61803399,7 C1.06574924,7 0.618033989,6.55228475 0.618033989,6 C0.618033989,5.8447549 0.654179081,5.69164184 0.723606798,5.5527864 L3.10557281,0.788854382 C3.35256206,0.294875885 3.9532351,0.0946515378 4.4472136,0.341640786 C4.640741,0.438404488 4.79766349,0.59532698 4.89442719,0.788854382 Z" id="Triangle" fill={fill}></path>
      </g>
    </svg>
  </div>
);

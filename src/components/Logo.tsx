import React from 'react';

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer border with cake top */}
      <path 
        d="M100 20 C100 20, 110 20, 110 25 C110 25, 115 25, 115 35 C115 35, 120 35, 120 45 C120 45, 180 60, 180 80 L180 130 C180 150, 100 180, 100 180 C100 180, 20 150, 20 130 L20 80 C20 60, 80 45, 80 45 C80 45, 85 35, 85 35 C85 35, 90 25, 90 25 C90 25, 100 20, 100 20 Z" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Cake tiers lines */}
      <path d="M90 25 L110 25 M85 35 L115 35 M80 45 L120 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Georgian Text "დონა" */}
      <text x="100" y="95" fontFamily="sans-serif" fontSize="42" fontWeight="bold" fill="currentColor" textAnchor="middle">
        დონა
      </text>

      {/* Georgian Subtext */}
      <text x="100" y="115" fontFamily="sans-serif" fontSize="10" fill="currentColor" textAnchor="middle">
        საკონდიტრო მაღაზია
      </text>

      {/* English Text "dona" */}
      <text x="100" y="140" fontFamily="serif" fontSize="24" fontStyle="italic" fill="currentColor" textAnchor="middle">
        - dona -
      </text>

      {/* Bee Icon */}
      <g transform="translate(90, 155) scale(0.8)">
        <path d="M12 2 L12 6 M8 4 L12 6 M16 4 L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="12" cy="12" rx="4" ry="6" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12 C4 12, 2 10, 2 8 C2 6, 6 8, 8 10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 12 C20 12, 22 10, 22 8 C22 6, 18 8, 16 10" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="9" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

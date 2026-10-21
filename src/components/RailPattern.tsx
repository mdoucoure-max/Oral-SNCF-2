import React from 'react';

export const RailPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${className}`}
    >
      <svg
        className="w-full h-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1200 40"
      >
        <line x1="0" y1="12" x2="1200" y2="12" stroke="#4DA3FF" strokeWidth="2" strokeDasharray="6 2" />
        <line x1="0" y1="28" x2="1200" y2="28" stroke="#4DA3FF" strokeWidth="2" strokeDasharray="6 2" />
        {Array.from({ length: 48 }).map((_, i) => (
          <line
            key={i}
            x1={i * 25 + 12}
            y1="6"
            x2={i * 25 + 12}
            y2="34"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
};

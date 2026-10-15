import React from 'react';

interface TraditionalDividerProps {
  variant?: 'gold-line' | 'cloud' | 'ink-dots' | 'crane' | 'seal';
  className?: string;
  sealText?: string;
}

export const TraditionalDivider: React.FC<TraditionalDividerProps> = ({
  variant = 'gold-line',
  className = '',
  sealText = '國樂',
}) => {
  if (variant === 'gold-line') {
    return (
      <div className={`relative flex items-center justify-center my-8 ${className}`}>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C59A38]" />
        <div className="mx-2 w-2 h-2 rotate-45 border border-[#C59A38] bg-[#F4EEDF]" />
        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C59A38]" />
      </div>
    );
  }

  if (variant === 'cloud') {
    return (
      <div className={`flex items-center justify-center my-6 opacity-60 ${className}`}>
        <svg
          viewBox="0 0 120 30"
          className="w-24 h-6 text-[#C59A38] fill-none stroke-current"
          strokeWidth="1.2"
        >
          {/* Traditional Korean Cloud Motif */}
          <path d="M10 20 C 15 12, 28 12, 35 18 C 42 10, 60 10, 68 18 C 75 14, 88 14, 94 20 C 102 20, 110 22, 115 25" />
          <path d="M25 18 C 22 24, 30 26, 38 24" />
          <path d="M50 16 C 56 12, 64 13, 67 17" />
          <path d="M78 18 C 82 22, 90 22, 95 19" />
          <circle cx="60" cy="8" r="1.5" className="fill-[#C59A38]" />
        </svg>
      </div>
    );
  }

  if (variant === 'ink-dots') {
    return (
      <div className={`flex items-center justify-center gap-1.5 my-6 opacity-40 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#1D294B]" />
        <span className="w-2 h-2 rounded-full bg-[#263458]" />
        <span className="w-1 h-1 rounded-full bg-[#3B4B6E]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#1D294B]" />
      </div>
    );
  }

  if (variant === 'crane') {
    return (
      <div className={`flex items-center justify-center my-6 ${className}`}>
        <svg viewBox="0 0 60 40" className="w-12 h-8 text-[#C59A38] fill-current opacity-70">
          {/* Elegant Crane silhouette */}
          <path d="M10 25 C 18 20, 26 15, 35 18 C 42 12, 50 8, 55 5 C 48 12, 42 20, 36 24 C 32 30, 26 34, 18 32 C 14 30, 11 27, 10 25 Z" />
          <path d="M35 18 L 48 28 C 42 27, 38 25, 36 24 Z" />
          <path d="M18 32 L 8 38 M 20 32 L 12 39" stroke="#C59A38" strokeWidth="0.8" />
        </svg>
      </div>
    );
  }

  if (variant === 'seal') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 border border-[#B93822] bg-[#BA351F] text-[#FAF6ED] font-serif font-bold text-xs flex items-center justify-center rounded-[2px] shadow-sm transform -rotate-3 select-none">
          {sealText}
        </div>
      </div>
    );
  }

  return null;
};

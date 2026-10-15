import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CAST_NOTICE, INSTRUCTORS } from '../data/cast.ts';
import { TraditionalDivider } from './TraditionalDivider.tsx';

const galleryImages = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
];

export const Cast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Auto-advance every 4.5 seconds (4~5초마다 자동 전환)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Touch Swipe handlers for mobile (모바일 좌우 스와이프 지원)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const distance = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 35; // px threshold
      if (distance > minSwipeDistance) {
        handleNext(); // swiped left -> next
      } else if (distance < -minSwipeDistance) {
        handlePrev(); // swiped right -> prev
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section className="relative px-6 sm:px-9 py-16 sm:py-20 bg-[#F4EEDF] hanji-bg border-b border-[#E2D7BE]/70 overflow-hidden">
      {/* Decorative vertical lines on sides */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/20 to-transparent pointer-events-none hidden xs:block" />
      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/20 via-transparent to-transparent pointer-events-none" />

      {/* Section Header: "무대를 만드는 사람들" 핵심 텍스트 유지 */}
      <div className="text-center mb-10">
        <h2 className="font-korean-serif text-2xl sm:text-3xl font-extrabold text-[#1D294B] tracking-tight">
          무대를 만드는 사람들
        </h2>
        <div className="mt-2.5 w-10 h-[2px] bg-[#C59A38] mx-auto" />
      </div>

      <div className="max-w-md mx-auto space-y-8">
        {/* Fixed Height Photo Gallery Frame with Smooth Fade, Micro Scale, and Touch Swipe */}
        <div
          className="relative w-full h-64 sm:h-72 overflow-hidden border border-[#C59A38]/40 bg-[#141B2D] shadow-sm select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Photos Stack with Fade & Micro-Scale */}
          {galleryImages.map((src, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={src}
                  alt={`무대를 만드는 사람들 사진 ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                    isActive ? 'scale-[1.025]' : 'scale-100'
                  }`}
                  loading="lazy"
                />
              </div>
            );
          })}

          {/* Top Counter Tag */}
          <div className="absolute top-3 right-3 z-30">
            <span className="px-2 py-0.5 bg-[#141B2D]/75 border border-[#C59A38]/40 text-[#FAF6ED] text-[10px] font-korean-batang tracking-wider">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>

          {/* Left / Right Chevron Controls */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="이전 사진"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#141B2D]/60 hover:bg-[#141B2D]/90 text-white/90 hover:text-[#C59A38] border border-white/20 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="다음 사진"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#141B2D]/60 hover:bg-[#141B2D]/90 text-white/90 hover:text-[#C59A38] border border-white/20 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Small Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 -mt-4">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`사진 ${idx + 1} 보기`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 bg-[#C59A38]'
                  : 'w-1.5 bg-[#C59A38]/35 hover:bg-[#C59A38]/70'
              }`}
            />
          ))}
        </div>

        {/* Message of Encouragement */}
        <div className="border-l-2 border-[#C59A38] pl-4 py-1 space-y-2">
          <p className="font-korean-batang text-[15px] text-[#1D294B] font-semibold leading-relaxed">
            “{CAST_NOTICE.mainMessage}”
          </p>
          <p className="font-korean-batang text-[13px] text-[#474E5D] leading-relaxed">
            {CAST_NOTICE.subMessage}
          </p>
        </div>

        {/* Leadership & Instructors (지도진) */}
        <div className="pt-4 border-t border-[#C59A38]/25 space-y-4">
          <h3 className="font-korean-serif text-sm font-bold text-[#1D294B] tracking-wider mb-3">
            지도진
          </h3>
          <div className="space-y-3 font-korean-batang text-xs sm:text-[13px]">
            {INSTRUCTORS.map((inst, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 pb-2 border-b border-[#E2D7BE]/50">
                <span className="font-korean-serif font-bold text-[#A87A18] w-28 shrink-0">
                  {inst.role}
                </span>
                <span className="text-[#2B354D] leading-relaxed">
                  {inst.names.join(' · ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TraditionalDivider variant="gold-line" className="mt-12 mb-0" />
    </section>
  );
};

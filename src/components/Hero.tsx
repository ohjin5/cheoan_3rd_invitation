import React from 'react';
import { EVENT_DATA } from '../data/event.ts';
import { InkMountain } from './InkMountain.tsx';

interface HeroProps {
  onScrollToNotice?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToNotice }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#F4EEDF] hanji-bg border-b border-[#E2D7BE]/70">
      {/* Decorative vertical gold border lines echoing poster leaflet layout */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/40 to-transparent pointer-events-none hidden xs:block" />
      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/15 via-transparent to-transparent pointer-events-none" />

      {/* Top Header & Title Area with generous breathing room */}
      <div className="relative z-20 pt-10 sm:pt-14 px-7 sm:px-9 text-left">
        {/* 1. 상단 공식 대표 기관 로고: 150px 너비로 정중하게 배치 및 얇은 금빛 구분선 */}
        <div className="pt-1 pb-1">
          <img
            src="/images/logo.png"
            alt="천안시청소년재단 천안시청소년복합커뮤니티센터"
            className="w-[150px] h-auto object-contain select-none"
          />
          {/* 로고 하단 얇은 금빛 구분선으로 존재감과 격조 부여 */}
          <div className="w-14 sm:w-16 h-[1.5px] bg-[#C59A38]/60 mt-3.5 mb-5" />
        </div>

        {/* 2. 주최 및 주관 단체명 */}
        <div className="mb-5 space-y-0.5">
          <p className="font-korean-serif text-[13px] sm:text-[14px] text-[#2B354D] tracking-tight font-medium opacity-90">
            2026년 천안시청소년복합커뮤니티센터
          </p>
          <p className="font-korean-serif text-[15px] sm:text-[16px] text-[#1D294B] tracking-tight font-bold">
            {EVENT_DATA.groupName}
          </p>
        </div>

        {/* 3. Poster Main Headline: 제3회 정기연주회 (가장 강조) */}
        <div className="mt-1">
          <h1 className="font-korean-serif text-[#1D294B] leading-[1.08] tracking-tight">
            <span className="block text-4xl sm:text-5xl font-black mb-1.5">
              제3회
            </span>
            <span className="block text-5xl sm:text-6xl font-black">
              정기연주회
            </span>
          </h1>
        </div>

        {/* 4. Poetic Sub-copy in Gold/Ochre: “우리의 소리, 오늘을 울리다” */}
        <div className="mt-6 pl-0.5">
          <p className="font-korean-serif text-[#A87A18] text-xl sm:text-2xl font-bold leading-snug">
            “우리의 소리,<br />
            오늘을 울리다”
          </p>
        </div>
      </div>

      {/* Center & Lower Area: Ink Wash Mountains, Red Sun & Cranes */}
      <div className="relative z-10 w-full mt-auto">
        <InkMountain
          variant="hero"
          showSun={true}
          showCranes={true}
          showInkDots={true}
          className="-mb-1"
        />

        {/* Date & Location Overlay on Foreground Navy Mountain */}
        <div className="absolute bottom-10 left-7 sm:left-9 z-30 text-white max-w-[85%]">
          {/* Date String */}
          <div className="relative inline-block pb-1.5 mb-1.5 border-b border-[#C59A38]/70">
            <p className="font-sans text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
              {EVENT_DATA.dateDisplay}
            </p>
          </div>

          {/* Time in Gold */}
          <p className="font-korean-serif text-[#E9D29A] text-lg sm:text-xl font-bold tracking-normal mb-1">
            {EVENT_DATA.timeDisplay}
          </p>

          {/* Hall Name */}
          <p className="font-korean-serif text-white/90 text-[13px] sm:text-[14px] leading-snug tracking-tight font-light">
            {EVENT_DATA.venueName} {EVENT_DATA.venueHall}
          </p>
        </div>
      </div>

      {/* Subtle Scroll Indicator at the very base */}
      <div className="relative z-30 bg-[#16203B] py-3 px-4 text-center border-t border-[#314068]/50">
        <button
          type="button"
          onClick={onScrollToNotice}
          className="inline-flex items-center justify-center gap-2 text-[#E2D7BE] hover:text-white transition-colors duration-300 text-xs sm:text-[13px] font-korean-batang tracking-wider group cursor-pointer"
          aria-label="공연 안내로 이동"
        >
          <span>공연 안내 보기</span>
          <svg
            className="w-3.5 h-3.5 text-[#C59A38] transform group-hover:translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

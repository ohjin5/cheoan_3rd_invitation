
import React from 'react';
import { EVENT_DATA } from '../data/event.ts';
import { InkMountain } from './InkMountain.tsx';

const footerLogos = [
  {
    src: '/images/logo.png',
    alt: '천안시청소년재단 천안시청소년복합커뮤니티센터',
  },
  {
    src: '/images/logo2.png',
    alt: '충청남도천안교육지원청',
  },
  {
    src: '/images/logo3.png',
    alt: '협력 기관 로고 3',
  },
  {
    src: '/images/logo4.png',
    alt: '협력 기관 로고 4',
  },
];

// BGM 저작권 정보
// 실제 공유마당 음원 상세페이지의 저작자,
// 라이선스 버전 및 원본 링크를 확인하여 수정하세요.
const bgmCredit = {
  title: '국악 배경음악 #101',
  author: '공유마당 (저작물 1000 건)',
  source: '한국저작권위원회',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.ko',
  modified: false,
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#18233C] text-white overflow-hidden select-none">
      {/* 상단 수묵 산수 연결 */}
      <div className="relative -mt-1 w-full">
        <InkMountain
          variant="footer"
          showSun={true}
          showInkDots={true}
        />
      </div>

      {/* 마무리 메시지 */}
      <div className="relative z-20 px-6 sm:px-9 py-12 text-center">
        <p className="font-korean-serif text-lg sm:text-xl font-bold text-[#E9D29A] leading-relaxed mb-4">
          “우리의 소리가
          <br />
          당신의 오늘에 오래도록 울리기를 바랍니다.”
        </p>

        <div className="w-12 h-[1px] bg-[#C59A38]/60 mx-auto my-5" />

        <div className="space-y-1.5 font-korean-batang text-xs sm:text-[13px] text-white/80">
          <p className="font-korean-serif font-semibold text-white text-sm">
            {EVENT_DATA.title}
          </p>

          <p className="tracking-wider text-[#D8B764]">
            2026. 12. 12. SAT · 5:00 PM
          </p>

          <p className="text-white/70">
            {EVENT_DATA.venueName} {EVENT_DATA.venueHall}
          </p>

          <p className="text-white/60 text-xs mt-1">
            문의 :{' '}
            <a
              href={`tel:${EVENT_DATA.contactPhone}`}
              className="hover:text-white underline underline-offset-2"
            >
              {EVENT_DATA.contactPhone}
            </a>
          </p>
        </div>
      </div>

      {/* 하단 기관 로고 순환 영역 */}
      <div className="bg-[#FAF6ED] text-[#222631] py-5 border-t-2 border-[#C59A38]/50 overflow-hidden">
        <div className="text-center mb-2.5">
          <span className="text-[10px] font-korean-batang text-[#6F4A0C] tracking-widest">
            주최 · 주관 및 협력 기관
          </span>
        </div>

        <div className="relative w-full overflow-hidden py-2">
          {/* 좌우 페이드 */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FAF6ED] to-transparent z-10 pointer-events-none" />

          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAF6ED] to-transparent z-10 pointer-events-none" />

          {/* 무한 로고 흐름 */}
          <div className="animate-logo-marquee flex items-center">
            {/* Sequence 1 */}
            <div className="flex items-center gap-10 sm:gap-14 px-6 shrink-0">
              {footerLogos.map((logo, idx) => (
                <div
                  key={`s1-${idx}`}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-9 w-auto max-w-[155px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Sequence 2 */}
            <div className="flex items-center gap-10 sm:gap-14 px-6 shrink-0">
              {footerLogos.map((logo, idx) => (
                <div
                  key={`s2-${idx}`}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-9 w-auto max-w-[155px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Sequence 3 */}
            <div className="flex items-center gap-10 sm:gap-14 px-6 shrink-0">
              {footerLogos.map((logo, idx) => (
                <div
                  key={`s3-${idx}`}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-9 w-auto max-w-[155px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BGM 저작권 출처 */}
        <div className="mx-6 sm:mx-9 mt-5 pt-4 border-t border-[#E2D7BE]/70 text-center">
          <p className="font-korean-serif text-[11px] font-bold text-[#6F4A0C] mb-2">
            배경음악 출처
          </p>

          <div className="font-korean-sans text-[10px] sm:text-[11px] text-[#6E6250] leading-[1.9] space-y-0.5">
            <p>
              음원명 : {bgmCredit.title}
            </p>

            <p>
              저작자 : {bgmCredit.author}
            </p>

            <p>
              출처 : {bgmCredit.source}
            </p>

            <p>
              라이선스 :{' '}
              <a
                href={bgmCredit.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D294B] underline underline-offset-2 hover:text-[#A87A18]"
              >
                {bgmCredit.license}
              </a>
            </p>

            <p>
              {bgmCredit.modified
                ? '음원 편집·변경하여 사용'
                : '원본 음원 그대로 사용'}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-center text-[#7E889B] font-korean-sans mt-4 pt-3 border-t border-[#E2D7BE]/70 max-w-xs mx-auto leading-relaxed px-2">
          © 2026 천안시청소년복합커뮤니티센터 교육사업팀.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

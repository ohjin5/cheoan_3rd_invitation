import React, { useState } from 'react';
import {
  MapPin,
  Share2,
  Check,
  ExternalLink,
} from 'lucide-react';

import {
  EVENT_DATA,
  REGISTRATION_URL,
} from '../data/event.ts';

export const PerformanceInfo: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EVENT_DATA.venueAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = EVENT_DATA.venueAddress;

      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2200);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: EVENT_DATA.title,
      text: `${EVENT_DATA.title}
“${EVENT_DATA.slogan}”
일시: ${EVENT_DATA.dateFullKorean}
장소: ${EVENT_DATA.venueName} ${EVENT_DATA.venueHall}`,
      url: window.location.href,
    };

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare(shareData)
    ) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyShareLink();
        }
      }
    } else {
      copyShareLink();
    }
  };

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2400);
    } catch {
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2400);
    }
  };

  return (
    <section
      id="performance-info"
      className="relative px-6 sm:px-8 py-14 sm:py-16 bg-[#F4EEDF] hanji-bg border-b border-[#E2D7BE]/70"
    >
      {/* 우측 전통 금빛 세로선 */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/20 to-transparent pointer-events-none hidden xs:block" />

      {/* Section Header */}
      <div className="relative mb-10 text-center sm:text-left">
        <h2 className="font-korean-serif text-2xl sm:text-3xl font-extrabold text-[#1D294B] tracking-tight">
          공연 안내
        </h2>

        <div className="mt-2.5 w-10 h-[2px] bg-[#C59A38] mx-auto sm:mx-0" />
      </div>

      {/* 공연 정보 */}
      <div className="space-y-6 max-w-lg mx-auto sm:mx-0 font-korean-serif">
        {/* 일시 */}
        <div className="pb-5 border-b border-[#C59A38]/20">
          <p className="text-xs font-bold text-[#A87A18] tracking-wider mb-1">
            일시
          </p>

          <p className="text-lg sm:text-xl font-bold text-[#1D294B] leading-snug">
            {EVENT_DATA.dateFullKorean}
          </p>
        </div>

        {/* 장소 */}
        <div className="pb-5 border-b border-[#C59A38]/20">
          <p className="text-xs font-bold text-[#A87A18] tracking-wider mb-1">
            장소
          </p>

          <p className="text-lg sm:text-xl font-bold text-[#1D294B] leading-snug">
            {EVENT_DATA.venueName} {EVENT_DATA.venueHall}
          </p>

          <p className="font-korean-sans text-xs text-[#5C6374] mt-1 leading-relaxed">
            {EVENT_DATA.venueAddress}
          </p>
        </div>

        {/* 문의 */}
        <div className="pb-5 border-b border-[#C59A38]/20">
          <p className="text-xs font-bold text-[#A87A18] tracking-wider mb-1">
            문의
          </p>

          <p className="text-base sm:text-lg font-bold text-[#1D294B]">
            {EVENT_DATA.contactDepartment}{' '}

            <a
              href={`tel:${EVENT_DATA.contactPhone}`}
              className="underline underline-offset-4 hover:text-[#C59A38] transition-colors"
            >
              {EVENT_DATA.contactPhone}
            </a>
          </p>
        </div>

        {/* 관람 안내 */}
        <div className="pb-2">
          <p className="text-xs font-bold text-[#A87A18] tracking-wider mb-1">
            관람 안내
          </p>

          <p className="text-base sm:text-lg font-bold text-[#1D294B]">
            {EVENT_DATA.admissionFee} · {EVENT_DATA.admissionType}
          </p>
        </div>
      </div>

      {/* 사전 관람 신청 */}
      <div className="mt-7">
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-2.5 bg-[#1D294B] hover:bg-[#263458] border border-[#C59A38] px-5 py-4 text-[#F5E5B7] transition-colors duration-300"
          aria-label="네이버폼에서 사전 관람 신청하기"
        >
          <span className="font-korean-serif text-[15px] sm:text-base font-bold tracking-wide">
            사전 관람 신청하기
          </span>

          <ExternalLink className="w-4 h-4 text-[#C59A38] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <p className="mt-2.5 text-center font-korean-batang text-[11px] sm:text-xs text-[#6E6250]">
          버튼을 누르면 네이버 사전신청 페이지로 이동합니다.
        </p>
      </div>

      {/* 주소 복사 / 공유하기 */}
      <div className="mt-7 pt-4">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleCopyAddress}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#FAF6ED] hover:bg-[#F0E8D4] text-[#1D294B] border border-[#C59A38]/60 font-korean-serif text-xs font-medium transition-colors cursor-pointer"
          >
            {copiedAddress ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-700" />
                <span className="text-green-800 font-semibold">
                  복사됨
                </span>
              </>
            ) : (
              <>
                <MapPin className="w-3.5 h-3.5 text-[#A87A18]" />
                <span>주소 복사</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#FAF6ED] hover:bg-[#F0E8D4] text-[#1D294B] border border-[#C59A38]/60 font-korean-serif text-xs font-medium transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#A87A18]" />
            <span>공유하기</span>
          </button>
        </div>

        {sharedToast && (
          <div className="mt-3 py-2 px-3 bg-[#1D294B] text-[#FAF6ED] border border-[#C59A38] text-center text-xs font-korean-batang animate-fade-in">
            초대장 링크가 복사되었습니다.
          </div>
        )}
      </div>

      {/* 대표 기관 로고 */}
      <div className="mt-10">
        <div className="w-full h-[1px] bg-[#C59A38]/40 mb-6 max-w-sm mx-auto" />

        <div className="flex flex-col items-center justify-center py-1">
          <img
            src="/images/logo.png"
            alt="천안시청소년재단 천안시청소년복합커뮤니티센터"
            className="w-[155px] max-w-[175px] h-auto object-contain select-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
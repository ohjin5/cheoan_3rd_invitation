import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Car,
  Bus,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

import { EVENT_DATA } from '../data/event.ts';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EVENT_DATA.venueAddress);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      // clipboard API를 사용할 수 없는 환경 대응
      const textarea = document.createElement('textarea');

      textarea.value = EVENT_DATA.venueAddress;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      document.execCommand('copy');

      document.body.removeChild(textarea);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    }
  };

  return (
    <section className="relative px-6 sm:px-9 py-16 sm:py-20 bg-[#F4EEDF] hanji-bg border-b border-[#E2D7BE]/70">
      {/* 우측 금빛 세로선 */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/20 to-transparent pointer-events-none hidden xs:block" />

      {/* 좌측 금빛 세로선 */}
      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/20 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-korean-serif text-2xl sm:text-3xl font-extrabold text-[#1D294B] tracking-tight">
          오시는 길
        </h2>

        <div className="mt-2.5 w-10 h-[2px] bg-[#C59A38] mx-auto" />
      </div>

      <div className="max-w-md mx-auto space-y-8">
        {/* 공연장 정보 */}
        <div className="text-center pb-6 border-b border-[#C59A38]/25">
          <h3 className="font-korean-serif text-xl sm:text-2xl font-black text-[#1D294B]">
            {EVENT_DATA.venueName}
          </h3>

          <p className="font-korean-serif text-base text-[#263458] font-semibold mt-0.5">
            {EVENT_DATA.venueHall}
          </p>

          <p className="font-korean-sans text-xs sm:text-[13px] text-[#4F5666] mt-2 leading-relaxed">
            {EVENT_DATA.venueAddress}
          </p>

          {/* 주소 복사 */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C59A38] bg-[#FAF6ED] text-[#1D294B] hover:bg-[#1D294B] hover:text-[#FAF6ED] transition-colors font-korean-serif text-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-700" />

                  <span className="text-green-800 font-bold">
                    주소가 복사되었습니다
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A87A18]" />

                  <span>주소 복사하기</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 지도 / 길찾기 */}
        <div className="relative border border-[#C59A38]/40 overflow-hidden bg-[#FAF6ED]">
          <div className="p-6 bg-gradient-to-b from-[#F2EBDC] to-[#EAE0CA] text-center relative select-none">
            <div className="w-12 h-12 rounded-full border border-[#C59A38] bg-[#1D294B] text-[#FAF6ED] flex items-center justify-center mx-auto mb-3 shadow-sm">
              <MapPin className="w-6 h-6 text-[#E9D29A]" />
            </div>

            <p className="font-korean-serif text-base font-bold text-[#1D294B] mb-1">
              {EVENT_DATA.venueName}
            </p>

            <p className="font-korean-batang text-xs text-[#6F4A0C]">
              {EVENT_DATA.venueHall}
            </p>

            <p className="font-korean-sans text-[11px] sm:text-xs text-[#5C6374] mt-2">
              {EVENT_DATA.venueAddress}
            </p>
          </div>

          {/* 지도 링크 */}
          <div className="grid grid-cols-2 divide-x divide-[#C59A38]/30 border-t border-[#C59A38]/40 bg-[#1D294B]">
            <a
              href={EVENT_DATA.navigationLinks.naverMap}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-2 flex items-center justify-center gap-1.5 text-white hover:bg-[#263458] transition-colors text-xs font-korean-serif"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E9D29A]" />

              <span>네이버 지도</span>

              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={EVENT_DATA.navigationLinks.kakaoMap}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-2 flex items-center justify-center gap-1.5 text-white hover:bg-[#263458] transition-colors text-xs font-korean-serif"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E9D29A]" />

              <span>카카오맵</span>

              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* 교통 / 주차 안내 */}
        <div className="space-y-4 pt-2">
          {/* 대중교통 */}
          <div className="flex gap-3 items-start">
            <div className="p-2 border border-[#C59A38]/50 bg-[#FAF6ED] shrink-0 mt-0.5">
              <Bus className="w-4 h-4 text-[#1D294B]" />
            </div>

            <div>
              <p className="font-korean-serif text-sm font-bold text-[#1D294B] mb-1">
                대중교통 안내
              </p>

              <p className="font-korean-batang text-xs text-[#4F5666] leading-relaxed">
                공연 당일 관람객이 몰릴 수 있으니 여유 있게
                도착해 주시기 바랍니다. 가능한 대중교통 이용을
                권장드립니다.
              </p>
            </div>
          </div>

          {/* 주차 */}
          <div className="flex gap-3 items-start">
            <div className="p-2 border border-[#C59A38]/50 bg-[#FAF6ED] shrink-0 mt-0.5">
              <Car className="w-4 h-4 text-[#1D294B]" />
            </div>

            <div>
              <p className="font-korean-serif text-sm font-bold text-[#1D294B] mb-1">
                주차 안내
              </p>

              <p className="font-korean-batang text-xs text-[#4F5666] leading-relaxed">
                주차 공간이 혼잡할 수 있으므로 차량 이용 시
                현장 안내에 따라 주차해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
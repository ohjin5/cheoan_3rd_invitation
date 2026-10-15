import React, { useState } from 'react';
import { MapPin, Navigation, Car, Bus, Copy, Check, ExternalLink } from 'lucide-react';
import { EVENT_DATA } from '../data/event.ts';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EVENT_DATA.venueAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="relative px-6 sm:px-9 py-16 sm:py-20 bg-[#F4EEDF] hanji-bg border-b border-[#E2D7BE]/70">
      {/* Decorative vertical lines on sides */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/20 to-transparent pointer-events-none hidden xs:block" />
      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/20 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-korean-serif text-2xl sm:text-3xl font-extrabold text-[#1D294B] tracking-tight">
          오시는 길
        </h2>
        <div className="mt-2.5 w-10 h-[2px] bg-[#C59A38] mx-auto" />
      </div>

      <div className="max-w-md mx-auto space-y-8">
        {/* Venue Information Title Block */}
        <div className="text-center pb-6 border-b border-[#C59A38]/25">
          <h3 className="font-korean-serif text-xl sm:text-2xl font-black text-[#1D294B]">
            {EVENT_DATA.venueName}
          </h3>
          <p className="font-korean-serif text-base text-[#263458] font-semibold mt-0.5">
            {EVENT_DATA.venueHall}
          </p>

          <p className="font-korean-sans text-xs sm:text-[13px] text-[#4F5666] mt-2">
            {EVENT_DATA.venueAddress}
          </p>

          {/* Copy Address Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C59A38] bg-[#FAF6ED] text-[#1D294B] hover:bg-[#1D294B] hover:text-[#FAF6ED] transition-colors font-korean-serif text-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-700" />
                  <span className="text-green-800 font-bold">주소가 복사되었습니다</span>
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

        {/* Map Preview Artwork Box */}
        <div className="relative border border-[#C59A38]/40 overflow-hidden bg-[#FAF6ED]">
          <div className="p-6 bg-gradient-to-b from-[#F2EBDC] to-[#EAE0CA] text-center relative select-none">
            {/* Compass / Pin Visual */}
            <div className="w-12 h-12 rounded-full border border-[#C59A38] bg-[#1D294B] text-[#FAF6ED] flex items-center justify-center mx-auto mb-3 shadow-sm">
              <MapPin className="w-6 h-6 text-[#E9D29A]" />
            </div>

            <p className="font-korean-serif text-base font-bold text-[#1D294B] mb-1">
              천안시청소년복합커뮤니티센터
            </p>
            <p className="font-korean-batang text-xs text-[#6F4A0C]">
              대공연장
            </p>
          </div>

          {/* Navigation Links Bar */}
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

        {/* Traffic & Parking Notice */}
        <div className="space-y-4 pt-2">
          {/* Public Transit */}
          <div className="flex gap-3 items-start">
            <div className="p-2 border border-[#C59A38]/50 bg-[#FAF6ED] shrink-0 mt-0.5">
              <Bus className="w-4 h-4 text-[#1D294B]" />
            </div>
            <div>
              <p className="font-korean-serif text-sm font-bold text-[#1D294B] mb-1">
                대중교통 안내
              </p>
              <p className="font-korean-batang text-xs text-[#4F5666] leading-relaxed">
                천안역 및 인근 버스정류장에서 천안시청소년복합커뮤니티센터 방면 시내버스를 이용하실 수 있습니다.
              </p>
            </div>
          </div>

          {/* Parking Guide */}
          <div className="flex gap-3 items-start">
            <div className="p-2 border border-[#C59A38]/50 bg-[#FAF6ED] shrink-0 mt-0.5">
              <Car className="w-4 h-4 text-[#1D294B]" />
            </div>
            <div>
              <p className="font-korean-serif text-sm font-bold text-[#1D294B] mb-1">
                주차 안내
              </p>
              <p className="font-korean-batang text-xs text-[#4F5666] leading-relaxed">
                센터 내 주차장이 마련되어 있으나 주말 공연 시간대에는 혼잡할 수 있으니 안전 주차해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

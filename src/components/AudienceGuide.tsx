import React from 'react';
import { Phone, Clock, AlertCircle } from 'lucide-react';
import { EVENT_DATA } from '../data/event.ts';
import { TraditionalDivider } from './TraditionalDivider.tsx';

export const AudienceGuide: React.FC = () => {
  return (
    <section className="relative px-6 sm:px-9 py-16 sm:py-20 bg-[#F4EEDF] hanji-bg border-b border-[#E2D7BE]/70">
      {/* Decorative vertical lines on sides */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/20 to-transparent pointer-events-none hidden xs:block" />
      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/20 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-korean-serif text-2xl sm:text-3xl font-extrabold text-[#1D294B] tracking-tight">
          관람 안내
        </h2>
        <div className="mt-2 w-12 h-[2px] bg-[#C59A38] mx-auto" />
        <p className="mt-2 font-korean-batang text-xs text-[#6F4A0C] tracking-wide">
          AUDIENCE GUIDE
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Ticket & Admission Summary Box */}
        <div className="p-6 bg-[#FCFAF3]/80 border border-[#C59A38]/40 text-center">
          <p className="font-korean-serif text-xs font-bold text-[#A87A18] tracking-widest uppercase mb-1">
            TICKETING & ADMISSION
          </p>
          <p className="font-korean-serif text-2xl font-black text-[#1D294B] mb-2">
            전석 무료 초대
          </p>
          <div className="w-8 h-[1px] bg-[#C59A38] mx-auto mb-3" />
          <p className="font-korean-batang text-sm text-[#252A36]">
            사전 신청 또는 공연 당일 현장 입장
          </p>
          <p className="font-korean-sans text-xs text-[#6F4A0C] mt-2">
            (좌석 상황에 따라 선착순으로 입장이 진행될 수 있습니다)
          </p>
        </div>

        {/* Essential Manners & Guidelines */}
        <div className="space-y-3.5 pt-2 font-korean-batang text-xs sm:text-[13px] text-[#434A59] leading-relaxed">
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-[#A87A18] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1D294B] font-korean-serif">로비 개방 및 입장:</strong> 공연 시작 30분 전부터 객석 입장이 시작됩니다.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#A87A18] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1D294B] font-korean-serif">공연 중 유의사항:</strong> 연주 중에는 휴대전화를 무음 혹은 전원을 꺼 주시고, 플래시를 동반한 사진 및 영상 촬영은 단원들의 집중을 위해 자제해 주시기 바랍니다.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-[#A87A18] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1D294B] font-korean-serif">문의처:</strong> 천안시청소년복합커뮤니티센터 교육사업팀{' '}
              <a href={`tel:${EVENT_DATA.contactPhone}`} className="text-[#1D294B] font-bold underline underline-offset-2">
                {EVENT_DATA.contactPhone}
              </a>
            </p>
          </div>
        </div>
      </div>

      <TraditionalDivider variant="gold-line" className="mt-12 mb-0" />
    </section>
  );
};

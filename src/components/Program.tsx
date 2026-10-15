import React from 'react';
import { PROGRAM_LIST } from '../data/program.ts';

export const Program: React.FC = () => {
  return (
    <section className="relative px-6 sm:px-9 py-16 sm:py-20 bg-[#F4EEDF] hanji-bg border-b border-[#E2D7BE]/70">
      {/* Decorative vertical lines on sides */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/20 to-transparent pointer-events-none hidden xs:block" />
      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/20 via-transparent to-transparent pointer-events-none" />

      {/* Section Header: 제목은 "오늘의 울림"만 정갈하게 표시 */}
      <div className="text-center mb-12">
        <h2 className="font-korean-serif text-2xl sm:text-3xl font-extrabold text-[#1D294B] tracking-tight">
          오늘의 울림
        </h2>
        <div className="mt-2.5 w-10 h-[2px] bg-[#C59A38] mx-auto" />
      </div>

      {/* Booklet Style Program List (공연 프로그램북 형태의 정갈한 나열) */}
      <div className="max-w-md mx-auto space-y-0">
        {PROGRAM_LIST.map((item, index) => (
          <div
            key={item.id}
            className={`py-5 ${
              index !== PROGRAM_LIST.length - 1 ? 'border-b border-[#C59A38]/25' : ''
            }`}
          >
            {/* 번호 (금빛) & 곡명 (짙은 남색) */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-sans text-base sm:text-lg font-bold text-[#A87A18] tracking-wider shrink-0 w-7">
                {item.orderNumber}
              </span>
              <h3 className="font-korean-serif text-lg sm:text-xl font-bold text-[#1D294B] tracking-tight">
                {item.title}
              </h3>
            </div>

            {/* 설명 (먹색 계열) */}
            <p className="font-korean-batang text-[14px] sm:text-[14.5px] text-[#474E5D] leading-relaxed pl-10">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

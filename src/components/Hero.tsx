import React from 'react';

interface HeroProps {
  onScrollToNotice?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToNotice }) => {
  return (
    <section className="relative w-full bg-[#F4EEDF] border-b border-[#E2D7BE]/70">
      {/* 
        제3회 정기연주회 공식 포스터
        public/images/poster.png
      */}
      <div className="relative w-full">
        <img
          src="/images/poster.png"
          alt="제3회 천안청소년국악관현악단 정기연주회 포스터"
          className="block w-full h-auto object-contain"
          draggable={false}
        />
      </div>

      {/* 공연 안내 이동 버튼 */}
      <div className="relative bg-[#16203B] py-3.5 px-4 text-center border-t border-[#314068]/50">
        <button
          type="button"
          onClick={onScrollToNotice}
          className="inline-flex items-center justify-center gap-2 text-[#E9D29A] hover:text-white transition-colors duration-300 text-xs sm:text-[13px] font-korean-batang tracking-wider group cursor-pointer"
          aria-label="공연 안내로 이동"
        >
          <span>공연 안내 보기</span>

          <svg
            className="w-3.5 h-3.5 text-[#C59A38] transform group-hover:translate-y-0.5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
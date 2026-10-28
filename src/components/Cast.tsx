import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import {
  INSTRUCTORS,
  YOUTH_MEMBERS,
} from '../data/cast.ts';

import { TraditionalDivider } from './TraditionalDivider.tsx';

const galleryImages = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
  '/images/photo7.jpg',
  '/images/photo8.jpg',
  '/images/photo9.jpg',
  '/images/photo10.jpg',
  '/images/photo11.jpg',
  '/images/photo12.jpg',
  '/images/photo13.jpg',
  '/images/photo14.jpg',
  '/images/photo15.jpg',
];

export const Cast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  /**
   * 4.5초마다 자동으로 다음 사진 표시
   */
  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % galleryImages.length,
      );
    }, 4500);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + galleryImages.length) %
        galleryImages.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) =>
        (prev + 1) % galleryImages.length,
    );
  };

  /**
   * 모바일 좌우 스와이프
   */
  const handleTouchStart = (
    e: React.TouchEvent,
  ) => {
    setIsPaused(true);

    touchStartXRef.current =
      e.targetTouches[0].clientX;

    touchEndXRef.current = null;
  };

  const handleTouchMove = (
    e: React.TouchEvent,
  ) => {
    touchEndXRef.current =
      e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);

    if (
      touchStartXRef.current !== null &&
      touchEndXRef.current !== null
    ) {
      const distance =
        touchStartXRef.current -
        touchEndXRef.current;

      const minSwipeDistance = 35;

      if (distance > minSwipeDistance) {
        handleNext();
      } else if (
        distance < -minSwipeDistance
      ) {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section className="relative px-6 sm:px-9 py-16 sm:py-20 bg-[#F4EEDF] hanji-bg border-b border-[#E2D7BE]/70 overflow-hidden">
      {/* 좌우 전통 금빛 세로선 */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/20 to-transparent pointer-events-none hidden xs:block" />

      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/20 via-transparent to-transparent pointer-events-none" />

      {/* 제목 */}
      <div className="text-center mb-10">
        <h2 className="font-korean-serif text-2xl sm:text-3xl font-extrabold text-[#1D294B] tracking-tight">
          무대를 만드는 사람들
        </h2>

        <div className="mt-2.5 w-10 h-[2px] bg-[#C59A38] mx-auto" />
      </div>

      <div className="max-w-md mx-auto">
        {/* 활동사진 갤러리 */}
        <div
          className="relative w-full h-64 sm:h-72 overflow-hidden border border-[#C59A38]/40 bg-[#141B2D] shadow-sm select-none"
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {galleryImages.map(
            (src, index) => {
              const isActive =
                index === currentIndex;

              return (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={src}
                    alt={`천안청소년국악관현악단 활동사진 ${
                      index + 1
                    }`}
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      isActive
                        ? 'scale-[1.025]'
                        : 'scale-100'
                    }`}
                    loading="lazy"
                  />
                </div>
              );
            },
          )}

          {/* 현재 사진 번호 */}
          <div className="absolute top-3 right-3 z-30">
            <span className="px-2 py-0.5 bg-[#141B2D]/75 border border-[#C59A38]/40 text-[#FAF6ED] text-[10px] font-korean-batang tracking-wider">
              {currentIndex + 1} /{' '}
              {galleryImages.length}
            </span>
          </div>

          {/* 이전 사진 */}
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

          {/* 다음 사진 */}
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

        {/* 갤러리 인디케이터 */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {galleryImages.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentIndex(index)
                }
                aria-label={`사진 ${
                  index + 1
                } 보기`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? 'w-6 bg-[#C59A38]'
                    : 'w-1.5 bg-[#C59A38]/35 hover:bg-[#C59A38]/70'
                }`}
              />
            ),
          )}
        </div>

        {/*
          기존 활동사진 아래의
          "한 해 동안..." / "우리 아이들이..."
          2개 문단은 삭제
        */}

        {/* 지도진 */}
        <div className="mt-12 pt-7 border-t border-[#C59A38]/30">
          <div className="text-center mb-7">
            <h3 className="font-korean-serif text-xl sm:text-2xl font-extrabold text-[#1D294B]">
              지도진
            </h3>

            <div className="mt-2 w-8 h-[1.5px] bg-[#C59A38] mx-auto" />
          </div>

          <div className="font-korean-batang">
            {INSTRUCTORS.map(
              (instructor, index) => (
                <div
                  key={`${instructor.role}-${index}`}
                  className="flex items-baseline py-2.5 border-b border-[#E2D7BE]/65 last:border-b-0"
                >
                  <span className="w-[92px] shrink-0 font-korean-serif font-bold text-[#A87A18] text-[13px] sm:text-sm">
                    {instructor.role}
                  </span>

                  <span className="text-[#263458] text-[14px] sm:text-[15px] font-semibold">
                    {instructor.names.join(
                      ' · ',
                    )}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* 청소년 단원 */}
        <div className="mt-14 pt-7 border-t border-[#C59A38]/30">
          <div className="text-center mb-8">
            <h3 className="font-korean-serif text-xl sm:text-2xl font-extrabold text-[#1D294B]">
              천안청소년국악관현악단
            </h3>

            <p className="font-korean-batang text-[13px] text-[#A87A18] mt-1">
              청소년 단원
            </p>

            <div className="mt-3 w-8 h-[1.5px] bg-[#C59A38] mx-auto" />
          </div>

          <div className="space-y-6">
            {YOUTH_MEMBERS.map(
              (group) => (
                <div
                  key={group.part}
                  className="pb-5 border-b border-[#C59A38]/20 last:border-b-0"
                >
                  <h4 className="font-korean-serif text-[14px] sm:text-[15px] font-bold text-[#A87A18] mb-2.5">
                    {group.part}
                  </h4>

                  <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                    {group.names.map(
                      (name) => (
                        <span
                          key={`${group.part}-${name}`}
                          className="font-korean-batang text-[13px] sm:text-[14px] text-[#263458] leading-relaxed"
                        >
                          {name}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <TraditionalDivider
        variant="gold-line"
        className="mt-12 mb-0"
      />
    </section>
  );
};
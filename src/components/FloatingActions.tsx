import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Phone, Share2, Check } from 'lucide-react';
import { EVENT_DATA } from '../data/event.ts';
import { generateGoogleCalendarUrl } from '../utils/calendar.ts';

export const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 250px down
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: EVENT_DATA.title,
      text: `${EVENT_DATA.title}\n“${EVENT_DATA.slogan}”\n일시: ${EVENT_DATA.dateFullKorean}\n장소: ${EVENT_DATA.venueName} ${EVENT_DATA.venueHall}`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyUrl();
        }
      }
    } else {
      copyUrl();
    }
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const googleCalUrl = generateGoogleCalendarUrl({
    title: EVENT_DATA.title,
    description: `${EVENT_DATA.slogan}\n문의: ${EVENT_DATA.contactDepartment} ${EVENT_DATA.contactPhone}`,
    location: `${EVENT_DATA.venueName} ${EVENT_DATA.venueHall}`,
    startTime: EVENT_DATA.isoStartTime,
    endTime: EVENT_DATA.isoEndTime,
  });

  if (!isVisible) return null;

  return (
    <aside aria-label="빠른 실행 메뉴" className="fixed bottom-0 inset-x-0 z-40 flex justify-center px-4 pb-3 pointer-events-none transition-all duration-300">
      <div className="w-full max-w-[480px] bg-[#16203B]/95 text-[#FAF6ED] backdrop-blur-md border border-[#C59A38]/70 shadow-2xl pointer-events-auto flex items-center justify-around py-2.5 px-3">
        {/* 1. Calendar */}
        <a
          href={googleCalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[#E2D7BE] hover:text-[#C59A38] transition-colors py-1 px-2"
          aria-label="캘린더에 일정 추가"
        >
          <Calendar className="w-4 h-4 text-[#D4A73F]" />
          <span className="text-[11px] font-korean-serif">일정 등록</span>
        </a>

        <div className="w-[1px] h-6 bg-[#C59A38]/30" />

        {/* 2. Map */}
        <a
          href={EVENT_DATA.navigationLinks.naverMap}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[#E2D7BE] hover:text-[#C59A38] transition-colors py-1 px-2"
          aria-label="공연장 지도 및 길찾기"
        >
          <MapPin className="w-4 h-4 text-[#D4A73F]" />
          <span className="text-[11px] font-korean-serif">오시는 길</span>
        </a>

        <div className="w-[1px] h-6 bg-[#C59A38]/30" />

        {/* 3. Call */}
        <a
          href={`tel:${EVENT_DATA.contactPhone}`}
          className="flex flex-col items-center justify-center gap-1 text-[#E2D7BE] hover:text-[#C59A38] transition-colors py-1 px-2"
          aria-label="문의처 전화 걸기"
        >
          <Phone className="w-4 h-4 text-[#D4A73F]" />
          <span className="text-[11px] font-korean-serif">문의하기</span>
        </a>

        <div className="w-[1px] h-6 bg-[#C59A38]/30" />

        {/* 4. Share */}
        <button
          type="button"
          onClick={handleShare}
          className="flex flex-col items-center justify-center gap-1 text-[#E2D7BE] hover:text-[#C59A38] transition-colors py-1 px-2 cursor-pointer"
          aria-label="모바일 초대장 링크 공유"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-[11px] font-korean-serif text-green-300">복사완료</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-[#D4A73F]" />
              <span className="text-[11px] font-korean-serif">초대 공유</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

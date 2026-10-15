import { useState, useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { PerformanceInfo } from './components/PerformanceInfo.tsx';
import { Invitation } from './components/Invitation.tsx';
import { Program } from './components/Program.tsx';
import { Cast } from './components/Cast.tsx';
import { Location } from './components/Location.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { AudioAmbience } from './components/AudioAmbience.tsx';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToNotice = () => {
    const el = document.getElementById('performance-info');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#181F30] text-[#252A36] flex justify-center">
      {/* Top delicate gold reading progress bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#A87A18] via-[#C59A38] to-[#E9D29A] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Audio ambience toggle in the top corner */}
      <AudioAmbience />

      {/* Main Single Page Mobile Invitation Scroll Container */}
      <main className="w-full max-w-[480px] min-h-screen bg-[#F4EEDF] hanji-bg shadow-[0_0_40px_rgba(0,0,0,0.45)] relative flex flex-col pb-16">
        {/* 01. Hero / 메인 커버 (제3회 정기연주회, 우리의 소리 오늘을 울리다, logo.png) */}
        <Hero onScrollToNotice={handleScrollToNotice} />

        {/* 02. 공연 안내 (일시 / 장소 / 문의 / 관람 안내 / logo.png) */}
        <PerformanceInfo />

        {/* 03. 모시는 글 (관장 윤여숭 드림 서명) */}
        <Invitation />

        {/* 04. 오늘의 울림 (01~05 정갈한 프로그램북) */}
        <Program />

        {/* 05. 무대를 만드는 사람들 (6장 갤러리 + 지도진) */}
        <Cast />

        {/* 06. 오시는 길 (공연장 정보 / 길찾기) */}
        <Location />

        {/* 07. Footer (우리의 소리 감성 멘트 + 2개 로고 무한 순환) */}
        <Footer />

        {/* Bottom Floating Action Ribbon on mobile */}
        <FloatingActions />
      </main>
    </div>
  );
}

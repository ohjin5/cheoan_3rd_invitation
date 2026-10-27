
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioAmbience: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 음악 재생
  const playMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // 브라우저가 자동재생을 차단한 경우
      setIsPlaying(false);
    }
  };

  // 음악 정지
  const pauseMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  // 음악 ON/OFF 버튼
  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      pauseMusic();
    } else {
      void playMusic();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    // 페이지 접속 시 자동재생 시도
    void playMusic();

    // 자동재생이 차단되면 첫 사용자 동작에서 다시 시도
    const handleFirstInteraction = () => {
      if (audio.paused) {
        void playMusic();
      }
    };

    document.addEventListener(
      'pointerdown',
      handleFirstInteraction,
      { once: true }
    );

    document.addEventListener(
      'keydown',
      handleFirstInteraction,
      { once: true }
    );

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      document.removeEventListener(
        'pointerdown',
        handleFirstInteraction
      );
      document.removeEventListener(
        'keydown',
        handleFirstInteraction
      );

      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);

      audio.pause();
    };
  }, []);

  return (
    <>
      {/* 실제 BGM 파일 */}
      <audio
        ref={audioRef}
        src="/audio/music.mp3"
        preload="auto"
        loop
        playsInline
      />

      {/* 우측 상단 음악 버튼 */}
      <button
        type="button"
        onClick={toggleSound}
        title={isPlaying ? '배경음악 끄기' : '배경음악 켜기'}
        aria-label={isPlaying ? '배경음악 끄기' : '배경음악 켜기'}
        aria-pressed={isPlaying}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-full border border-[#C59A38] bg-[#1D294B]/90 hover:bg-[#263458] text-[#E9D29A] shadow-md transition-all backdrop-blur-sm cursor-pointer"
      >
        {isPlaying ? (
          <div className="flex items-center gap-1.5">
            <Volume2 className="w-4 h-4 text-[#D4A73F] animate-pulse" />
            <span className="text-[10px] font-korean-serif text-[#FAF6ED] pr-1 hidden sm:inline">
              음악 재생 중
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <VolumeX className="w-4 h-4 text-[#E2D7BE]" />
            <span className="text-[10px] font-korean-serif text-[#FAF6ED] pr-1 hidden sm:inline">
              음악 켜기
            </span>
          </div>
        )}
      </button>
    </>
  );
};

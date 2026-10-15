import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Traditional Korean Pentatonic Ambience (궁·상·각·치·우)
 * Uses Web Audio API to synthesize gentle, serene bell/gayageum string resonance
 * Completely self-contained, works offline without external audio files.
 */
export const AudioAmbience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Korean Traditional Pentatonic Scale Frequencies (Jung-im, Im-jong, etc.)
  // Eb4, F4, Ab4, Bb4, C5 (Hwang, Tae, Jung, Im, Nam)
  const notes = [311.13, 349.23, 415.3, 466.16, 523.25, 622.25];

  const playPluck = (freq: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Harmonics for string/bell quality
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    // Envelope
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 2.8);
  };

  const toggleSound = () => {
    if (isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      } else if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setIsPlaying(true);
      // Play initial chime
      playPluck(notes[0]);
      setTimeout(() => playPluck(notes[2]), 600);
      setTimeout(() => playPluck(notes[4]), 1400);

      // Play ambient tranquil progression
      timerRef.current = window.setInterval(() => {
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        playPluck(randomNote);
      }, 3400);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggleSound}
      title={isPlaying ? '국악 풍경음 끄기' : '국악 풍경음 켜기'}
      aria-label={isPlaying ? '국악 풍경음 끄기' : '국악 풍경음 켜기'}
      className="fixed top-4 right-4 z-50 p-2.5 rounded-full border border-[#C59A38] bg-[#1D294B]/90 hover:bg-[#263458] text-[#E9D29A] shadow-md transition-all backdrop-blur-sm cursor-pointer"
    >
      {isPlaying ? (
        <div className="flex items-center gap-1.5">
          <Volume2 className="w-4 h-4 text-[#D4A73F] animate-pulse" />
          <span className="text-[10px] font-korean-serif text-[#FAF6ED] pr-1 hidden sm:inline">
            음향 재생 중
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <VolumeX className="w-4 h-4 text-[#E2D7BE]" />
          <span className="text-[10px] font-korean-serif text-[#FAF6ED] pr-1 hidden sm:inline">
            전통 음향
          </span>
        </div>
      )}
    </button>
  );
};

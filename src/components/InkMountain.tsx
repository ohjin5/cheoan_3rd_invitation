import React from 'react';

interface InkMountainProps {
  variant?: 'hero' | 'footer' | 'divider';
  className?: string;
  showSun?: boolean;
  showCranes?: boolean;
  showInkDots?: boolean;
}

export const InkMountain: React.FC<InkMountainProps> = ({
  variant = 'hero',
  className = '',
  showSun = true,
  showCranes = true,
  showInkDots = true,
}) => {
  if (variant === 'hero') {
    return (
      <div className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 430 460"
          className="w-full h-auto block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            {/* Sun: Warm glowing cinnabar terracotta watercolor circle */}
            <radialGradient id="heroSunGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DF5B3E" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#D95335" stopOpacity="0.9" />
              <stop offset="95%" stopColor="#E2745A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F4EEDF" stopOpacity="0" />
            </radialGradient>

            {/* Distant mountain layer: soft pale blue-gray ink wash */}
            <linearGradient id="distantMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6C7F99" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#879AB3" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#B3C1D1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F4EEDF" stopOpacity="0.8" />
            </linearGradient>

            {/* Midground mountain layer: Korean craggy ink peaks */}
            <linearGradient id="midMountainGrad" x1="30%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#3C4F6B" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#4E6280" stopOpacity="0.88" />
              <stop offset="65%" stopColor="#7588A3" stopOpacity="0.7" />
              <stop offset="90%" stopColor="#B0BDCE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F4EEDF" stopOpacity="0.1" />
            </linearGradient>

            {/* Foreground mountain: DEEP RICH NAVY matching poster exactly (#1D294B ~ #16203B) */}
            <linearGradient id="foreNavyMountainGrad" x1="10%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#1E2B4E" />
              <stop offset="30%" stopColor="#233157" />
              <stop offset="70%" stopColor="#1B2644" />
              <stop offset="100%" stopColor="#141C33" />
            </linearGradient>

            {/* Deeper navy sub-slope for 3D depth */}
            <linearGradient id="foreDeepNavyGrad" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#151E36" />
              <stop offset="100%" stopColor="#0E1424" />
            </linearGradient>
          </defs>

          {/* 1. Traditional Golden Cloud Motif in upper right */}
          <g opacity="0.45" transform="translate(285, 18)">
            <path
              d="M10 25 C 20 12, 38 10, 50 18 C 62 10, 85 10, 95 20 C 105 15, 120 18, 128 26"
              stroke="#C59A38"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M30 20 C 26 28, 38 32, 48 28"
              stroke="#C59A38"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M65 18 C 72 13, 82 14, 88 19"
              stroke="#C59A38"
              strokeWidth="0.9"
              fill="none"
            />
          </g>

          {/* 2. Vibrant Cinnabar/Red Sun (붉은 해) positioned behind distant peaks */}
          {showSun && (
            <g transform="translate(292, 105)">
              <circle
                cx="38"
                cy="38"
                r="34"
                fill="url(#heroSunGrad)"
                opacity="0.95"
              />
            </g>
          )}

          {/* 3. Golden Cranes in flight (금빛 두루미) */}
          {showCranes && (
            <g opacity="0.9">
              {/* Main upper crane */}
              <g transform="translate(262, 40) scale(0.68)">
                <path
                  d="M10 30 C 22 22, 35 15, 48 18 C 58 10, 72 5, 80 0 C 70 12, 60 22, 52 28 C 45 35, 36 40, 24 38 C 18 36, 12 33, 10 30 Z"
                  fill="#C59A38"
                />
                <path
                  d="M48 18 L 72 32 C 62 30, 55 27, 52 28 Z"
                  fill="#A87A18"
                />
                <path
                  d="M24 38 L 8 47 M 26 38 L 14 49"
                  stroke="#A87A18"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </g>
              {/* Second trailing crane */}
              <g transform="translate(296, 70) scale(0.50)">
                <path
                  d="M10 30 C 22 22, 35 15, 48 18 C 58 10, 72 5, 80 0 C 70 12, 60 22, 52 28 C 45 35, 36 40, 24 38 C 18 36, 12 33, 10 30 Z"
                  fill="#D4A73F"
                />
                <path
                  d="M48 18 L 70 30 C 60 28, 54 26, 52 28 Z"
                  fill="#A87A18"
                />
              </g>
            </g>
          )}

          {/* 4. Distant Layer 1: Far misty ridge */}
          <path
            d="M 120 360 
               C 160 290, 190 220, 220 180 
               C 235 160, 250 170, 265 195 
               C 285 230, 315 280, 345 320 
               C 375 350, 405 365, 430 370 
               L 430 460 L 120 460 Z"
            fill="url(#distantMountainGrad)"
          />

          {/* 4. Distant Layer 2: Craggy Korean mountain peak (수묵 산수화 본체) */}
          <path
            d="M 140 430 
               C 180 330, 205 245, 232 195 
               C 245 170, 258 165, 272 188 
               C 292 220, 312 265, 338 305 
               C 362 332, 385 342, 420 355 
               L 420 460 L 140 460 Z"
            fill="url(#midMountainGrad)"
            opacity="0.95"
          />

          {/* Detailed Korean Ink Brush Texture Strokes on the central crag */}
          <g stroke="#26364D" strokeWidth="1" opacity="0.45" strokeLinecap="round">
            <path d="M 233 192 Q 238 230, 244 270 Q 248 305, 254 340" />
            <path d="M 242 195 Q 252 240, 260 285 Q 266 315, 272 345" />
            <path d="M 255 190 Q 268 235, 278 280" />
            <path d="M 268 190 Q 282 240, 292 285" />
            <path d="M 224 215 Q 232 255, 238 295" />
          </g>

          {/* Distant ink birds (먹새) flock flying near peak */}
          <g fill="#1D294B" opacity="0.85">
            <path d="M 245 220 Q 249 217, 253 220 Q 257 217, 261 220 Q 257 222, 253 221 Q 249 222, 245 220 Z" />
            <path d="M 258 228 Q 262 225, 266 228 Q 270 225, 274 228 Q 270 230, 266 229 Q 262 230, 258 228 Z" />
            <path d="M 240 232 Q 243 230, 246 232 Q 249 230, 252 232 Q 249 234, 246 233 Q 243 234, 240 232 Z" />
            <path d="M 268 236 Q 271 234, 274 236 Q 277 234, 280 236 Q 277 238, 274 237 Q 271 238, 268 236 Z" />
          </g>

          {/* Soft mountain mist band between midground and foreground */}
          <path
            d="M 120 330 C 180 320, 240 340, 310 335 C 360 330, 400 345, 430 350 L 430 375 C 380 365, 300 370, 220 360 C 160 350, 120 365, 120 375 Z"
            fill="#F4EEDF"
            opacity="0.45"
          />

          {/* 5. FOREGROUND BOLD NAVY MOUNTAIN (#1D294B) */}
          {/* Sweeps boldly from left (y=230) downwards and covers the bottom */}
          <path
            d="M 0 235 
               C 40 225, 80 220, 120 235 
               C 155 248, 185 275, 215 300 
               C 245 325, 275 338, 310 335 
               C 345 332, 380 318, 410 324 
               C 420 326, 426 330, 430 335 
               L 430 460 L 0 460 Z"
            fill="url(#foreNavyMountainGrad)"
          />

          {/* Secondary deep navy ridge in foreground for rich painterly depth */}
          <path
            d="M 0 310 
               C 50 300, 100 322, 145 338 
               C 185 352, 230 365, 275 365 
               C 330 365, 385 345, 430 370 
               L 430 460 L 0 460 Z"
            fill="url(#foreDeepNavyGrad)"
            opacity="0.92"
          />

          {/* Delicate gold accent along the upper crest of the navy mountain */}
          <path
            d="M 0 235 C 40 225, 80 220, 120 235 C 155 248, 185 275, 215 300 C 245 325, 275 338, 310 335"
            stroke="#C59A38"
            strokeWidth="0.9"
            strokeOpacity="0.4"
            fill="none"
          />

          {/* 6. Organic Korean Ink Splatter / Droplets (먹 번짐, 먹 방울) on the right ridge */}
          {showInkDots && (
            <g fill="#1D294B">
              <circle cx="342" cy="342" r="5" opacity="0.95" />
              <circle cx="358" cy="330" r="3.5" opacity="0.9" />
              <circle cx="338" cy="358" r="2.5" opacity="0.85" />
              <circle cx="372" cy="334" r="2.8" opacity="0.9" />
              <circle cx="376" cy="348" r="4.2" opacity="0.95" />
              <circle cx="388" cy="338" r="2" opacity="0.85" />
              <circle cx="396" cy="345" r="3" opacity="0.9" />
              <circle cx="354" cy="364" r="1.8" opacity="0.8" />
              <circle cx="384" cy="358" r="3" opacity="0.9" />
              <circle cx="406" cy="352" r="2.2" opacity="0.85" />
              <circle cx="415" cy="360" r="2.8" opacity="0.9" />
            </g>
          )}
        </svg>
      </div>
    );
  }

  // Footer mountain variant
  return (
    <div className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 430 200"
        className="w-full h-auto block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="footerNavyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#222E4E" />
            <stop offset="60%" stopColor="#1A243F" />
            <stop offset="100%" stopColor="#131B30" />
          </linearGradient>
          <linearGradient id="footerMistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8392A5" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#F4EEDF" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="footerSun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DF5B3E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DF5B3E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Distant soft sun in footer */}
        {showSun && (
          <circle cx="340" cy="65" r="26" fill="url(#footerSun)" />
        )}

        {/* Small birds */}
        <g fill="#7A8FA8" opacity="0.85">
          <path d="M 310 50 Q 314 47, 318 50 Q 322 47, 326 50 Q 322 52, 318 51 Q 314 52, 310 50 Z" />
          <path d="M 324 58 Q 327 56, 330 58 Q 333 56, 336 58 Q 333 60, 330 59 Q 327 60, 324 58 Z" />
        </g>

        {/* Distant peaks in footer */}
        <path
          d="M 50 160 C 110 110, 160 85, 220 115 C 280 145, 340 90, 430 110 L 430 200 L 50 200 Z"
          fill="url(#footerMistGrad)"
        />

        {/* Foreground sweeping ridge */}
        <path
          d="M 0 105 
             C 60 90, 120 105, 180 125 
             C 240 145, 300 130, 360 115 
             C 390 108, 415 114, 430 120 
             L 430 200 L 0 200 Z"
          fill="url(#footerNavyGrad)"
        />

        {/* Ink drops */}
        {showInkDots && (
          <g fill="#1D294B" opacity="0.9">
            <circle cx="85" cy="115" r="2.8" />
            <circle cx="98" cy="110" r="2" />
            <circle cx="110" cy="122" r="3.2" />
            <circle cx="125" cy="118" r="2.2" />
          </g>
        )}
      </svg>
    </div>
  );
};

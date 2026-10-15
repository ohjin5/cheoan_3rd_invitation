import React from 'react';
import { TraditionalDivider } from './TraditionalDivider.tsx';

export const Invitation: React.FC = () => {
  return (
    <section className="relative px-6 sm:px-9 py-16 sm:py-20 bg-[#F5EFE1] hanji-bg border-b border-[#E2D7BE]/70">
      {/* Decorative vertical lines on sides */}
      <div className="absolute top-0 right-7 sm:right-9 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/30 via-[#C59A38]/20 to-transparent pointer-events-none hidden xs:block" />
      <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-gradient-to-b from-[#C59A38]/20 via-transparent to-transparent pointer-events-none" />

      {/* Traditional Small Cloud Header Motif */}
      <TraditionalDivider variant="cloud" className="my-0 mb-6" />

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="font-korean-serif text-2xl sm:text-3xl font-extrabold text-[#1D294B] tracking-tight">
          모시는 글
        </h2>
        <div className="mt-2.5 w-10 h-[2px] bg-[#C59A38] mx-auto" />
      </div>

      {/* Heartfelt 4-paragraph Invitation Text in Traditional Serif */}
      <div className="max-w-md mx-auto space-y-6 text-[#252A36] font-korean-batang text-[15px] sm:text-[16px] leading-[1.85] tracking-tight text-justify">
        <p>
          차가운 바람이 옷깃을 여미게 하고 하얀 입김 속에 겨울의 고요가 깊어가는 12월입니다. 
          이 차분하고 맑은 계절의 문턱에서, 우리 고유의 가락으로 마음에 훈훈한 온기를 전하고자 
          천안청소년국악관현악단의 세 번째 정기연주회에 귀한 발걸음을 청합니다.
        </p>

        <p>
          지나온 한 해 동안 우리 아이들은 낯설던 국악의 첫 배움에서 시작하여, 
          방과 후와 주말마다 한자리에 모여 서로의 숨소리와 장단에 귀를 기울여 왔습니다. 
          손끝이 굳어지는 연습의 시간 속에서도 포기하지 않고 땀방울을 흘리며, 
          음악을 통해 스스로 성장하고 함께하는 동료의 소중함을 깊이 체득하였습니다.
        </p>

        <p>
          명주실을 짚어내는 가야금과 거문고의 깊은 울림, 애잔하면서도 굳건한 해금과 아쟁의 찰현, 
          하늘을 날아오르듯 청아한 대금과 힘찬 피리의 숨결, 그리고 가슴을 울리며 흥을 돋우는 
          북과 장구의 역동적인 장단이 한데 어우러져 마침내 하나의 장엄하고 조화로운 관현악으로 피어납니다.
        </p>

        <p>
          이번 제3회 정기연주회는 단순한 실력의 발표를 넘어, 우리 전통문화의 아름다움을 온몸으로 이어받은 
          청소년 단원들의 순수한 열정과 따스한 꿈이 무대 위에 펼쳐지는 감동의 자리입니다. 
          부디 함께 자리하시어 무대를 향해 내딛는 청소년들의 힘찬 발걸음에 아낌없는 칭찬과 
          뜨거운 격려의 박수를 보내주시기 바랍니다.
        </p>
      </div>

      {/* Signature in traditional letter style (텍스트만 정갈하게, 낙관/도장 제거) */}
      <div className="mt-12 max-w-md mx-auto text-right space-y-1.5 pr-1">
        <p className="font-korean-serif text-xs sm:text-[13px] text-[#5A6375] tracking-tight">
          천안시청소년복합커뮤니티센터
        </p>
        <p className="font-korean-serif text-base sm:text-lg font-bold text-[#1D294B] tracking-tight">
          관장 윤여숭 드림
        </p>
      </div>

      <TraditionalDivider variant="gold-line" className="mt-12 mb-0" />
    </section>
  );
};

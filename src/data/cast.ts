import { CastSection } from '../types/index.ts';

export const CAST_NOTICE = {
  title: '무대를 만드는 사람들',
  subtitle: '천안청소년국악관현악단 단원 및 지도진',
  mainMessage: '한 해 동안 우리 음악의 아름다움을 배우고 서로의 소리에 귀 기울이며 무대를 준비한 청소년 단원들에게 따뜻한 박수를 부탁드립니다.',
  subMessage: '우리 아이들이 전통 예술의 향기를 품고 성장할 수 있도록 묵묵히 이끌어 주신 지도 선생님과, 아낌없는 지지를 보내주신 학부모님 및 관계자 여러분께 깊은 감사를 전합니다.',
};

export const INSTRUCTORS: CastSection[] = [
  {
    role: '예술감독 및 상임지휘',
    names: ['천안청소년국악관현악단 지휘진'],
  },
  {
    role: '지도강사',
    names: ['가야금', '거문고', '해금', '아쟁', '대금 · 소금', '피리 · 태평소', '타악'],
  },
];

export const INSTRUMENT_PARTS = [
  {
    instrument: '가야금',
    role: '맑고 영롱한 음색으로 조화로운 선율을 이끄는 현악 파트',
    iconType: 'gayageum',
  },
  {
    instrument: '해금 & 아쟁',
    role: '가장 깊고 절절한 울림으로 관현악의 풍성한 저음을 받치는 찰현악기',
    iconType: 'haegeum',
  },
  {
    instrument: '피리 & 대금',
    role: '청아한 바람의 숨결과 기품 있는 음량으로 곡의 주제를 노래하는 관악기',
    iconType: 'daegeum',
  },
  {
    instrument: '타악',
    role: '장구, 북, 꽹과리, 징으로 한국의 역동적인 숨결과 장단을 빚어내는 타악 파트',
    iconType: 'percussion',
  },
];

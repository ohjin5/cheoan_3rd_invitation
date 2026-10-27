import { EventData, SponsorLogo } from '../types/index.ts';

export const EVENT_DATA: EventData = {
  title: '제3회 천안청소년국악관현악단 정기연주회',
  subtitle: '천안청소년국악관현악단 제3회 정기연주회',
  edition: '제3회',
  slogan: '우리의 소리, 오늘을 울리다',

  organization: '2026년 천안시청소년복합커뮤니티센터',
  groupName: '천안청소년국악관현악단',

  dateDisplay: '2026.12.12 SAT',
  timeDisplay: '오후 5:00',
  dateFullKorean: '2026년 12월 12일 토요일 오후 5:00',

  venueName: '천안시청소년복합커뮤니티센터',
  venueHall: '대공연장',

  // 실제 공연장 주소
  venueAddress: '충청남도 천안시 서북구 불당19로 82',

  venueDetail: '천안시청소년복합커뮤니티센터 대공연장',

  contactDepartment: '교육사업팀',
  contactPhone: '041-557-0924',

  admissionFee: '전석 무료',
  admissionType: '사전 신청 또는 현장 입장',

  isoStartTime: '2026-12-12T17:00:00+09:00',
  isoEndTime: '2026-12-12T18:40:00+09:00',

  mapCoordinates: {
    lat: 36.8152,
    lng: 127.1135,
  },

  // 주소 기준으로 길찾기
  navigationLinks: {
    naverMap:
      'https://map.naver.com/p/search/충청남도%20천안시%20서북구%20불당19로%2082',
    kakaoMap:
      'https://map.kakao.com/?q=충청남도%20천안시%20서북구%20불당19로%2082',
    tmap:
      'https://surl.tmap.co.kr/search?q=충청남도%20천안시%20서북구%20불당19로%2082',
  },
};

export const SPONSOR_LOGOS: SponsorLogo[] = [
  {
    id: 'center',
    name: '천안시청소년재단',
    subName: '천안시청소년복합커뮤니티센터',
    imageFileName: 'logo.png',
    badgeType: 'center',
  },
  {
    id: 'office',
    name: '충청남도천안교육지원청',
    subName: 'CHUNGCHEONGNAMDO CHEONAN OFFICE OF EDUCATION',
    imageFileName: 'logo2.png',
    badgeType: 'office',
  },
];
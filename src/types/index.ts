export interface EventData {
  title: string;
  subtitle: string;
  edition: string;
  slogan: string;
  organization: string;
  groupName: string;
  dateDisplay: string;
  timeDisplay: string;
  dateFullKorean: string;
  venueName: string;
  venueHall: string;
  venueAddress: string;
  venueDetail: string;
  contactDepartment: string;
  contactPhone: string;
  admissionFee: string;
  admissionType: string;
  isoStartTime: string;
  isoEndTime: string;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  navigationLinks: {
    naverMap: string;
    kakaoMap: string;
    tmap: string;
  };
}

export interface ProgramItem {
  id: number;
  orderNumber: string; // e.g. "01"
  title: string;
  composer?: string;
  description: string;
  instruments?: string[];
  duration?: string;
}

export interface CastSection {
  role: string;
  names: string[];
}

export interface SponsorLogo {
  id: string;
  name: string;
  subName?: string;
  imageFileName: string;
  badgeType: 'center' | 'office' | 'school' | 'partner';
}

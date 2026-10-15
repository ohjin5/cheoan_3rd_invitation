/**
 * Utility functions for calendar integration and date formatting
 */

export interface CalendarEventParams {
  title: string;
  description: string;
  location: string;
  startTime: string; // ISO 8601 string, e.g. '2026-12-12T17:00:00+09:00'
  endTime: string;   // ISO 8601 string, e.g. '2026-12-12T18:40:00+09:00'
}

/**
 * Converts ISO 8601 to Google Calendar date format (UTC YYYYMMDDTHHmmssZ)
 */
export function formatToGoogleCalendarUtc(isoString: string): string {
  const date = new Date(isoString);
  const pad = (num: number) => String(num).padStart(2, '0');
  
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const hours = pad(date.getUTCHours());
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());
  
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

/**
 * Generates a Google Calendar link
 */
export function generateGoogleCalendarUrl(event: CalendarEventParams): string {
  const startUtc = formatToGoogleCalendarUtc(event.startTime);
  const endUtc = formatToGoogleCalendarUtc(event.endTime);
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startUtc}/${endUtc}`,
    details: event.description,
    location: event.location,
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates iCalendar (.ics) file string for Apple Calendar / Outlook / Mobile devices
 */
export function generateIcsContent(event: CalendarEventParams): string {
  const startUtc = formatToGoogleCalendarUtc(event.startTime);
  const endUtc = formatToGoogleCalendarUtc(event.endTime);
  const nowUtc = formatToGoogleCalendarUtc(new Date().toISOString());

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Cheonan Youth Traditional Korean Orchestra//Invitation//KO',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:concert-${Date.now()}@cheonan-youth.kr`,
    `DTSTAMP:${nowUtc}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `SUMMARY:${event.title.replace(/,/g, '\\,')}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location.replace(/,/g, '\\,')}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

/**
 * Formats Korean date string for display
 */
export function formatConcertKoreanDate(isoString: string): string {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = dayNames[date.getDay()];
  
  return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
}

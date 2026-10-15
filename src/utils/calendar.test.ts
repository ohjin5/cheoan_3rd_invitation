import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatToGoogleCalendarUtc,
  generateGoogleCalendarUrl,
  generateIcsContent,
  formatConcertKoreanDate,
} from './calendar.ts';

test('formatToGoogleCalendarUtc converts ISO string to standard UTC format', () => {
  const result = formatToGoogleCalendarUtc('2026-12-12T17:00:00+09:00');
  // 17:00 KST (+9) is 08:00 UTC
  assert.equal(result, '20261212T080000Z');
});

test('generateGoogleCalendarUrl produces valid Google Calendar URL parameters', () => {
  const event = {
    title: '제3회 천안청소년국악관현악단 정기연주회',
    description: '우리의 소리, 오늘을 울리다',
    location: '천안시청소년복합커뮤니티센터 대공연장',
    startTime: '2026-12-12T17:00:00+09:00',
    endTime: '2026-12-12T18:40:00+09:00',
  };
  const url = generateGoogleCalendarUrl(event);
  assert.ok(url.startsWith('https://calendar.google.com/calendar/render?'));
  assert.ok(url.includes('action=TEMPLATE'));
  assert.ok(url.includes('20261212T080000Z'));
  assert.ok(url.includes(encodeURIComponent('천안청소년국악관현악단')));
});

test('generateIcsContent contains proper VCALENDAR and VEVENT fields', () => {
  const event = {
    title: '제3회 천안청소년국악관현악단 정기연주회',
    description: '우리의 소리, 오늘을 울리다',
    location: '천안시청소년복합커뮤니티센터 대공연장',
    startTime: '2026-12-12T17:00:00+09:00',
    endTime: '2026-12-12T18:40:00+09:00',
  };
  const ics = generateIcsContent(event);
  assert.ok(ics.includes('BEGIN:VCALENDAR'));
  assert.ok(ics.includes('SUMMARY:제3회 천안청소년국악관현악단 정기연주회'));
  assert.ok(ics.includes('DTSTART:20261212T080000Z'));
  assert.ok(ics.includes('END:VCALENDAR'));
});

test('formatConcertKoreanDate formats date in Korean representation', () => {
  const result = formatConcertKoreanDate('2026-12-12T17:00:00+09:00');
  assert.ok(result.includes('2026년 12월 12일'));
  assert.ok(result.includes('토'));
});

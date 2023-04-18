import { formatBytes, formatDate } from '@/utils';

describe('formatBytes', () => {
  it('returns Bytes formatted to MegaBytes', () => {
    expect(formatBytes(0)).toBe('0.0 MB');
    expect(formatBytes(1000000)).toBe('1.0 MB');
  });
});

describe('formatDate', () => {
  it('returns date in Month Day, Year format', () => {
    expect(formatDate('2023-04-18T09:55:29.752Z')).toBe('April 18, 2023');
  });
});

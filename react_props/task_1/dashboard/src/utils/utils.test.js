import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// test getFullYear funct
test('getFullYear returns the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// test getFooterCopy func when true
test('getFooterCopy returns correct string when argument is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

// test getFooterCopy func when false
test('getFooterCopy returns correct string when argument is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton Skool');
});

// test getLatestNotification func
test('getLatestNotification returns correct string', () => {
  expect(getLatestNotification()).toBe('<strong>Important notification!</strong>');
});

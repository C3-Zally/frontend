import { findItemByName, findItemByAlpha2Code } from './index';

describe('Utility Find Methods', () => {
  const testArray = [
    { name: 'Afghanistan', alpha2Code: 'AF' },
    { id: 'Mexico', alpha2Code: 'MX' },
  ];

  it('should find object by name', () => {
    expect(findItemByName(testArray, 'Afghanistan')).toEqual({
      name: 'Afghanistan',
      alpha2Code: 'AF',
    });
  });

  it('should find object by code', () => {
    expect(findItemByAlpha2Code(testArray, 'MX')).toEqual({
      id: 'Mexico',
      alpha2Code: 'MX',
    });
  });

  it('should Be undefined because Case Sensitive', () => {
    expect(findItemByAlpha2Code(testArray, 'mx')).toBeUndefined();
    expect(findItemByName(testArray, 'afghanistan')).toBeUndefined();
  });
});

import { findItemByName, findItemByAlpha2Code, fiterByName} from './index';

describe('Utility Find Methods', () => {
  const testArray = [
    { name: 'Afghanistan', alpha2Code: 'AF' },
    { name: 'Mexico', alpha2Code: 'MX' },
  ];

  it('should find object by name', () => {
    expect(findItemByName(testArray, 'Afghanistan')).toEqual({
      name: 'Afghanistan',
      alpha2Code: 'AF',
    });
  });

  it('should find object by code', () => {
    expect(findItemByAlpha2Code(testArray, 'MX')).toEqual({
      name: 'Mexico',
      alpha2Code: 'MX',
    });
  });

  it('should Be undefined because Case Sensitive', () => {
    expect(findItemByAlpha2Code(testArray, 'mx')).toBeUndefined();
    expect(findItemByName(testArray, 'afghanistan')).toBeUndefined();
  });

  it('should return a array with MX item', () => {
    const correctAnswer = [{name: 'Mexico',alpha2Code: 'MX'}]
    expect(fiterByName(testArray, 'Mex')).toEqual(correctAnswer);
    expect(fiterByName(testArray, 'MEX')).toEqual(correctAnswer);
    expect(fiterByName(testArray, 'mex')).toEqual(correctAnswer);
    expect(fiterByName(testArray, 'Mexico')).toEqual(correctAnswer);
    expect(fiterByName(testArray, 'MEXICO')).toEqual(correctAnswer);
    expect(fiterByName(testArray, 'mexico')).toEqual(correctAnswer);
  });
});

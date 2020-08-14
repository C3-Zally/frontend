import { capitalizer } from './index';

describe('Utility String Methods Capitalizer', () => {
  it('should capitalize a world', () => {
    let str = 'hello';
    expect(capitalizer(str)).toBe('Hello');
  });

  it('should capitalize a sentence', () => {
    let str = 'hello world';
    expect(capitalizer(str)).toBe('Hello World');
  });
});

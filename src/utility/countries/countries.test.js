import Countries from './index';
import singleton from './index';

describe('Utility Countries', () => {
  it('should return Array with all countries', () => {
    const countries = Countries.getAll();
    expect(countries.length).toBe(250);
  });
  it('shoud be a Singleton', () => {
    expect(singleton === Countries).toBeTruthy();
  });
  it('should find country by code', () => {
    const countrie = Countries.getByAlphaCode('MX');
    expect(countrie.name).toBe('Mexico');
  });
  it('should find country by name', () => {
    const countrie = Countries.getByName('Mexico');
    expect(countrie.alpha2Code).toBe('MX');
  });
  it('if can not find country by name return undefined', () => {
    const countrie = Countries.getByName('mexico');
    const countrieCode = Countries.getByName('mx');

    expect(countrie).toBeUndefined();
    expect(countrieCode).toBeUndefined();
  });
  it('should return a array with MX item', () => {
    const countries = Countries.filterCountriesByName('MexI');
    expect(countries[0].name).toBe('Mexico');
  });
  it('should return a array with MX item with upercase', () => {
    const countries = Countries.filterCountriesByName('MEXI');
    expect(countries[0].name).toBe('Mexico');
  });
  it('should return a array with MX item with upercase', () => {
    const countries = Countries.filterCountriesByName('mexi');
    expect(countries[0].name).toBe('Mexico');
  });
});

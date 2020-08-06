import DATA from './countries.json';
import { findItemByName, findItemByAlpha2Code, fiterByName} from '../arrays';

class Countries {
  constructor() {
    if (!Countries.instance) {
      const stringified = JSON.stringify(DATA);
      this._data = JSON.parse(stringified);
      Countries.instance = this;
    }

    return Countries.instance;
  }
  getAll() {
    return this._data;
  }
  getByName(name) {
    return findItemByName(this._data, name);
  }
  getByAlphaCode(code) {
    return findItemByAlpha2Code(this._data, code);
  }
  filterCountriesByName(name){
    return  fiterByName(this._data, name);
  }
}

const CountriesInstance = new Countries();
Object.freeze(CountriesInstance);

export default CountriesInstance;

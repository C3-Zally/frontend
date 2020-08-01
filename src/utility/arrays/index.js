

/**
 * clouse to find elements(objects) on Array 
 *   create new find
 *   export const <Funciton_Name> = findItemBy(<Atribute Name>)
 *  example : export const finByNl = findItemBy('nl')
 * @param {string} param (object atribute)
 * @param {Array} array ([{id: 13, nl: "fa"}, {id: 14, nl: "aa"}])
 * @param {string/int} value (value to compare with elements)
 * Use :
 *  finByNl([{id: 13, nl: "fa"}, {id: 14, nl: "aa"}], 'aa')
 * @returns {Object / undefined}
 */
const findItemBy = (param) => (array, value) => array.find((elment) => elment[param] === value);

export const findItemByName = findItemBy('name');
export const findItemByAlpha2Code = findItemBy('alpha2Code');

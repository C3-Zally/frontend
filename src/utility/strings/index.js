/**
 * capitalize fuction
 *  @param {string} sentence the quick green alligator...
 *  @returns {string} The Quick Green Alligator...
 */

export const capitalizer = (sentence) => {
  return sentence.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
};

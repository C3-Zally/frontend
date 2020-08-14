const numberConverter = (number) => {
  const numberToString = number.toString();
  const stringLength = numberToString.length;
  if (stringLength === 4) {
    return `${numberToString.substring(0, 1)}.${numberToString.substring(
      1,
      stringLength
    )}`;
  } else if (stringLength > 4 && stringLength <= 6) {
    return `${numberToString.substring(0, stringLength - 3)}K`;
  } else if (stringLength > 6) {
    return `${numberToString.substring(
      0,
      stringLength - 6
    )}.${numberToString.substring(stringLength - 6, stringLength - 3)}K`;
  }
  return numberToString;
};

export default numberConverter;

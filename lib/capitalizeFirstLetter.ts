/*
  This functions fills gap from React Native not having build in style prop for that.
*/
const capitalizeFistLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalizeFistLetter;

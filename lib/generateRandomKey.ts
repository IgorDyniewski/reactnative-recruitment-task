/*
  This function is for generating unique keys for arrays.
*/
import * as Random from 'expo-random';

const generateRandomKey = (): string => {
  return `${Random.getRandomBytes(5)}`;
};

export default generateRandomKey;

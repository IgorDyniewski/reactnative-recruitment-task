/*
  This file is used to get HEX value from color name ( from palette ). We have to use it now because there is a problem w TS
  and Tailwind integration.
*/
import type { Color } from 'react-native-svg';

// Lib
import { colors } from '../config/theme';
import type { ColorNameFromPalletteType } from '../types/ColorNameFromPalletteType';

const getHexColorFromName = (colorName: ColorNameFromPalletteType): Color =>
  colors[colorName];

export default getHexColorFromName;

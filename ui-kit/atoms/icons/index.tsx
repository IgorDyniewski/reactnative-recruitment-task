// Icons
import VerifiedIcon from './src/Verified';
import HeartIcon from './src/Heart';
import StarIcon from './src/Star';
import MapIcon from './src/Map';
import MoneyIcon from './src/Money';
import CalendarIcon from './src/Calendar';
import type { ColorNameFromPalletteType } from '../../../types/colorNameFromPalletteType';

// Interface shared between all icons
export interface IconInterface {
  size?: 8 | 13 | 16 | 18 | 20;
  color: ColorNameFromPalletteType;
}

// eslint-disable-next-line import/prefer-default-export
export { VerifiedIcon, HeartIcon, StarIcon, MapIcon, MoneyIcon, CalendarIcon };

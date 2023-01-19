import Svg, { Path } from 'react-native-svg';
import { IconInterface } from '..';

// Lib
import getHexColorFromName from '../../../../lib/getHexColorFromName';

const StarIcon: React.FC<IconInterface> = ({ color, size = 16 }) => {
  const colorHex = getHexColorFromName(color);

  return (
    <Svg width={size} height={size} viewBox="0 0 18 17" fill="none">
      <Path
        d="M16.65 6.04L11.81 5.62L9.92001 1.17C9.58001 0.36 8.42001 0.36 8.08001 1.17L6.19001 5.63L1.36001 6.04C0.480012 6.11 0.120012 7.21 0.790012 7.79L4.46001 10.97L3.36001 15.69C3.16001 16.55 4.09001 17.23 4.85001 16.77L9.00001 14.27L13.15 16.78C13.91 17.24 14.84 16.56 14.64 15.7L13.54 10.97L17.21 7.79C17.88 7.21 17.53 6.11 16.65 6.04Z"
        fill={colorHex}
      />
    </Svg>
  );
};

export default StarIcon;

import Svg, { Path } from 'react-native-svg';
import { IconInterface } from '..';

// Lib
import getHexColorFromName from '../../../../lib/getHexColorFromName';

const MapIcon: React.FC<IconInterface> = ({ color, size = 16 }) => {
  const colorHex = getHexColorFromName(color);

  return (
    <Svg width={size} height={size} viewBox="0 0 12 17" fill="none">
      <Path
        d="M5.99996 0.666668C2.77496 0.666668 0.166626 3.275 0.166626 6.5C0.166626 9.975 3.84996 14.7667 5.36663 16.5917C5.69996 16.9917 6.30829 16.9917 6.64163 16.5917C8.14996 14.7667 11.8333 9.975 11.8333 6.5C11.8333 3.275 9.22496 0.666668 5.99996 0.666668ZM5.99996 8.58333C4.84996 8.58333 3.91663 7.65 3.91663 6.5C3.91663 5.35 4.84996 4.41667 5.99996 4.41667C7.14996 4.41667 8.08329 5.35 8.08329 6.5C8.08329 7.65 7.14996 8.58333 5.99996 8.58333Z"
        fill={colorHex}
      />
    </Svg>
  );
};

export default MapIcon;

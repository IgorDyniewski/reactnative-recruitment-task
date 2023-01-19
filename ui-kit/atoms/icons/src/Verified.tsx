import Svg, { Path } from 'react-native-svg';
import { IconInterface } from '..';

// Lib
import getHexColorFromName from '../../../../lib/getHexColorFromName';

const VerifiedIcon: React.FC<IconInterface> = ({ color, size = 8 }) => {
  const colorHex = getHexColorFromName(color);
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M6.99998 13.6667C10.6819 13.6667 13.6666 10.6819 13.6666 7C13.6666 3.3181 10.6819 0.333328 6.99998 0.333328C3.31808 0.333328 0.333313 3.3181 0.333313 7C0.333313 10.6819 3.31808 13.6667 6.99998 13.6667ZM11.0202 4.68688L5.68687 10.0202C5.4916 10.2155 5.17502 10.2155 4.97976 10.0202L2.97976 8.02022C2.7845 7.82495 2.7845 7.50837 2.97976 7.31311C3.17502 7.11785 3.4916 7.11785 3.68687 7.31311L5.33331 8.95955L10.3131 3.97977C10.5084 3.78451 10.8249 3.78451 11.0202 3.97977C11.2155 4.17504 11.2155 4.49162 11.0202 4.68688Z"
        fill={colorHex}
      />
    </Svg>
  );
};

export default VerifiedIcon;

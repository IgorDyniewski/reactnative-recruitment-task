/*
  Component for displaying avatars. When loading it will show graphics of generic person.
*/
import { Pressable } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { useTailwind } from 'tailwind-rn';

// Types
import type {
  ImageSourcePropType,
  ImageResizeMode,
  GestureResponderEvent,
} from 'react-native';

// Lib
import defaultImage from './avatar-default.jpg';

// Styled components
interface CustomImageBgStyledComponentInterface {
  sizeNumber: number;
}
const CustomImageBg = styled.ImageBackground<CustomImageBgStyledComponentInterface>`
  height: ${props => props.sizeNumber}px;
  width: ${props => props.sizeNumber}px;
`;

interface AvatarInterface {
  source?: ImageSourcePropType;
  size?: 'sm' | 'md' | 'lg';
  resizeMode?: ImageResizeMode;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}

const Avatar: React.FC<AvatarInterface> = ({
  source = undefined,
  size = 'md',
  resizeMode = 'cover',
  onPress = null,
}) => {
  const tailwind = useTailwind();
  const theme = useTheme();

  // Setting size of a badge
  const sizeNumber: number = theme.avatarSizes[size];

  return (
    <Pressable onPress={onPress}>
      <CustomImageBg
        source={source || defaultImage}
        style={tailwind(
          'overflow-hidden rounded-full border border-custom-gray-1',
        )}
        sizeNumber={sizeNumber}
        resizeMode={resizeMode}
        defaultSource={defaultImage}
      />
    </Pressable>
  );
};

export default Avatar;

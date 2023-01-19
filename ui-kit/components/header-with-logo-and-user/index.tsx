/*
  Generic Docplanner header with user profile
*/

import { useTailwind } from 'tailwind-rn';
import i18n from 'i18n-js';

// Types
import type { GestureResponderEvent } from 'react-native';

// Atoms
import Avatar from '../../atoms/avatar';
import WrapperContainer from '../../atoms/wrapperContainer';

interface HeaderWithLogoAndUserInterface {
  onProfilePress: null | ((event: GestureResponderEvent) => void) | undefined;
}
const HeaderWithLogoAndUser: React.FC<HeaderWithLogoAndUserInterface> = ({
  onProfilePress,
}) => {
  const tailwind = useTailwind();

  return (
    <WrapperContainer
      style={tailwind('pt-3 flex-row items-center justify-end')}
    >
      <Avatar
        onPress={onProfilePress}
        source={{
          uri: i18n.t('homeScreen.profilePicture'),
        }}
        size="sm"
      />
    </WrapperContainer>
  );
};

HeaderWithLogoAndUser.defaultProps = {};

export default HeaderWithLogoAndUser;

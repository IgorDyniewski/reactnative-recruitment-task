/*
  This content page will be displayed in the modal. Treat it more like a text document
*/
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import i18n from 'i18n-js';

// Atoms
import WrapperContainer from '../ui-kit/atoms/wrapperContainer';
import { H1, H2, H3, H4, H5, H6 } from '../ui-kit/atoms/typography';
import {
  RobotoBold,
  RobotoMedium,
  RobotoRegular,
} from '../ui-kit/atoms/typography/roboto';
import Avatar from '../ui-kit/atoms/avatar';
import Badge from '../ui-kit/atoms/badge';
import { CalendarIcon } from '../ui-kit/atoms/icons';

const ComponentsPage: React.FC = () => {
  const tailwind = useTailwind();
  const { bottom } = useSafeAreaInsets();
  return (
    <WrapperContainer style={tailwind('w-full')}>
      <View style={tailwind('py-3')}>
        <H2 style={tailwind('text-secondary')}>{i18n.t('atoms.title')}</H2>
        <H4>{i18n.t('atoms.subTitle')}</H4>
      </View>

      <View style={tailwind('py-2 border-t border-custom-gray-1')}>
        <H5>Avatar</H5>
        <View style={tailwind('flex-row items-center py-2')}>
          <View style={tailwind('mx-1')}>
            <Avatar size="lg" />
          </View>
          <View style={tailwind('mx-1')}>
            <Avatar size="md" />
          </View>
          <View style={tailwind('mx-1')}>
            <Avatar size="sm" />
          </View>
        </View>
      </View>

      <View style={tailwind('py-2 border-t border-custom-gray-1')}>
        <H5>Badges</H5>
        <View style={tailwind('flex-row py-2')}>
          <View style={tailwind('mx-1')}>
            <Badge size="sm">Hello</Badge>
          </View>
          <View style={tailwind('mx-1')}>
            <Badge size="md">Hello</Badge>
          </View>
          <View style={tailwind('mx-1')}>
            <Badge size="xl">Hello</Badge>
          </View>
        </View>
        <View style={tailwind('flex-row py-2')}>
          <View style={tailwind('mx-1')}>
            <Badge variant="secondary" size="sm">
              Hello
            </Badge>
          </View>
          <View style={tailwind('mx-1')}>
            <Badge variant="secondary" size="md">
              Hello
            </Badge>
          </View>
          <View style={tailwind('mx-1')}>
            <Badge variant="secondary" size="xl">
              Hello
            </Badge>
          </View>
        </View>
      </View>

      <View style={tailwind('py-2 border-t border-custom-gray-1')}>
        <H5>Icons</H5>
        <View style={tailwind('flex-row py-2')}>
          <View style={tailwind('mx-1')}>
            <CalendarIcon color="primary" size={8} />
          </View>
          <View style={tailwind('mx-1')}>
            <CalendarIcon color="secondary" size={13} />
          </View>
          <View style={tailwind('mx-1')}>
            <CalendarIcon color="black" size={16} />
          </View>
          <View style={tailwind('mx-1')}>
            <CalendarIcon color="gray-900" size={18} />
          </View>
          <View style={tailwind('mx-1')}>
            <CalendarIcon color="primary-dark" size={20} />
          </View>
        </View>
      </View>

      <View style={tailwind('py-2 border-t border-b border-custom-gray-1')}>
        <H5>Typography</H5>
        <View style={tailwind('flex-col py-2')}>
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <H6>Heading 6</H6>
          <RobotoBold>Roboto Bold</RobotoBold>
          <RobotoMedium>Roboto Medium</RobotoMedium>
          <RobotoRegular>RobotoRegular</RobotoRegular>
        </View>
      </View>

      <View style={{ ...tailwind('py-3'), paddingBottom: bottom }}>
        <H3 style={tailwind('text-secondary text-center')}>
          {i18n.t('goodbyeMsg.title')}
        </H3>
        <H5 style={tailwind('text-center')}>{i18n.t('goodbyeMsg.subTitle')}</H5>
      </View>
    </WrapperContainer>
  );
};

export default ComponentsPage;

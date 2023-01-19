/*
  This component represents one tab pill from <TabSwitcher>
*/
import { useState, useEffect } from 'react';
import { TouchableOpacity, View, Animated } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import styled, { useTheme } from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';

// Types
import type { ActiveTabStateInterface } from '../../../redux/activeTab/index';

// Redux
import { setActiveTab } from '../../../redux/activeTab/actions';

const BottomIndicator = styled(Animated.View)`
  height: ${props => props.theme.tabIndicatorHeight.open}px;
  background-color: ${props => props.theme.colors['gray-900']};
`;

interface TabInterface {
  text: string;
  index: number;
}
const Tab: React.FC<TabInterface> = ({ index, text }) => {
  const tailwind = useTailwind();
  const dispatch = useDispatch();
  const { tabIndicatorDefaultAnimationProps, colors } = useTheme();

  // Animated states
  const [animatedValue] = useState(new Animated.Value(0));
  const textColor = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [colors['gray-600'], colors['gray-900']],
  });
  const widthPercentage = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  // Other states
  const [stickToRight, setStickToRight] = useState(false);

  // Redux states
  const activeTab = useSelector(
    (state: ActiveTabStateInterface) => state.activeTab,
  );

  // Functions for thee indicator
  const open = (): void => {
    Animated.timing(animatedValue, {
      toValue: 100,
      ...tabIndicatorDefaultAnimationProps,
    }).start();
  };
  const close = (): void => {
    Animated.timing(animatedValue, {
      toValue: 0,
      ...tabIndicatorDefaultAnimationProps,
    }).start();
  };
  const openFromLeft = (): void => {
    setStickToRight(false);
    open();
  };
  const openFromRight = (): void => {
    setStickToRight(true);
    open();
  };
  const closeToRight = (): void => {
    setStickToRight(true);
    close();
  };
  const closeToLeft = (): void => {
    setStickToRight(false);
    close();
  };

  // Watching state change
  useEffect((): void => {
    const { current, previous } = activeTab;
    if (index === current) {
      if (previous < index) {
        openFromLeft();
      } else {
        openFromRight();
      }
    } else if (index === previous) {
      if (current > previous) {
        closeToRight();
      } else {
        closeToLeft();
      }
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [activeTab, index]);

  // Handling click
  const onPress = () => {
    dispatch(
      setActiveTab({
        current: index,
        previous: activeTab.current,
      }),
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={tailwind('py-3 px-2')}>
        <Animated.Text
          style={{ ...tailwind('font-roboto-regular'), color: textColor }}
        >
          {text}
        </Animated.Text>
      </TouchableOpacity>
      <BottomIndicator
        style={{
          ...tailwind('w-full'),
          width: widthPercentage,
          marginLeft: stickToRight ? 'auto' : undefined,
        }}
      />
    </View>
  );
};

export default Tab;

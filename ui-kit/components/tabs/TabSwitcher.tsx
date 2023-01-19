/*
  This component is used for switching tabs in doctor profiles.
*/
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

// Components
import Tab from './Tab';

// Lib
import generateRandomKey from '../../../lib/generateRandomKey';

interface SoloTabInterface {
  text: string;
}
interface TabSwitcherInterface {
  tabs: Array<SoloTabInterface>;
}

const TabSwitcher: React.FC<TabSwitcherInterface> = ({ tabs }) => {
  const tailwind = useTailwind();

  // Populating tabs
  const Tabs: Array<React.ReactElement> = [];
  tabs.forEach(({ text }, i): void => {
    Tabs.push(<Tab key={`tab-${generateRandomKey()}`} text={text} index={i} />);
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tailwind('flex-row border-b border-gray-300')}
    >
      <View style={tailwind('px-3 flex-row')}>{Tabs}</View>
    </ScrollView>
  );
};

export default TabSwitcher;

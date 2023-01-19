/*
  This component if meant to be used with other tab components.
  It displays multiple tabs in nice "swipable" form.
*/
import React, { useEffect, useRef, ReactElement } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { useTailwind } from 'tailwind-rn/dist';
import { useSelector, useDispatch } from 'react-redux';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { setActiveTab } from '../../../redux/activeTab/actions';

// Types
import type { ActiveTabStateInterface } from '../../../redux/activeTab/index';

// Lib
import generateRandomKey from '../../../lib/generateRandomKey';

interface TabStyledComponentInterface {
  width: number;
}
const Tab = styled.View<TabStyledComponentInterface>`
  width: ${props => props.width}px;
`;

interface TabContentInterface {
  tabsContent: Array<React.ReactElement>;
}

const TabContent: React.FC<TabContentInterface> = ({ tabsContent }) => {
  const tailwind = useTailwind();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  // Redux states
  const activeTab = useSelector(
    (state: ActiveTabStateInterface) => state.activeTab.current,
  );

  // Refs
  const scrollViewRef = useRef<ScrollView>(null);

  // Function for controlling what tab is active
  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ): void => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = event;
    const newActiveTab: number = Math.round(x / width);
    dispatch(
      setActiveTab({
        current: newActiveTab,
        previous: activeTab,
      }),
    );
  };

  // Watching for changes on 'activeTab'
  useEffect(() => {
    scrollViewRef.current?.scrollTo({ x: activeTab * width });
  }, [activeTab, width]);

  // Parsing tabs
  const AllTabs: Array<ReactElement> = [];
  tabsContent.forEach(tabContent => {
    AllTabs.push(
      <Tab key={`tab-content-${generateRandomKey()}`} width={width}>
        {tabContent}
      </Tab>,
    );
  });

  return (
    <ScrollView
      ref={scrollViewRef}
      snapToInterval={width}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      horizontal
      onMomentumScrollEnd={onMomentumScrollEnd}
      style={tailwind('w-full')}
      bounces={false}
    >
      {AllTabs}
    </ScrollView>
  );
};

export default TabContent;

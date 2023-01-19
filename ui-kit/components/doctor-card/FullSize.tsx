/*
  This component is for displaying doctor info in for of a card.
*/
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { View } from 'react-native';
import i18n from 'i18n-js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../redux/activeTab/reducers';

// Types
import type { DoctorBasicInfoInterface } from '../../../types/doctor';

// Atoms
import WrapperContainer from '../../atoms/wrapperContainer';

// Components
import DoctorCardSmall from './Small';
import TabSwitcher from '../tabs/TabSwitcher';
import TabContent from '../tabs/TabContent';
import AddressCard from './AddressCard';

const DoctorCard: React.FC<DoctorBasicInfoInterface> = props => {
  const tailwind = useTailwind();

  // Setting up redux
  const store = createStore(rootReducer);

  // Parsing tabs for tab switcher
  const { addresses } = props;
  const tabSwitcherTabs: Array<{ text: string }> = addresses.map((a, i) => ({
    text: `${i18n.t('address')} ${i + 1}`,
  }));

  // Parsing tabs for tab content
  const tabContentsArray: Array<React.ReactElement> = [];
  addresses.forEach(address => {
    /* We are safe to do this. TS :) */
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    tabContentsArray.push(<AddressCard {...address} />);
  });

  return (
    <View style={tailwind('bg-white pt-2')}>
      <Provider store={store}>
        <WrapperContainer>
          {/* We are safe to do this. TS :) */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <DoctorCardSmall {...props} />
        </WrapperContainer>

        {/* Showing tabs only when there are multiple locations */}
        {tabSwitcherTabs.length > 1 && (
          <View style={tailwind('mb-2')}>
            <TabSwitcher tabs={tabSwitcherTabs} />
          </View>
        )}
        <TabContent tabsContent={tabContentsArray} />
      </Provider>
    </View>
  );
};

export default DoctorCard;

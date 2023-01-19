/*
  This file represents source of 'Home Page' in out app.
*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTailwind } from 'tailwind-rn';
import i18n from 'i18n-js';

// Types
import type { ScrollViewProps } from 'react-native';
import type { DoctorBasicInfoInterface } from '../types/doctor';

// Atoms
import WrapperContainer from '../ui-kit/atoms/wrapperContainer';
import { H2 } from '../ui-kit/atoms/typography';
import { WorkSansRegular } from '../ui-kit/atoms/typography/work-sans';

// Components
import Header from '../ui-kit/components/header-with-logo-and-user';
import DoctorsCardListing from '../ui-kit/components/doctor-card/DoctorsCardListing';
import Loader from '../ui-kit/atoms/loader';
import StatusBar from '../ui-kit/components/status-bar';
import ModalMain from '../ui-kit/components/modal';

// Lib
import getDoctors from '../data/getDoctors';
import ComponentsPage from '../lib/ComponentsPage';

// Styled components
const MainScreenWrapper = styled.ScrollView<ScrollViewProps>`
  z-index: ${props => props.theme.homeScrollViewZIndex};
`;

interface HomeScreenInterface extends React.FC {
  navigationOptions?: object;
}
const HomeScreen: HomeScreenInterface = () => {
  // Hooks
  const insets = useSafeAreaInsets();
  const tailwind = useTailwind();

  // States
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctors, setDoctors] = useState<Array<DoctorBasicInfoInterface>>([]);

  // Function for updating doctors listing
  const updateDoctors = async (): Promise<void> => {
    setIsLoading(true);
    const doctorsFetched: Array<DoctorBasicInfoInterface> = await getDoctors();
    setIsLoading(false);
    setDoctors(doctorsFetched);
  };

  // Function for handling profile press
  const onProfilePress = (): void => {
    setIsModalOpen(true);
  };
  const onModalClose = (): void => {
    setIsModalOpen(false);
  };

  // Updating doctors listing on mount
  useEffect((): void => {
    updateDoctors();
  }, []);

  return (
    <View style={tailwind('flex-1')}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ModalMain isOpen={isModalOpen} onClose={onModalClose}>
        <ComponentsPage />
      </ModalMain>
      <MainScreenWrapper
        contentContainerStyle={{
          paddingTop: insets.top,
        }}
        style={tailwind('absolute bg-white w-full h-full flex-1')}
      >
        <Header onProfilePress={onProfilePress} />

        {/* Welcome title */}
        <WrapperContainer style={tailwind('pt-4')}>
          <H2>
            {`${i18n.t('homeScreen.title1')} `}
            <H2 style={tailwind('text-secondary')}>
              {i18n.t('homeScreen.title2')}
            </H2>
          </H2>
          <WorkSansRegular style={tailwind('text-base text-gray-900')}>
            {i18n.t('homeScreen.subtitle')}
          </WorkSansRegular>
        </WrapperContainer>

        {/* Doctors listing */}
        <View style={tailwind('mt-5 items-center content-center')}>
          {isLoading ? (
            <Loader />
          ) : (
            <DoctorsCardListing doctorsArray={doctors} />
          )}
        </View>
      </MainScreenWrapper>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: { visible: false },
};

export default HomeScreen;

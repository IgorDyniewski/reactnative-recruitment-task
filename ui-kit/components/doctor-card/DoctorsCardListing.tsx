/*
  In his file we will handle parsing doctors listing
*/

import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Types
import type { DoctorBasicInfoInterface } from '../../../types/doctor';

// Components
import DoctorCardFullSize from './FullSize';

// Styled components
const DoctorCardWrapper = styled.View`
  shadow-opacity: 0.01;
  shadow-radius: 2px;
  shadow-color: ${props => props.theme.colors['gray-900']};
  shadow-offset: 0px 10px;
  elevation: 1;
`;
interface WrapperInterface {
  paddingBottom: number;
}
const Wrapper = styled.View<WrapperInterface>`
  padding-bottom: ${props => props.paddingBottom}px;
`;

interface doctorsCardListing {
  doctorsArray: Array<DoctorBasicInfoInterface>;
}
const DoctorsCardListing: React.FC<doctorsCardListing> = ({ doctorsArray }) => {
  const tailwind = useTailwind();
  const { bottom } = useSafeAreaInsets();

  // Parsing all doctor cards
  const DoctorsComponents: Array<React.ReactNode> = [];
  doctorsArray.forEach(doctorObject => {
    const { id } = doctorObject;

    DoctorsComponents.push(
      <DoctorCardWrapper key={id} style={tailwind('mb-2')}>
        {/* It's safe, we have TS on board */}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DoctorCardFullSize {...doctorObject} />
      </DoctorCardWrapper>,
    );
  });

  return (
    <Wrapper
      paddingBottom={bottom}
      style={tailwind('w-full bg-custom-gray-2 border-t border-custom-gray-1')}
    >
      {DoctorsComponents}
    </Wrapper>
  );
};

export default DoctorsCardListing;

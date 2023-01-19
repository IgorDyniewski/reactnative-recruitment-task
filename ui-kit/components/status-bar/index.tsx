/*
  This component creates nice transparent status bard.
*/
import { StatusBar as RNStatusBar } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

// Types
import type { StatusBarProps } from 'react-native';

// Styled components
interface WrapperStyledComponentInterface {
  height: number;
}
const Wrapper = styled.View<WrapperStyledComponentInterface>`
  height: ${props => props.height}px;
  z-index: ${props => props.theme.homeStatusBarZIndex};
  background-color: ${props => props.theme.homeStatusBarColor};
  opacity: ${props => props.theme.homeStatusBarOpacity};
`;

const StatusBar: React.FC<StatusBarProps> = props => {
  const tailwind = useTailwind();
  const { top } = useSafeAreaInsets();
  return (
    <Wrapper height={top} style={tailwind('absolute w-full w-full')}>
      {/* TC on board, It's safe :) */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <RNStatusBar {...props} />
    </Wrapper>
  );
};

export default StatusBar;

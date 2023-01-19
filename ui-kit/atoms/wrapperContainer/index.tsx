/*
  This component is for making sure that every component has the same side paddings with 
  save area in mind.
*/
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Styled components
interface MainWrapperStyledComponentInterface {
  left: number;
  right: number;
}
const Main = styled.View<MainWrapperStyledComponentInterface>`
  padding-left: ${props => props.theme.defaultSideSpacing + props.left}px;
  padding-right: ${props => props.theme.defaultSideSpacing + props.right}px;
`;

declare type Style = Record<string, unknown>;
interface WrapperContainerInterface {
  children?: React.ReactNode;
  style?: Style;
}

const WrapperContainer: React.FC<WrapperContainerInterface> = ({
  children = null,
  style = null,
}) => {
  const { left, right } = useSafeAreaInsets();

  return (
    <Main left={left} right={right} style={style}>
      {children}
    </Main>
  );
};

export default WrapperContainer;

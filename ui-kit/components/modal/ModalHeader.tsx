/*
  Header for modal
*/
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import styled from 'styled-components/native';

// Types
import type { GestureResponderHandlers } from 'react-native';

// Atoms
import { WorkSansSemiBold } from '../../atoms/typography/work-sans';

// Styled components
const Pill = styled.View`
  width: ${props => props.theme.modalPillSize.width}px;
  height: ${props => props.theme.modalPillSize.height}px;
`;

interface ModalHeaderInterface {
  title: string;
  panHandlers: GestureResponderHandlers;
}
const ModalHeader: React.FC<ModalHeaderInterface> = ({
  title,
  panHandlers,
}) => {
  const tailwind = useTailwind();
  return (
    /* We are safe, TC :) */
    /* eslint-disable-next-line */
    <View {...panHandlers}>
      <View style={tailwind('w-full pt-2 flex-row justify-center')}>
        <Pill style={tailwind('bg-gray-300 rounded-full')} />
      </View>
      <View
        style={tailwind(
          'w-full py-3 border-b border-custom-gray-1 flex-col content-center',
        )}
      >
        <WorkSansSemiBold style={tailwind('text-center text-base')}>
          {title}
        </WorkSansSemiBold>
      </View>
    </View>
  );
};

export default ModalHeader;

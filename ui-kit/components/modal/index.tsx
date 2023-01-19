/*
  This component is the main part of our modal
*/
import React, { useEffect, useState } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { useTheme } from 'styled-components/native';
import i18n from 'i18n-js';

// Components
import ModalHeader from './ModalHeader';

interface ModalMain {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
}
const ModalMain: React.FC<ModalMain> = ({ isOpen, onClose, children }) => {
  const windowHeight: number = useWindowDimensions().height;
  const tailwind = useTailwind();
  const {
    defaultAnimationForBg,
    defaultAnimationForModal,
    closeModalThreshold,
  } = useTheme();

  // Modal hidden Y
  const modalHiddenY: number = windowHeight;

  // States
  const [pan] = useState(new Animated.ValueXY({ x: 0, y: windowHeight }));
  const [opacity] = useState(new Animated.Value(0));

  // UI functions for opening and closing modal
  const openModal = (): void => {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      ...defaultAnimationForModal,
    }).start();
    Animated.timing(opacity, {
      toValue: 0.8,
      ...defaultAnimationForBg,
    }).start();
  };

  const closeModal = (): void => {
    Animated.spring(pan, {
      toValue: { x: 0, y: modalHiddenY },
      ...defaultAnimationForModal,
    }).start();
    Animated.timing(opacity, {
      toValue: 0,
      ...defaultAnimationForBg,
    }).start();

    setTimeout((): void => onClose(), defaultAnimationForBg.duration);
  };

  // Watching for modal to open
  useEffect((): void => {
    if (isOpen) {
      openModal();
    }
    // It's safe, we don't expect openModal() to change and I will prevent re-renders
    // eslint-disable-next-line
  }, [isOpen]);

  // Creating pan responder ref
  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,
      onPanResponderTerminate: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: () => {
        // @ts-expect-error It's known issue in Animated API
        pan.setOffset({ x: 0, y: pan.y._value }); // eslint-disable-line no-underscore-dangle
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (evt, { dy }) => {
        if (dy >= 0) {
          pan.setValue({ x: 0, y: dy });
        }
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
        // @ts-expect-error It's known issue in Animated API
        const value: number = pan.y._value; // eslint-disable-line no-underscore-dangle
        if (value < closeModalThreshold) {
          openModal();
        } else {
          closeModal();
        }
      },
    }),
  ).current;

  return (
    <View
      style={tailwind('absolute w-full h-full z-10')}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <Animated.View
        style={{
          ...tailwind('absolute w-full h-full bg-black'),
          opacity,
        }}
      >
        <Pressable style={tailwind('flex-1')} onPress={closeModal} />
      </Animated.View>
      <Animated.View
        style={{
          ...tailwind(
            'bg-white w-full h-9/10 absolute z-10 bottom-0 rounded-t-xl overflow-hidden',
          ),
          transform: pan.getTranslateTransform(),
        }}
      >
        <ModalHeader
          panHandlers={panResponder.panHandlers}
          title={i18n.t('componentsModalTitle')}
        />
        <ScrollView style={tailwind('flex-1 h-full')}>{children}</ScrollView>
      </Animated.View>
    </View>
  );
};

export default ModalMain;

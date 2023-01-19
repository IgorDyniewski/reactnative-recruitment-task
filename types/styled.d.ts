/*
  You can define all properties that mess with TS & Styled-components here.
*/

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    defaultSideSpacing: number;
    headingsSizes: Record<string, number>;
    headingLineHeightDefaultMultiplier: number;
    headingDefaultColor: string;
    fontSize: Record<Array>;
    ratingSpacingBetween: string;
    colors: Record<string, string>;
    featureRowTitleFontsSize: string;
    dpLogoSizes: Record<string, number>;
    badges: Record<string, Record<string, Array<string>>>;
    avatarSizes: Record<string, number>;
    homeScrollViewZIndex: number;
    homeStatusBarZIndex: number;
    homeStatusBarColor: string;
    homeStatusBarOpacity: number;
    defaultAnimationForBg: {
      duration: number;
      useNativeDriver: boolean;
    };
    defaultAnimationForModal: {
      tension: number;
      useNativeDriver: boolean;
    };
    tabIndicatorDefaultAnimationProps: {
      tension: number;
      useNativeDriver: boolean;
    };
    closeModalThreshold: number;
    modalPillSize: Record<string, number>;
    tabIndicatorHeight: Record<string, number>;
  }
}

/*
  In this file we define all static variables for our styles..
*/
const variables = {
  spacingBase: 5,
  spacingLevels: 10,
  defaultSideSpacing: 15,
  colors: {
    primary: '#3d83df',
    'primary-dark': '#1662c6',
    'primary-light': '#eef4fd',
    secondary: '#00c3a5',
    'secondary-light': '#e0f7f4',
    'secondary-dark': '#00b39b',
    'custom-gray-1': '#e4e5e8',
    'custom-gray-2': '#eceff2',
    'gray-900': '#1b2734',
    'gray-600': '#627282',
    'gray-300': '#dcdfe3',
    white: '#fff',
    black: '#000',
  },
  headingsSizes: {
    h1: 32,
    h2: 26,
    h3: 20,
    h4: 16,
    h5: 15,
    h6: 12,
  },
  headingLineHeightDefaultMultiplier: 1.5,
  headingDefaultColor: '#1b2734',
  doctorNameFontSize: 18,
  fontSize: {
    sm: ['14px', '22.4px'],
    base: ['15px', '24'],
    lg: ['18px', '26px'],
    xl: ['20px', '32px'],
    xxl: ['28px', '32px'],
  },
  ratingSpacingBetween: '1.5px',
  flex: {
    1: '1',
    2: '2',
  },
  featureRowTitleFontsSize: 'base',
  dpLogoSizes: {
    baseHeight: 33,
    sm: 0.5,
    md: 1.0,
    lg: 1.5,
  },
  badges: {
    xl: {
      wrapper: ['py-2', 'px-3'],
      text: ['text-base'],
    },
    md: {
      wrapper: ['py-0', 'px-2'],
      text: ['text-base'],
    },
    sm: {
      wrapper: ['py-0', 'px-1'],
      text: ['text-base'],
    },
    primary: {
      wrapper: ['bg-primary-light'],
      text: ['text-primary-dark'],
    },
    secondary: {
      wrapper: ['bg-secondary-light'],
      text: ['text-secondary-dark'],
    },
  },
  avatarSizes: {
    sm: 42,
    md: 80,
    lg: 100,
  },
  homeScrollViewZIndex: 1,
  homeStatusBarZIndex: 2,
  homeStatusBarColor: '#fff',
  homeStatusBarOpacity: 0.7,
  opacity: {
    80: '.8',
  },
  defaultAnimationForBg: {
    duration: 400,
    useNativeDriver: true,
  },
  defaultAnimationForModal: {
    tension: 2,
    useNativeDriver: false,
  },
  closeModalThreshold: 200,
  height: {
    '9/10': '90%',
    full: '100%',
  },
  modalPillSize: {
    width: 60,
    height: 5,
  },
  tabIndicatorHeight: {
    open: 3,
  },
  tabIndicatorDefaultAnimationProps: {
    duration: 200,
    useNativeDriver: false,
  },
  fontFamily: {
    'roboto-regular': 'Roboto_400Regular',
  },
};

module.exports = variables;

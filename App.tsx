/*
  This is the root of the whole app. For providers, registering screens etc.
*/
import React, { useEffect, useState } from 'react';
import { TailwindProvider } from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { Asset } from 'expo-asset';
import i18n from 'i18n-js';
import {
  useFonts,
  WorkSans_400Regular, // eslint-disable-line
  WorkSans_500Medium, // eslint-disable-line
  WorkSans_600SemiBold, // eslint-disable-line
} from '@expo-google-fonts/work-sans';
import {
  Roboto_400Regular,  // eslint-disable-line
  Roboto_500Medium,  // eslint-disable-line
  Roboto_700Bold, // eslint-disable-line
} from '@expo-google-fonts/roboto';

// Lib
import * as Localization from 'expo-localization';
/* eslint-disable-next-line import/extensions */
import utilities from './tailwind/output/styles.json';
import theme from './config/theme';

// Screens
import HomeScreen from './screens/HomeScreen';

// Localizations i18n setup
/* eslint-disable-next-line import/extensions */
import en from './translations/en.json';

i18n.translations = { en };
i18n.locale = Localization.locale;
i18n.fallbacks = true;

type RootStackParamList = {
  HomeScreen: React.FC;
  LoadingScreen: React.FC;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

// Options for stack navigator
const screenOptions = {
  headerShown: false,
};

const App: React.FC = () => {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  // Cashing images
  const cacheResourcesAsync = async (): Promise<void> => {
    /* eslint-disable-next-line */
    const images = [require('./assets/splash.png')];

    const cacheImages = images.map(image =>
      Asset.fromModule(image).downloadAsync(),
    );
    try {
      await Promise.all(cacheImages);
      setAreImagesLoaded(true);
    } catch (e) {
      throw new Error();
    }
  };

  // Starting cashing
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    cacheResourcesAsync();
  }, []);

  // Loading fonts
  const [areFontsLoadedHook] = useFonts({
    WorkSans_400Regular, // eslint-disable-line
    WorkSans_500Medium, // eslint-disable-line
    WorkSans_600SemiBold, // eslint-disable-line
    Roboto_400Regular,  // eslint-disable-line
    Roboto_500Medium,  // eslint-disable-line
    Roboto_700Bold, // eslint-disable-line
  });

  // Keeping eye on our fonts and images
  useEffect(() => {
    if (areFontsLoadedHook && areImagesLoaded) {
      setIsAppReady(true);
      SplashScreen.hideAsync();
    }
  }, [areFontsLoadedHook, areImagesLoaded]);

  // Rendering nothing before images and fonts are loaded
  if (!isAppReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <TailwindProvider utilities={utilities}>
          <NavigationContainer>
            <RootStack.Navigator
              screenOptions={screenOptions}
              initialRouteName="HomeScreen"
            >
              <RootStack.Screen name="HomeScreen" component={HomeScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
        </TailwindProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

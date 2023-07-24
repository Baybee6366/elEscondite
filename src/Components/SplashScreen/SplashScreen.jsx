import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Login } from './screens';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SplashScreen from "react-native-splash-screen";

export const SplashScreen = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    }
  }
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    </NavigationContainer>
  );
};


import React from 'react';
import { View } from 'react-native';
import MainPageComponent from './src/screens/MainPage/MainPage.component';
import { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const MainComponentApp = () => {
      useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
      }, []);
    return (
        <NavigationContainer>
            <MainPageComponent />
        </NavigationContainer>
    )
}

export default MainComponentApp;


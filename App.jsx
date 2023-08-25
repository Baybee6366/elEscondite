import React from 'react';
import { ScrollView, View } from 'react-native';
import MainPageComponent from './src/screens/MainPage/MainPage.component';

const MainComponentApp = () => {
  return(
    <View style={{flex: 1}}>
      <MainPageComponent />
    </View>
)
}

export default MainComponentApp;


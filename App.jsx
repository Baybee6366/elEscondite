import React from 'react';
import { Text, View } from "react-native";
import style from './src/commons/styles';


const MainComponentApp = () => {
  return (
    <View styles={style.mainContiner}>
      <Text styles={style.textColor}>
        Gimme money
      </Text>
    </View>)
};

export default MainComponentApp;


import React from 'react';
import { Text, View } from "react-native";
import style from './src/commons/styles';


const MainComponentApp = () => {
  return (
    <View>
      <Text styles={style.textColor}>
        Hola mundo
      </Text>
    </View>)
};

export default MainComponentApp;


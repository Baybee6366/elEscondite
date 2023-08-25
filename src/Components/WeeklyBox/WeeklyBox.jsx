import React from "react";
import {View, Pressable, Text, Image} from "react-native";
import styles from "./style";

export const WeeklyBox = props => {
  return (
    <View style={styles.weeklyContainer}>
      <Image 
        style={styles.image}
        source={require('../../images/interestellar.jpg')} />
    </View>
  )
};



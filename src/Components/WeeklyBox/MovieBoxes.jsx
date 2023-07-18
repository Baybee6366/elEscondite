import React from "react";
import {View, Pressable, Text, Image} from "react-native";
import styles from "./style";

export const WeeklyBox = props => {
  return (
    <View style={styles.weeklyContainer}>
      <Text>ola</Text>
    </View>
  )
};

export const DailyBox = props =>{
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.dailyContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer} 
              source={require('../../images/interestellar.jpg')} />
            <Text style={styles.titleContainer}>Interestellar</Text>
          </View>
        </View>
        <View style={styles.dailyContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer} 
              source={require('../../images/interestellar.jpg')} />
            <Text style={styles.titleContainer}>Interestellar</Text>
          </View>
        </View>
        <View style={styles.dailyContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer} 
              source={require('../../images/interestellar.jpg')} />
            <Text style={styles.titleContainer}>Interestellar</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.dailyContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer} 
              source={require('../../images/interestellar.jpg')} />
            <Text style={styles.titleContainer}>Interestellar</Text>
          </View>
        </View>
        <View style={styles.dailyContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer} 
              source={require('../../images/interestellar.jpg')} />
            <Text style={styles.titleContainer}>Interestellar</Text>
          </View>
        </View>
        <View style={styles.dailyContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer} 
              source={require('../../images/interestellar.jpg')} />
            <Text style={styles.titleContainer}>Interestellar</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

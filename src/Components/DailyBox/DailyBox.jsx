import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const DailyBox = props => {
  return(
    <View style={styles.dailyContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageContainer} 
          source={require('../../images/interestellar.jpg')} />
        <Text style={styles.titleContainer}>Interestellar</Text>
      </View>
    </View>
  )
};


export default DailyBox;
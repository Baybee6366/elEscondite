import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const DailyBox = props => {
  return(
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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Interestellar</Text>
            </View>
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
);
};

export default DailyBox;
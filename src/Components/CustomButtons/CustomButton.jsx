import React from 'react';
import {View, Pressable, Image} from 'react-native';
import styles from './style';

export const ThumbsButtons = props => {
  const {onPressUp, type} = props;
  const {onPressDown, downType} = props;
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressUp}>
        <View style={styles.greenButton}>
          <Image
            style={styles.likeImage}
            source={require('../../images/pulgar-arriba.png')} 
          />
        </View>
      </Pressable>
      <Pressable onPress={onPressDown}>
        <View style={styles.redButton}>
          <Image 
            style={styles.dislikeImage}
            source={require('../../images/disgusto.png')} 
          />
        </View>
      </Pressable>
    </View>
)
};

export const BackButton = props => {
  return (
    <View style={styles.backContainer}>
      <Image 
        style={styles.backContainer}
        source={require('../../images/flecha.png')} 
      />
    </View>
  )
}



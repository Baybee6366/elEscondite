import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dailyContainer: {
        borderWidth: 1,
        width: '22.3%',
        height: 100,
        marginTop: 30,
        marginLeft: '8%',
      },
      imageContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 2,
      },
      titleContainer: {
        textAlign: 'center',
        height: '30%',
        width: '100%',
        marginTop: '80%',
        backgroundColor: '#000',
        color: '#fff',
        zIndex: 3,
        opacity: 0.3,
      },
});

export default styles;
import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenButton: {
    backgroundColor: 'green',
    height: 60,
    width: 60,
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginLeft: 10,
  },
  likeImage: {
    marginTop: '5%',
    marginLeft: '10%',
    height: '80%',
    width: '80%',
    position: 'absolute',
    zIndex: 2,
  },
  redButton: {
    backgroundColor: 'red',
    textAlign: 'center',
    height: 60,
    width: 60,
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginLeft: 80,
  },
  dislikeImage: {
    marginTop: '10%',
    marginLeft: '10%',
    height: '80%',
    width: '80%',
    position: 'absolute',
    zIndex: 2,
  },
  backContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 4,
  },
});

export default styles;
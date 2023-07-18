import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '94.3%',
    width: '82%',
    backgroundColor: 'red',
    color: '#000',
    marginTop: 32,
    marginHorizontal: 32,
  },
  imageContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: '#000',
    marginBottom: 20,
  },
  textContainer: {
    height: '52%',
    width: '100%',
    backgroundColor: 'blue',
    marginBottom: 15,
  },
  buttonContainer: {
    height: 60,
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  backBox: {
    height: 30,
    width: 30,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#FFF',
  }
});

export default styles;
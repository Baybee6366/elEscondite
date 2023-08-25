import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '94.3%',
    width: '82%',
    backgroundColor: '#000',
    color: '#000',
    marginTop: 32,
    marginHorizontal: 32,
  },
  imageContainer: {
    height: '40%',
    width: '100%',
    marginBottom: '5%',
    backgroundColor: '#000',
  },
  textContainer: {
    height: '45%',
    width: '100%',
    color: '#FFF',
    zIndex: 2,
  },
  textTitle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginBottom: '5%',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: '5%',
    marginRight: '5%',
  },
  buttonContainer: {
    height: 60,
    width: '100%',
    alignItems: 'center',
  },
  backBox: {
    height: 30,
    width: 30,
    marginTop: 20,
    marginLeft: 20,
    zIndex: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 2,
  },
});

export default styles;